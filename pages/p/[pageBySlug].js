import React from "react";
import { useRouter } from 'next/router';
import MainLayout from "../../components/layouts/MainLayout";

export default function PageBySlug() {
    
    const router         = useRouter();
    const { pageBySlug } = router.query;
    let pageTitle        = pageBySlug.replace(/-/gi, " "); 

    const titleCase = (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    return (
        <>
            <MainLayout pageTitle={titleCase(pageTitle)}>
                <div className="row m-3 justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow rounded">
                            <div className="card-header">
                                <h6>{titleCase(pageTitle)}</h6>
                            </div>
                            <div className="card-body">
                                <p>{titleCase(pageTitle)} page coming soon....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

