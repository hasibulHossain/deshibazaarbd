import { useRouter } from "next/router"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataAction } from "../../_redux/getUserData/Action/UserDataAction";
import { showToast } from "../Helper/ToastHelper";

const ProtectedRoute = (ProtectedComponent) => {

   return (props) => {
      if (typeof window !== "undefined") {

         const Router      = useRouter();
         const dispatch    = useDispatch();
         const userData    = useSelector((state) => state.UserDataReducer.userData);
         const currentPath = Router.pathname;
         let pageTitle     = currentPath.replace("/", " ");

         useEffect(() => {
            dispatch(getUserDataAction());
            localStorage.setItem("redirectTo", JSON.stringify(currentPath));
         }, [])

         if (!userData) {
            // showToast('error', `Please login to ${pageTitle}` )
            Router.replace("/login")
            return null
         } else {
            return <ProtectedComponent {...props} />
         }
      }

      return null
   }
}

export default ProtectedRoute