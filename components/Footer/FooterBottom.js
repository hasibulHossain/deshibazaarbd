import React from 'react';
import content from '../../content.json';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-12">
                        <div className="footer-bottom-info">
                            <span>&copy; {content.copyright_text}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FooterBottom;