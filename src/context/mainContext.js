import React from 'react';

export const initalState = {
    active: 0,
    prevActive: 0,
    dropdownMenu: false,
    language: 'PL'
}

const mainContext = React.createContext({initalState});

export default mainContext;