import React, { Component } from "react";
import './App.css';

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">html</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript11</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is Hyper Text Markup Language.      
      </article>
    );
  }
}

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject/>
        <TOC/>
        <Content/>
      </div>
    );
  }
}

export default App;
