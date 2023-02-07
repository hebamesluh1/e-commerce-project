import { Navigate } from 'react-router-dom';
import { lazy} from 'react';
import { ProtectedRoute } from '../Components/ProtectedRoute';
// import { AuthContext } from './../../Context/authContext';
// import { useContext } from 'react';

//pages
const Main =lazy(() => import('../Pages/Main'));
const LoginAuth =lazy(()=> import('./../Components/AuthorizationSection/LoginAuth'));
const SignUpAuth =lazy(()=> import('./../Components/AuthorizationSection/SignUpAuth'));
const TechStore = lazy(()=>import (("../Pages/TechStoreList")));
const Cart = lazy(()=>import('../Pages/Cart'));
const Clothes= lazy(()=>import('../Pages/Clothes'));
const NotFound= lazy(()=>import('../Pages/NotFound'));


const BodySection = lazy(()=>import('../Components/BodySection'));
const BodySuggestion = lazy(()=>import('../Components/BodySuggestion'));



//paths
export const PATHS={
    LOGIN:'/logIn',
    SIGNUP:'/signUp',
    MAIN:'main',
    LIST:'list',
    CART:'cart',
    CLOTHES:'clothes',
    GRID:'grid',
    TABLE:'table',
    HOME:'/home',
}
export const router = [
    { index:'true',element:<Navigate to={PATHS.MAIN}/>},
    { path:PATHS.LOGIN,element:<LoginAuth />},
    { path:PATHS.SIGNUP, element: <Main /> },
    { path:PATHS.MAIN, element: <SignUpAuth /> },
    { path:PATHS.HOME,element:<ProtectedRoute/>,children:[
        {index:true,element:<Main/>},
        { path:PATHS.LIST, element: <TechStore />,children:[
            {index:true , element:<Navigate to={PATHS.GRID}/>},
            {path:PATHS.GRID,element:<BodySection />},
            {path:PATHS.TABLE,element:<BodySuggestion />},
        ] },
        { path:PATHS.CART, element: <Cart /> },
        { path:PATHS.CLOTHES, element: <Clothes /> }
    ]},
    { path: '*', element: <NotFound/> },
];