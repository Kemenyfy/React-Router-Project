import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import stuff from '../stuff.json'


class CategoryList extends Component {
    render() {
        return (
            <section className='CatList'>
                <section className='PandaCats'>
                    <section className='PandaDetails'>
                        <Link to="/pandas">Panda Bears</Link>
                        <p>
                        Pandas are bears native to south-central China, and are objectively the cutest animals on earth.
                        </p>
                    </section>
                    <section className='PandaImage'>
                        <img src={stuff.pandas.photos[0].imageURL} alt="Panda"/>
                    </section>
                </section>
                <section className='MiniatureCats'>
                    <section className='MiniatureDetails'>
                        <Link to="/miniatures">Miniature Painting</Link>
                        <p>
                        I enjoy painting miniatures. I've only been painting for about 6-months, here's some of my work.
                        </p>
                    </section>
                    <section className='MiniatureImage'>
                        <img src={stuff.miniatures.photos[0].imageURL} alt="Miniature"/>
                    </section>
                </section>
            </section>    
        )
    }
}

export default CategoryList;