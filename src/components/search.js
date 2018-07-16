import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'semantic-ui-react';


export default class Search extends Component {
    state = {} 

    handleSubmit(e){
        if(e.keyCode === 13){
    
          this.props.add(ReactDOM.findDOMNode(this.refs.newItem).value);
          ReactDOM.findDOMNode(this.refs.newItem).value = '';
        }
      }
    render(){
        
        return(
       
        <div class="ui input">
            <input type="text" 
            placeholder="Search..."
            ref="newItem"
            className="form-control"
            placeholder="New Item"
            onKeyDown={this.handleSubmit.bind(this)} >
            </input>
            <button class="ui primary button" onClick={this.props.submit} >
            Submit
            </button>
        </div>
          
        )
    }
}
    