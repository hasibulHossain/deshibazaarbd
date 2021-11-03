import React, {useEffect, useState} from "react";
import { getSession } from 'next-auth/client'
import Link from "next/link";

/**
 * 
 * @param {} WrappedComponent 
 * @returns - 
 */
const withProtectedRoute = (WrappedComponent, isSignedIn = false) => {
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

        if(session && isSignedIn && !loading) {
            return window.location.replace('/');
        }

        if(!session && !loading && isSignedIn) {
            return <WrappedComponent {...props} />
        }


        if(session) {
            return (
                <WrappedComponent {...props} />
            )
        }
        
        if(!session && !loading) {
            return (
                <div style={{textAlign: 'center', padding: '30px 0'}}>
                    <h1 className="mb-5">
                        You must be signed in to view this page!
                    </h1>
                    <h3 className="text-center">
                        <span className="mr-1">Please</span> 
                        <Link href="/login">
                            <a>
                                sign in
                            </a>
                        </Link>
                        <span className="ml-1">to view this page.</span>
                    </h3>
                </div>
            )
        }

    }
}

export default withProtectedRoute;