/**
 * @file api
 * @author cyseria <xcyseria@gmail.com>
 */

import {axios as request} from 'utils/request';

export async function getMessageLog(params) {
    return request.post('/log', params);
}