/**
 * dp-client
 * 
 *
 * OpenAPI spec version: 1.0.2
 * Contact: towyuan@outlook.com
 *
 * NOTE: This library is auto generated by the Open API Codegen program.
 * https://github.com/taoyuan/generator-oac.git
 * Do not edit the class manually.
 *
 */

const utils = require('./_utils');

/*jshint -W069 */
/**
 * @class Space
 * @alias module:api/Space
 * @param {Requestor} [requestor] - The project domain or options object. If object, see the object's optional properties.
 */
class Space {
  constructor(requestor) {
    this.requestor = requestor;
  }
  /**
   * Login with user dingtalk code
   *
   * @method
   * @path [GET] /spaces/link
   * @name Space#getDownloadLink
   * @param {string} code - The dingtalk authentication code
   * @param {string} space - The space id that the file stored in
   * @param {string} entry - The target file id
   * @param {function} [cb] - Callback function
   */
  getDownloadLink(code, space, entry, cb) {
    // verify the required parameter 'code' is set
    if (code === undefined || code === null) {
      throw new Error("Missing the required parameter 'code' when calling getDownloadLink");
    }
    // verify the required parameter 'space' is set
    if (space === undefined || space === null) {
      throw new Error("Missing the required parameter 'space' when calling getDownloadLink");
    }
    // verify the required parameter 'entry' is set
    if (entry === undefined || entry === null) {
      throw new Error("Missing the required parameter 'entry' when calling getDownloadLink");
    }

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      code: code,
      space: space,
      entry: entry,
    };

    const path = '/spaces/link';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
}

module.exports = Space;