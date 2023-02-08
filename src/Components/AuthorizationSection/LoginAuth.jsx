import { Navigate } from 'react-router-dom';
import Login from '../../Pages/LogIn';
import { useAuthContext } from '../../Context/authContext';
import { PATHS } from '../../routes/index';

const LoginAuth = ()=>{
    const {
        authorized,
    } = useAuthContext();
    return <>
        {authorized?(<Navigate to={PATHS.HOME}/>):(<Login />)}
    </>
}
export default LoginAuth;
