/**
 * @file
 * @author
 */

import React, {Component} from 'react';

export default class Psyduck extends Component {
    render() {
        return (
            <div className='img-wrap'>
                <img
                    src='https://cdn.dribbble.com/users/817492/screenshots/5947874/psyduck_dribbble.jpg'
                    alt='Psyduck'
                />
                <div>コダック</div>
            </div>
        );
    }
}
