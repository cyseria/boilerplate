/**
 * @file
 * @author
 */

import React, {Component} from 'react';

export default class Pikachu extends Component {
    render() {
        console.error('error test');
        return (
            <div className='img-wrap'>
                <img
                    src='https://cdn.dribbble.com/users/1249419/screenshots/2871304/pikachu-rebound.gif'
                    alt='Pikachu'
                />
                <div>ピカチュウ</div>
            </div>
        );
    }
}
