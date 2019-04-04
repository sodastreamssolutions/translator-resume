import React, { Component } from 'react';


class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section class="container" id="test-list">
                {this.props.children}
            </section>
         );
    }
}
 
export default BasicLayout;
