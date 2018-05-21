import React from 'react';

export const themes = {
    light: {
        primary: '#2196F3',
        background: '#fafafa',
        text: '#000000',
        contrastText: '#ffffff'
    },
    dark: {
        primary: '#2196F3',
        background: '#303030',
        text: '#ffffff',
        contrastText: '#ffffff'
    }
};

export const ThemeContext = React.createContext();
