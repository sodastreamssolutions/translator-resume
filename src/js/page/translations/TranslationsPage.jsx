import React, { Component } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import photos from '../../data/photos.json';

class TranslationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { galleryOpened: false };
        this.toggleGallery = this.toggleGallery.bind(this);
    }

    toggleGallery() {
        this.setState({
          galleryOpened: !this.state.galleryOpened
        });
    }

    render() { 
        return ( 
            <div className="translations">
                <div className="translations__text">
                    <h1>Przekłady</h1>
                    <p>
                        Okładki książek umieszczone są jedynie w celach prezentacji przekładów
                        dokonanych przez tłumaczkę i nie są pobierane z tego faktu żadne korzyści.
                        Tłumaczka ani autor strony nie posiadają żadnych praw do okładek ani treści samych publikacji.​
                    </p>
                </div>
                <button className="translations__gallery" onClick={this.toggleGallery} />
                <ReactBnbGallery
                    show={this.state.galleryOpened}
                    photos={photos}
                    onClose={this.toggleGallery}
                />
            </div>
         );
    }
}
 
export default TranslationsPage;