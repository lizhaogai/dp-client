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

const Requestor = require('./lib/_requestor');
const Tenant = require('./lib/Tenant');
const Account = require('./lib/Account');
const Auth = require('./lib/Auth');
const Space = require('./lib/Space');
const Task = require('./lib/Task');
const TaskStatus = require('./lib/TaskStatus');
const Dolink = require('./lib/Dolink');
/**
 * 
 *
 * @param {String|Object} [baseUrl]
 * @param {Object} [opts]
 */
module.exports = function(baseUrl, opts) {
  if (typeof baseUrl === 'object') {
    opts = baseUrl;
    baseUrl = undefined;
  }
  opts = opts || {};
  opts.baseUrl = opts.baseUrl || baseUrl;

  const client = {};
  const requestor = client.requestor = new Requestor(opts);

  client.authenticate = function(options) {
    requestor.auth(options);
  };

  client.configure = function(options) {
    requestor.configure(options);
  };

  client.tenant = new Tenant(requestor);
  client.account = new Account(requestor);
  client.auth = new Auth(requestor);
  client.space = new Space(requestor);
  client.task = new Task(requestor);
  client.taskStatus = new TaskStatus(requestor);
  client.dolink = new Dolink(requestor);

  return client;
};