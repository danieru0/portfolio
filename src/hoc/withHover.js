import React from 'react';

const withHover = WrappedComponent => {
    const withHoverComponent = props => {
        const { onMouseEnter, onMouseLeave } = props;
        return (
            <WrappedComponent onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}  />
        );
    }
    
    return withHoverComponent;
};

export default withHover;