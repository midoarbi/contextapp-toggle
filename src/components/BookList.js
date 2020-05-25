import React, { Component } from 'react'
import {ThemeContext} from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='book-list' style={{background: theme.bg, color: theme.syntax}} >
                <ul >
                    <li style={{background: theme.ui}} >The ways of king</li>
                    <li style={{background: theme.ui}} >heros</li>
                    <li style={{background: theme.ui}} >last kingdom</li>
                </ul>
            </div>
        )
    }
}

export default BookList
