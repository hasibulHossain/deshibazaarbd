import { useRouter } from "next/router"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataAction } from "../../_redux/getUserData/Action/UserDataAction";

const ProtectedRoute = (ProtectedComponent) => {

   return (props) => {
      if (typeof window !== "undefined") {

         const Router   = useRouter();
         const dispatch = useDispatch()
         const userData = useSelector((state) => state.UserDataReducer.userData);

         useEffect(() => {
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