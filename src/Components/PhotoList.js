import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import stuff from '../stuff.json'

class PhotoList extends Component {
    render() {
        return (
            <section className='Photos'>
                {stuff[this.props.match.params.category].stuff[0].title}
            </section>
        );
    }
}

export default PhotoList;