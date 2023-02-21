import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./../../routes/index";
import { useAuthContext } from "./../../Context/authContext";
import { Suspense } from "react";

const ProtectedRoute = () => {
  const { authorized } = useAuthContext();
  return (
    <div>
      {authorized ? (
        <>
          <Suspense fallback={<div className="lds-dual-ring"></div>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <Navigate to={PATHS.LOGIN} />
      )}
    </div>
  );
};
export default  ProtectedRoute;
