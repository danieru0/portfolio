import React, { useContext } from 'react';

import cursorContext from '../../context/cursorContext';

import Circle from '../atoms/Circle';

const Cursor = () => {
    const { cursorState } = useContext(cursorContext);

    return (
        <Circle cursorStyle={cursorState.cursorStyle}/>
    );
};

export default Cursor;