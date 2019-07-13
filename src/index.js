import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from 'react-bootstrap/Button';

import axios from 'axios';


let colorArray = [
          '#FF824D', '#00ADB5', '#303841', '#B8D8D8', 
          '#BD1E1E', '#D88373', '#18206F', '#17255A',
          '#264653', '#2A9D8F', '#E9C46A', '#E76F51',
          '#CD8987', '#7A9E9F', '#4F6367', '#FE5F55',
          '#313715', '#60712F', '#B7990D', '#9B1D20',
        ];
          
class Box extends React.Component {

    render() {
        let text = this.props.text.trim().replace(/;/g, ',');
        let author = this.props.author.trim();
        let url = "https://twitter.com/intent/tweet?text=\"" + text + "\"  " + author;

        return (
            <div>
                <p id="text" style={{color: this.props.color}}>"{this.props.text}"</p>
                <p id="author" style={{color: this.props.color}}>{this.props.author}</p>
                <a href={url} target="_blank" id="tweet-quote" rel="noopener noreferrer"><Button variant="light" size="sm" style={{backgroundColor: this.props.color}}>Tweet Quote</Button></a>
                <Button id="new-quote" onClick={this.props.newQuote} variant="light" size="sm" style={{backgroundColor: this.props.color}}>New Quote</Button>
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
            error: '',
            bgColor: '',
        }
        this.fetchQuote = this.fetchQuote.bind(this);
        this.newQuote = this.newQuote.bind(this);
    }

    componentDidMount() {
        this.fetchQuote();    
    }

    fetchQuote = () => {

        let colorIdx = Math.floor(Math.random() * 20);
        let quoteIdx = Math.floor(Math.random() * 102);
        axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => {
                let obj = response.data.quotes[quoteIdx];
                this.setState({
                    text: obj.quote,
                    author: obj.author,
                    bgColor: colorArray[colorIdx],
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
        document.getElementById('root').style.backgroundColor = this.state.bgColor;
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
                        color = {this.state.bgColor}
                    />
                </div>
            );
        }
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));




