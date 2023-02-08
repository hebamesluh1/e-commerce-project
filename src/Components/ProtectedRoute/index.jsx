import { Navigate, Outlet } from 'react-router-dom';
import  {PATHS}  from './../../routes/index';
import { useAuthContext } from './../../Context/authContext';


export const ProtectedRoute =()=> {
    const {
        authorized,
    } = useAuthContext();
        return (
        <div>
            {authorized? (
            <>
                <Outlet />
            </>
            ) : (
                <Navigate to={PATHS.LOGIN}/>
            )
            }
        </div>
        );
    }