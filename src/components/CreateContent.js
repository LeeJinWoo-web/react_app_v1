import React, { Component } from "react";

class CreateContent extends Component{
    render(){
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post" onSubmit={ (e) => {
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.desc.value)
          }}>
              <p>
                <input type="text" name="title" placeholder="title" />
              </p>
              <textarea name="desc" placeholder="description">
              </textarea>
              <p>
                  <input type="submit" />
              </p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;