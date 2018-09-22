import React from 'react';
import { ThemeContext } from './theme-context';

export function Content() {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => {
                const styles = {
                    root: {
                        flex: 1,
                        padding: 16,
                        color: theme.text,
                        backgroundColor: theme.background
                    }
                };
                return (
                    <div style={styles.root}>
                        Click the <strong>Toggle Theme</strong> button to change
                        the theme!
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
}
