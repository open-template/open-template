import _ from 'lodash';
export function omit(obj, arr) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (arr.includes(key)) {
                //_.omit(obj, arr);
                delete obj[key];
            } else if (Array.isArray(obj[key])) {
                for (let i = 0; i < obj[key].length; i++) {
                    omit(obj[key][i], arr);
                }
            } else if (typeof obj[key] === 'object') {
                _.omit(obj[key], arr);
            }
        }
    }
    return obj;
}