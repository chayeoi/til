import React from 'react';
import { ThemeContext } from './theme-context';

export function Header() {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => {
                const styles = {
                    root: {
                        height: 50,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 16px',
                        color: theme.contrastText,
                        backgroundColor: theme.primary
                    },
                    title: {
                        flex: 1,
                        fontWeight: 'bold'
                    },
                    button: {
                        color: '#303030',
                        backgroundColor: '#e0e0e0',
                        fontWeight: 'bold',
                        fontSize: 12,
                        padding: '4px 16px',
                    }
                };

                return (
                    <div style={styles.root}>
                        <span style={styles.title}>React Context Demo</span>
                        <button style={styles.button} onClick={toggleTheme}>
                            Toggle Theme
                        </button>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
}
