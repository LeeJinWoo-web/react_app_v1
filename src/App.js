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
      mode: "read",
      subject:{title:"WEB", sub:"world wide web!!"},
      welcome:{title:"Welcome", desc:"Hello,React!!"},
      contents:[
        {id: 1, title: "HTML", desc: "HTML is Imformation"},
        {id: 2, title: "REACT", desc: "CSS is Design"},
        {id: 3, title: "JavaScript", desc: "JavaScript is for Interactive"}
      ]
    }
  }

  _clcikEvent = () =>{
    console.log(1)
    this.setState({
      mode: "welcome"
    })
  }

  render(){
    let _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;    
    } else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;  
    }
    return (
      <div className="App">
        <header>
          <h1>
            <a 
              href="" 
              onClick={ e => {
                  e.preventDefault();
                  this._clcikEvent()
              }}>
              {this.state.subject.title}
             </a>
          </h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}/>
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }

}

export default App;
