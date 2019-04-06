import React, { Component } from 'react';
import { media } from '../../data/Data'
import MediaForm from './MediaForm'

class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="container">
                <div className="media">
                    <div className="media__leftPanel">
                        <h1>media wywiady rozmowy</h1>
                        <span>Alice Munro okiem tłumaczki.​</span>
                        <span>Agnieszka Kuc opowiada o Noblistce i jej tomie "Zbyt wiele szczęścia"</span>
                        
                    </div>
                    <div className="media_rightPanel">
                    {
                        media.map(data=> <MediaForm key={data.id} data={data}/>)
                    }
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Media;