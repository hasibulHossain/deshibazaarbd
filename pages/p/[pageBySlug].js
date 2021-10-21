import React from "react";
import ReactHtmlParser from 'react-html-parser';
import LoadingSpinner from "../../components/master/LoadingSpinner/LoadingSpinner";

export default function PageBySlug(props) {
    const { pageData } = props;

    return (
        <div className="container">
            <div className="row my-4 justify-content-center">
                {
                    !pageData && <LoadingSpinner text="Page Loading..." />
                }

                {
                    pageData &&
                    <div className="col-lg-12 px-0">
                        <div className="card rounded">
                            <div className="card-header">
                                <h1 className="website-info-title">{pageData.title}</h1>
                            </div>
                            <div className="card-body">
                                <div>
                                    {ReactHtmlParser(pageData.description)}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    const { pageBySlug } = context.params;
    const pageDataRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}page/${pageBySlug}`);
    const pageData = await pageDataRes.json();

    console.log('page date => ', pageData)

    if(!pageData.data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            pageData: pageData.data
        },
        revalidate: 3600
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {pageBySlug: 'help-center'}},
            {params: {pageBySlug: 'how-to-buy'}},
            {params: {pageBySlug: 'return-and-refund-policy'}},
            {params: {pageBySlug: 'shipping-method'}},
            {params: {pageBySlug: 'same-day-delivery'}},
            {params: {pageBySlug: 'site-map'}},
            {params: {pageBySlug: 'faq'}},
            {params: {pageBySlug: 'about-us'}},
            {params: {pageBySlug: 'career'}},
            {params: {pageBySlug: 'affiliate'}},
            {params: {pageBySlug: 'wholesale'}},
            {params: {pageBySlug: 'contact'}},
            {params: {pageBySlug: 'terms-&-condition'}},
            {params: {pageBySlug: 'privacy-policy'}},
            {params: {pageBySlug: 'blog'}}
        ],
        fallback: true
    }
}