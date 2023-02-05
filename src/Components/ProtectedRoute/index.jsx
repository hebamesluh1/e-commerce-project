import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import  PATHS  from './../../routes/index';
import { AuthContext } from './../../Context/authContext';

export const ProtectedRoute =()=> {
    const {isAuthorized, setIsAuthorized} = useContext(AuthContext);
        return (
        <div>
            {isAuthorized? (
            <>
                <Outlet />
            </>
            ) : (
            <Navigate to={PATHS.LOGIN} />
            )}
        </div>
        );
    }