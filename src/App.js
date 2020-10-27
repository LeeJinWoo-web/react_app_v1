import React, { Component } from "react";
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  //컴포넌트가 실행될때 constructor 제일먼저 실행된다
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB", sub:"world wide web!!"},
      contents:[
        {id: 1, title: "HTML", desc: "HTML is Imformation"},
        {id: 2, title: "REACT", desc: "CSS is Design"},
        {id: 3, title: "JavaScript", desc: "JavaScript is for Interactive"}
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
        />
        <TOC data={this.state.contents}/>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."/>
      </div>
    );
  }
}

export default App;
