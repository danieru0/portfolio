import React from 'react';

export const initalCursorState = {
    cursorStyle: ''
}

const cursorContext = React.createContext({initalCursorState});

export default cursorContext;