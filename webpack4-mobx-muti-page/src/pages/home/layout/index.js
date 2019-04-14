/**
 * @file
 * @author
 */

import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className='content'>
                <h1>Home</h1>
                <div>
                    <p>
                        this is a simple demo to use <b>react</b> and{' '}
                        <b>react-router</b> and <b>mobx</b>{' '}
                    </p>
                    <p>
                        tools: <b>webpack4</b>, <b>babel7</b>
                    </p>
                    <p>Enjoy it :)</p>
                    <p style={{marginTop: 60, fontSize: 200}}>😃</p>
                </div>
            </div>
        );
    }
}
