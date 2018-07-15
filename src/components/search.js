import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'


export default class Search extends Component {

    state = {} 

    render(){
        
        return(
       
        <div class="ui input">
            <input type="text" placeholder="Search..." >
            </input>
            <button class="ui primary button" onClick={this.props.submit} >
            Submit
            </button>
        </div>
          
        )
    }
}
    