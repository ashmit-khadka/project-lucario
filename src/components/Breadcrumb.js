import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router';

const Breadcrumb = (props) => {
    const { paths } = props;


    return (
        <nav className="breadcrumb">
            <ul className="breadcrumb-list">
                {props.items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                            <Link to={item.link} className="breadcrumb-link">
                                {item.label}
                            </Link>            
                        {index < props.items.length - 1 && <span className="breadcrumb-separator">{`>`}</span>}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Breadcrumb.propTypes = {
    items: Proptypes.arrayOf(
        Proptypes.shape({
            label: Proptypes.string.isRequired,
            link: Proptypes.string.isRequired,
        })
    ).isRequired,
};

export default Breadcrumb;