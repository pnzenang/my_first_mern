import { useEffect, useState } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate, Link } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false
};
const ForgotPassword = () => {
  const [values, setValues] = useState(initialState);

  //global state and useNavigate
  const navigate = useNavigate();

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };

    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>forgot password</h3>
        {showAlert && <Alert />}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
        <p className='forgot-password'>
          <Link className={'link-style'} to='/register'>
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default ForgotPassword;
