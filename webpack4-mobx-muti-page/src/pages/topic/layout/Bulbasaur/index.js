/**
 * @file
 * @author
 */

import React, {Component} from 'react';

export default class Bulbasaur extends Component {
    render() {
        return (
            <div className='img-wrap'>
                <img
                    src='https://cdn.dribbble.com/users/817492/screenshots/5942246/bulbasaur_dribbble2.jpg'
                    alt='Bulbasaur'
                />
                <div>フシギダネ</div>
            </div>
        );
    }
}
