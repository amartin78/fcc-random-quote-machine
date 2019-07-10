import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from 'react-bootstrap/Button';

import axios from 'axios';


class Box extends React.Component {

    render() {
        let text = "https://twitter.com/intent/tweet?text=\"" + this.props.text.trim().replace(/;/g, ',') + "\"  " + this.props.author.trim();

        return (
            <div>
                <p id="text">{this.props.text}</p>
                <p id="author">{this.props.author}</p>
                <a href={text} target="_blank" id="tweet-quote" rel="noopener noreferrer"><Button variant="light" size="sm">Tweet Quote</Button></a>
                <Button id="new-quote" onClick={this.props.newQuote} variant="light" size="sm">New Quote</Button>
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
        this.fetchQuote = this.fetchQuote.bind(this);
        this.newQuote = this.newQuote.bind(this);
    }

    fetchQuote = async () => {
        axios.get('https://cors-anywhere.herokuapp.com/api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
            .then(response => {
                this.setState({
                    text: response.data.quoteText,
                    author: response.data.quoteAuthor,
                    isLoaded: true,
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error: error,
                });
            })
    }
    
    componentDidMount() {
        this.fetchQuote();    
    }

    newQuote = () => {
        this.fetchQuote();
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div id="quote-box">
                    <Box 
                        text = {this.state.text}
                        author = {this.state.author}
                        newQuote = {this.newQuote}
                    />
                </div>
            );
        }
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));




