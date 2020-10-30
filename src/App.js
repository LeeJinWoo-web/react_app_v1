import React, { Component } from "react";
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import CreateContent from './components/CreateContent';
import './App.css';

class App extends Component {

  //컴포넌트가 실행될때 constructor 제일먼저 실행된다
  constructor(props){
    super(props);
    this.state = {
      mode: "read",
      subject:{title:"WEB", sub:"world wide web!!"},
      selected_content_id:2,
      welcome:{title:"Welcome", desc:"Hello,React!!"},
      contents:[
        {id: 1, title: "HTML", desc: "HTML is Imformation"},
        {id: 2, title: "CSS", desc: "CSS is Design"},
        {id: 3, title: "JavaScript", desc: "JavaScript is for Interactive"}
      ]
    }
  }

  render(){
    let _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;    
    } else if(this.state.mode === "read"){
      for(let i=0; i<this.state.contents.length; i++){
        let data = this.state.contents[i]
        if(data.id===this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage = { () => this.setState({mode:"welcome"}) }
        />
        <TOC 
          onChangePage={ (id) => {
            this.setState({
              mode:"read",
              selected_content_id: Number(id) 
          })
          }}
          data={this.state.contents}
        />
        <ReadContent title={_title} desc={_desc}/>
      </div>
    );
  }
}
export default App;
