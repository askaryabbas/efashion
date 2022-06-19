import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import RegisterForm from "../../components/register-form/register-form.compoenent";
const Login = () => {
  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={logGoogleUser}>Login with google</button>
      <RegisterForm />
    </div>
  );
};
export default Login;
