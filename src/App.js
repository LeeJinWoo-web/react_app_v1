import React, { Component } from "react";
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
import './App.css';

class App extends Component {

  //컴포넌트가 실행될때 constructor 제일먼저 실행된다
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "create",
      selected_content_id:2,
      subject:{title:"WEB", sub:"world wide web!!"},
      welcome:{title:"Welcome", desc:"Hello,React!!"},
      contents:[
        {id: 1, title: "HTML", desc: "HTML is Imformation"},
        {id: 2, title: "CSS", desc: "CSS is Design"},
        {id: 3, title: "JavaScript", desc: "JavaScript is for Interactive"}
      ]
    }
  }

  render(){
    let _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;    
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === "read"){
      for(let i=0; i<this.state.contents.length; i++){
        let data = this.state.contents[i]
        if(data.id===this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
      _article = <ReadContent title={_title} desc={_desc} />
    }else if(this.state.mode === 'create'){
      _article =  <CreateContent onSubmit={ (_title, _desc) => {
        this.max_content_id = this.max_content_id + 1;
        let _contents = this.state.contents.concat(
          {id: this.max_content_id, title:_title, desc: _desc}    
        );
        this.setState({
          contents: _contents
        })
      }}/>
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
        <Control onChangeMode={(_mode) => {
            console.log(_mode)
            this.setState({
              mode: _mode
            })
        }}/>
        {_article}
      </div>
    );
  }
}
export default App;
