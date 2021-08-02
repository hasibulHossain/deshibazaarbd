import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData } from "../../LoginRegistration/_redux/Action/LoginAction";
import { getUserDataAction } from "../../_redux/getUserData/Action/UserDataAction";

const ProtectedRoute = (ProtectedComponent) => {

   return (props) => {
      if (typeof window !== "undefined") {

         const Router = useRouter();
         const dispatch = useDispatch();
         const [isLoggedIn, setIsLoggedIn] = useState(false)
         const userData = useSelector((state) => state.UserDataReducer.userData);

         useEffect(() => {
            dispatch(getAuthData());
            dispatch(getUserDataAction());
         }, [])

         if (!userData) {
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