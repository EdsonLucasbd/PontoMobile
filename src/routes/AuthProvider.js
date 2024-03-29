import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const usersRef = firestore().collection('users');
  const timeSheetRef = firestore().collection('users_time_sheet');
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        usersRef,
        timeSheetRef,
        googleLogin: async () => {
          try {
            // Get the users ID token
            const userInfo = await GoogleSignin.signIn();
            const { idToken } = userInfo;
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential)
            .then(data => {
              usersRef.doc(data.user.uid).get().then((document) => {
                if(document.exists) {
                  console.log('User exists');
                  return;
                } else {
                  usersRef.doc(data.user.uid).set({
                    name: data.user.displayName,
                    image: data.user.photoURL,
                    company: ''
                  });
                }
              })
              console.log('User signed in!')
            });
          } catch(err) {
            console.log(err);
          }
        },
        facebookLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential)
            .then(data => {
              usersRef.doc(data.user.uid).set({
                name: data.user.displayName,
                image: data.user.photoURL,
                company: ''
              });
              console.log('User signed in!')
            });

          } catch (err) {
            console.log(err);
          }
        },
        logout: async () => {
          try {
            await auth().signOut().then(() => console.log('User signed out!'));
          } catch (err) {
            console.log(err);
          }
        },
        revokeAccess: async () => {
          try {
            await GoogleSignin.revokeAccess();
            // Google Account disconnected from your app.
            // Perform clean-up actions, such as deleting data associated with the disconnected account.
          } catch (err) {
            console.error(err);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}