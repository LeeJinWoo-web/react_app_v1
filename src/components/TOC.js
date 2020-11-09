import React, { Component } from "react";

class TOC extends Component{
  shouldComponentUpdate(newProps, newState){
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
    render(){
        const lists = [];
        const data = this.props.data;
        for(let i=0; i<data.length; i++){
            lists.push(
                <li key={data[i].id}>
                    <a 
                        onClick={ (e) => {
                            e.preventDefault();
                            this.props.onChangePage(data[i].id);//App.js의 TOC를 실행        
                        }}
                        href={"/content/"+data[i].id}
                    >
                        {data[i].title}
                    </a>
                </li>
              )
        }
      return(
        <nav>
          <ul>
            {lists} 
          </ul>
        </nav>
      );
    }
  }

  export default TOC;