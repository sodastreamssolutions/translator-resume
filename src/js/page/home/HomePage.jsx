import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                <div className="home__text">
                    <p>Witam serdecznie na mojej stronie domowej. Można za jej pośrednictwem dowiedzieć się czegoś o mnie, a także o tym czym się zajmuję jako tłumaczka literatury.</p>
                    <h1>Agnieszka Kuc</h1>
                </div>
                <div className="home__picture"></div>
            </div>
         );
    }
}
 
export default HomePage;