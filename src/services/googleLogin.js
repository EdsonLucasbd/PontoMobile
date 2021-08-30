import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '278514425620-n4kvod1p6106scnpvj9q1ddp7ed3h8b7.apps.googleusercontent.com',
});

const onGoogleButtonPress = async () => {
  // Get the users ID token
  await GoogleSignin.hasPlayServices();
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export default onGoogleButtonPress;