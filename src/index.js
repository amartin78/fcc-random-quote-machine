import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoaded: false,
            text : '',
            author: '',
            error: ''
        }
    }

    componentDidMount() {
        fetch("https://cors-anywhere.herokuapp.com/api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    text: result.quoteText,
                    author: result.quoteAuthor,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        return (
            <div id="quote-box">
                <div id="text">{this.state.text + " - " + this.state.author}</div>
            </div>
        );
    }
}



ReactDOM.render(<Main />, document.getElementById('root'));


