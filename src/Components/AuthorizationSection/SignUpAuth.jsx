import SignUp from '../../Pages/SignUp';
import { useAuthContext } from '../../Context/authContext';
import { PATHS } from '../../routes/index';
import { Navigate } from 'react-router-dom';


const SignUpAuth = ()=>{
    const {
        authorized,
    } = useAuthContext();
    return <>{authorized?(<Navigate to={PATHS.HOME}/>):(<SignUp />)}</>

}
export default SignUpAuth;