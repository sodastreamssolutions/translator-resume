import React, { Component } from 'react';

class Translations extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="container">
                <div className="translations">
                    <div className="translations__text">
                        <h1>Przekłady</h1>
                        <span>Okładki książek umieszczone są jedynie w celach prezentacji przekładów dokonanych przez tłumaczkę i nie są pobierane z tego faktu żadne korzyści. Tłumaczka ani autor strony nie posiadają żadnych praw do okładek ani treści samych publikacji.​</span>
                    </div>
                    <div className="translations__picture"></div>
                </div>
            </section>
         );
    }
}
 
export default Translations;