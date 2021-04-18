import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h5 className="">{props.menuTitle}</h5>
            <ul className="list-unstyled">
                {
                    props.menuItems.map((item, index) => <li className="py-2" key={index}><Link className="text-decoration-none text-secondary" to={item.link}>{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;