import window from 'global/window';
import videojs from 'video.js';
import querystring from 'querystring';
import {version as VERSION} from '../package.json';

const search = querystring.parse(
  (window && window.location && window.location.search || '?').substr(1));

/**
 * Return a clone of the querystring Node built-in module.
 *
 * Does not support `querystring.escape` or `querystring.unescape`.
 *
 * @see {@link https://nodejs.org/api/querystring.html|Node querystring API documentation} for more information.
 * @return {Object}
 */
const qs = videojs.qs = () => Object.assign({search}, querystring);

videojs.registerPlugin('qs', qs);
qs.VERSION = VERSION;

export default qs;
