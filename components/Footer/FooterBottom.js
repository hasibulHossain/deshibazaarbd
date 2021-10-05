import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProductModal from '../products/ProductModal';
import { getWebsiteInformation } from '../_redux/WebsiteInformation/Action/WebsiteInformationAction';

const FooterBottom = () => {

    const dispatch = useDispatch();
    const { websiteInfo, isLoading } = useSelector((state) => state.WebsiteInformationReducer);

    useEffect(() => {
        if(websiteInfo === null) {
            dispatch(getWebsiteInformation());
        }
    }, [])

    return (
        <div className="footer-bottom">
            <Container>
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-12">
                        <div className="footer-bottom-info">
                            {
                                isLoading && <span>Loading info.....</span>
                            }
                            {
                                websiteInfo &&
                                <span> {websiteInfo.footer_text} </span>
                            }
                        </div>
                    </div>
                </div>
            </Container>

            <ProductModal />
        </div >
    );
};

export default FooterBottom;