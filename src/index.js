import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Box extends React.Component {

    render() {
        return (
            <div>
                <p id="text">{this.props.text}</p>
                <p id="author">{this.props.author}</p>
            </div>
        );
    }
}

class Buttons extends React.Component {

    render() {
        return (
            <div>
                <button id="tweet-quote">Tweet Quote</button>
                <button id="new-quote">New Quote</button>
            </div>
        );
    }
}


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
                <Box 
                    text = {this.state.text}
                    author = {this.state.author}
                />
                <Buttons

                />
            </div>
            
        );
    }
}



ReactDOM.render(<Main />, document.getElementById('root'));


