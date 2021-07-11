import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProductModal from '../products/ProductModal';
import { getWebsiteInformation } from '../_redux/WebsiteInformation/Action/WebsiteInformationAction';

const FooterBottom = () => {
    
    const dispatch = useDispatch();
    const { websiteInfo, isLoading } = useSelector((state) => state.WebsiteInformationReducer);
    useEffect(() => {
        dispatch(getWebsiteInformation())
    }, [])

    return (
        <div className="footer-bottom">
            <Container>
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6">
                        <div className="footer-bottom-info">
                            {
                                isLoading && <p>Loading info.....</p>
                            }
                            {
                                websiteInfo &&
                                <p> {websiteInfo.footer_text} </p>
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={"/images/Payment-Icon-Buzfi.com-best-online-shopping-in-the-USA-2020-best-e-commerce-shop-in-the-United-States.png"} alt="deshi bazaar bd" className="img-fluid mb-2 mt-2 pointer" />
                    </div>
                </div>
            </Container>

            <ProductModal />
        </div >
    );
};

export default FooterBottom;