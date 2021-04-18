import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    const quickLink = [
        { name: "Home", link: "/home" },
        { name: "About Us", link: "/aboutUs" },
        { name: "Company History", link: "/companyHistory" },
        { name: "Features", link: "/features" },
        { name: "Blog Page", link: "/blog" }
    ]
    const communityLink = [
        { name: "Career", link: "/career" },
        { name: "Leadership", link: "/leadership" },
        { name: "Strategy", link: "/strategy" },
        { name: "Services", link: "/services" },
        { name: "History", link: "/history" }

    ]

    const contractInfo = [

    ]

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <h4 className="py-2">SOFTING</h4>
                            <small className="text-secondary">Excellence decisively any man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new.</small>
                        </div>
                    </div>
                    <FooterCol key={1} menuTitle={'Quick Link'} menuItems={quickLink} />
                    <FooterCol key={2} menuTitle={'Community'} menuItems={communityLink} />
                    <FooterCol key={3} menuTitle={'Contract'} menuItems={contractInfo} >

                        <small className="text-secondary">Estimating stimulated how reasonably precaution diminution she simplicity</small>

                        <ul className="social-media list-inline pt-4">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center py-3">
                    <p className="pt-3 text-secondary">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;