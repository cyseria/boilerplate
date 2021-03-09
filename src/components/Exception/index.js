/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

import React, {createElement} from 'react';
import classNames from 'classnames';
import config from './typeconfig';
import './index.less';

let Exception;
export default Exception = ({
    className,
    linkElement = 'a',
    type,
    title,
    desc,
    img,
    actions
}) => {
    const pageType = type in config ? type : '404';
    const clsString = classNames('exception', className);
    return (
        <div className={clsString}>
            <div className="imgBlock">
                <div
                    className="imgEle"
                    style={{backgroundImage: `url(${img || config[pageType].img})`}}
                />
            </div>
            <div className="content">
                <h1>{title || config[pageType].title}</h1>
                <div className="desc">{desc || config[pageType].desc}</div>
                <div className="actions">
                    {actions
                        || createElement(
                            linkElement,
                            {
                                to: '/',
                                href: '/'
                            },
                            <button type="primary">返回首页</button>
                        )}
                </div>
            </div>
        </div>
    );
};