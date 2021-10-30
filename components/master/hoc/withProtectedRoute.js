import React, {useEffect, useState} from "react";
import { getSession } from 'next-auth/client'

/**
 * 
 * @param {} WrappedComponent 
 * @returns - 
 */
const withProtectedRoute = (WrappedComponent) => {
    return function WithProtectedRoute(props) {
        const [session, setSession] = useState(false)
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            (async () => {
                const session = await getSession();
                if(session && session.accessToken) {
                    setSession(true)
                }
                if(session || !session) {
                    setLoading(false)
                }
            })();
        }, [session, loading]);

        if(!session && loading) {
            return null
        }

        if(session) {
            return (
                <WrappedComponent {...props} />
            )
        }
        
        if(!session && !loading) {
            return (
                <div style={{textAlign: 'center', padding: '30px 0'}}>
                    <h1>
                        You must be signed in to view this page!
                    </h1>
                </div>
            )
        }

    }
}

export default withProtectedRoute;