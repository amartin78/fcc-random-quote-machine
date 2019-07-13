import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from 'react-bootstrap/Button';

import axios from 'axios';


class Box extends React.Component {

    render() {
        let text = this.props.text.trim().replace(/;/g, ',');
        let author = this.props.author.trim();
        let url = "https://twitter.com/intent/tweet?text=\"" + text + "\"  " + author;

        return (
            <div>
                <p id="text">{this.props.text}</p>
                <p id="author">{this.props.author}</p>
                <a href={url} target="_blank" id="tweet-quote" rel="noopener noreferrer"><Button variant="light" size="sm">Tweet Quote</Button></a>
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

    componentDidMount() {
        this.fetchQuote();    
    }

    fetchQuote = () => {

        let index = Math.floor(Math.random() * 102);
        axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => {
                let obj = response.data.quotes[index];
                this.setState({
                    text: obj.quote,
                    author: obj.author,
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




