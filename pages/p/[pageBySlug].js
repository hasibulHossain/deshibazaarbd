import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../../components/layouts/MainLayout";
import { getWebsitePageAction } from "../../components/_redux/WebsiteInformation/Action/WebsiteInformationAction";
import ReactHtmlParser from 'react-html-parser';
import LoadingSpinner from "../../components/master/LoadingSpinner/LoadingSpinner";

export default function PageBySlug() {

    const dispatch = useDispatch();
    const router = useRouter();
    const { pageBySlug } = router.query;
    let pageTitle = pageBySlug.replace(/-/gi, " ");

    const { pageData, isLoading } = useSelector((state) => state.WebsitePageReducer);

    useEffect(() => {
        dispatch(getWebsitePageAction(pageBySlug));
    }, [router.query]);

    return (
        <MainLayout pageTitle={typeof pageData !== 'undefined' && pageData !== null ? pageData.title : ''}>
            <div className="container">
                <div className="row m-3 justify-content-center">
                    {
                        isLoading && <LoadingSpinner text="Page Loading....." />
                    }

                    {
                        typeof pageData !== 'undefined' && pageData !== null &&
                        <div className="col-lg-9">
                            <div className="card shadow rounded">
                                <div className="card-header">
                                    <h6>{pageData.title}</h6>
                                </div>
                                <div className="card-body">
                                    <div>
                                        {ReactHtmlParser(pageData.description)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        !isLoading && (typeof pageData === "undefined" || pageData === null) && (
                            <div className="col-lg-9">
                                <div className="card shadow rounded">
                                    <div className="card-header">
                                        <h6>{pageTitle}</h6>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            {pageTitle} page coming soon....
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </MainLayout>
    );
}

