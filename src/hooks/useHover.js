import { useContext } from 'react';

import cursorContext from '../context/cursorContext';

const useHover = style => {
    const { dispatchCursor } = useContext(cursorContext);

    const handleMouseEnter = () => {
        dispatchCursor({
            type: 'UPDATE_CURSOR_STYLE',
            payload: style
        })
    }

    const handleMouseLeave = () => {
        dispatchCursor({
            type: 'UPDATE_CURSOR_STYLE',
            payload: ``
        })
    }

    return {
        handleMouseEnter,
        handleMouseLeave
    }
}

export default useHover;