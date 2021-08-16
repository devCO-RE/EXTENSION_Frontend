

import {test, captureFullPage} from './inner-script.js';
let doc = test();
captureFullPage();
export const getDoc = () => {
    return doc;
};