(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},8:function(t,e,n){t.exports=n(9)},9:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(2),r=n(4),u=n(3),i=n(5),c=n(0),s=n.n(c),h=n(7),p=n.n(h),l=(n(15),function(t){function e(){return Object(o.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t='https://twitter.com/intent/tweet?text="'+this.props.text.trim()+'"  '+this.props.author.trim();return s.a.createElement("div",null,s.a.createElement("p",{id:"text"},this.props.text),s.a.createElement("p",{id:"author"},this.props.author),s.a.createElement("a",{href:t,target:"_blank",id:"tweet-quote"},s.a.createElement("button",null,"Tweet Quote")),s.a.createElement("button",{id:"new-quote",onClick:this.props.newQuote},"New Quote"))}}]),e}(s.a.Component)),d=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(r.a)(this,Object(u.a)(e).call(this))).fetchQuote=function(){fetch("https://cors-anywhere.herokuapp.com/api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en").then(function(t){return t.json()}).then(function(e){t.setState({isLoaded:!0,text:e.quoteText,author:e.quoteAuthor})},function(e){t.setState({isLoaded:!0,error:e})})},t.newQuote=function(){t.fetchQuote()},t.state={isLoaded:!1,text:"",author:"",error:""},t}return Object(i.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){this.fetchQuote()}},{key:"render",value:function(){return s.a.createElement("div",{id:"quote-box"},s.a.createElement(l,{text:this.state.text,author:this.state.author,newQuote:this.newQuote}))}}]),e}(s.a.Component);p.a.render(s.a.createElement(d,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.bea61a05.chunk.js.map