import RegisterForm from "../../components/register-form/register-form.compoenent";
import LoginForm from "../../components/login-form/login-form.compoenent";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};
export default Authentication;
