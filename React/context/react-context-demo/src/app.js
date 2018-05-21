import React from 'react';
import { ThemeContext, themes } from './theme-context';
import { Content } from './content';
import { Header } from './header';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // Do this in the constructor so that state can be initialized correctly
        this.toggleTheme = () => {
            const theme = this.state.theme;
            this.setState({
                theme: theme === themes.dark ? themes.light : themes.dark
            });
        };

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        // Note that the value of ThemeContext is {theme, toggleTheme}
        return (
            <ThemeContext.Provider value={this.state}>
                <Header />
                <Content />
            </ThemeContext.Provider>
        );
    }
}
