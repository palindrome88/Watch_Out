import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'semantic-ui-react';


export default class Search extends Component {
    

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
            ref="newItem"
            className="form-control"
            placeholder="Name your obstacle! Press Enter to Bind."
            onKeyDown={this.handleSubmit.bind(this)} >
            </input>
            
        </div>
          
        )
    }
}
    