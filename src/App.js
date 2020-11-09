import React, { Component } from "react";
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import './App.css';

class App extends Component {

  //컴포넌트가 실행될때 constructor 제일먼저 실행된다
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      selected_content_id:0,
      subject:{title:"WEB", sub:"world wide web!!"},
      welcome:{title:"Welcome", desc:"Hello,React!!"},
      contents:[
        {id: 1, title: "HTML", desc: "HTML is Imformation"},
        {id: 2, title: "CSS", desc: "CSS is Design"},
        {id: 3, title: "JavaScript", desc: "JavaScript is for Interactive"}
      ]
    }
  }
  getReadContent(){
    for(let i=0; i<this.state.contents.length; i++){
      let data = this.state.contents[i]
      if(data.id===this.state.selected_content_id){
        return data;
        break;
      }
    }
  }
  getContent(){
    let _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;    
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === "read"){
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />
    }else if(this.state.mode === 'create'){
      _article =  <CreateContent onSubmit={ (_title, _desc) => {
        this.max_content_id = this.max_content_id + 1;
        let _contents = Array.from(this.state.contents)
        _contents.push({id: this.max_content_id, title:_title, desc: _desc});
        this.setState({
          contents: _contents,
          mode: 'read',
          selected_content_id : this.max_content_id  
        })
      }}/>
    }
    else if(this.state.mode === 'update'){
      let _content = this.getReadContent();
      _article =  <UpdateContent data={_content} onSubmit={ (_id, _title, _desc) => {
        let _contents = Array.from(this.state.contents)
        _contents.forEach((v,i) => {
          if(_contents[i].id === _id){
            _contents[i] = {id: _id, title: _title, desc: _desc}
          }
        })
        this.setState({
          contents : _contents,
          mode: 'read'
        })
      }}/>
    }
    return _article;
  }
  render(){
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
          if(_mode === "delete"){
            if(window.confirm){
              let _contents = Array.from(this.state.contents);
              _contents.forEach((v,i) => {
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1)
                }
              })
              this.setState({
                mode: 'welcome',
                selected_content_id : 0,
                contents: _contents
              })
            }
          }else{
            this.setState({
              mode: _mode
            })
          }
        }}/>
        {this.getContent()}
      </div>
    );
  }
}
export default App;
