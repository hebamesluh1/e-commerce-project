import { Navigate } from 'react-router-dom';
import { lazy} from 'react';



//pages
const Main =lazy(() => import('../Pages/Main'));
const Login =lazy(()=>import ("../Pages/LogIn"));
const SignUp= lazy(()=>import ("../Pages/SignUp"));
const TechStore = lazy(()=>import (("../Pages/TechStoreList")));
const Cart = lazy(()=>import('../Pages/Cart'));
const Clothes= lazy(()=>import('../Pages/Clothes'));


const BodySection = lazy(()=>import('../Components/BodySection'));
const BodySuggestion = lazy(()=>import('../Components/BodySuggestion'));



//paths
export const PATHS={
    LOGIN:'/logIn',
    SIGNUP:'/signUp',
    MAIN:'/main',
    LIST:'/list',
    CART:'/cart',
    CLOTHES:'/clothes',
    GRID:'grid',
    TABLE:'table',
}
export const router = [
    {index:'true',element:<Navigate to={PATHS.MAIN}/>},
    { path:PATHS.LOGIN,element: <Login />,},
    { path:PATHS.SIGNUP, element: <SignUp /> },
    { path:PATHS.MAIN, element: <Main /> },
    { path:PATHS.LIST, element: <TechStore />,children:[
        {index:true , element:<Navigate to={PATHS.GRID}/>},
        {path:PATHS.GRID,element:<BodySection />},
        {path:PATHS.TABLE,element:<BodySuggestion />},
    ] },
    { path:PATHS.CART, element: <Cart /> },
    { path:PATHS.CLOTHES, element: <Clothes /> },
    { path: '*', element: <h1>page not found 404</h1> },
];



