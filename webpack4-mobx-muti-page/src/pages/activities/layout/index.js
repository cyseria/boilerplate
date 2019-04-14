/**
 * @file
 * @author
 */

import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import './index.less';

@inject('appStore')
@observer
export default class Activites extends Component {
    state = {
        number: 0
    };
    handleChange = e => {
        this.setState({
            number: e.target.value
        });
    };
    render() {
        const {price, num, totalVal} = this.props.appStore;
        const {number} = this.state;
        return (
            <div className='content'>
                <h1>Activites</h1>
                <div>
                    <div className='calculate'>
                        操作数量：
                        <input type='number' onChange={this.handleChange} />
                        <button
                            onClick={() => {
                                this.props.appStore.buyIn(number);
                            }}
                        >
                            买入
                        </button>
                        <button
                            onClick={() => {
                                this.props.appStore.sayOut(number);
                            }}
                        >
                            卖出
                        </button>
                    </div>
                    <div className='result'>
                        <div>单价: {price}</div>
                        <div>数量: {num}</div>
                        <div>总价: {totalVal}</div>
                    </div>
                    <div className='pic'>
                        <img src='https://eux-public.bj.bcebos.com/2019/03/13/2460fc301a1aa43a0c4b6ea68.png' />
                    </div>
                </div>
            </div>
        );
    }
}
