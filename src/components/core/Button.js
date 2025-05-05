import React from "react";

const Button = (props) => {
    const { onClick, children, className } = props;

    return (
        <button
            onClick={onClick}
            className={`button ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;