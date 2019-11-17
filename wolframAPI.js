// Note: The "Simple API" does not support disambiguation, drilldown or asynchronous results delivery; it returns only a single, static image. For these advanced features, use the Full Results API.
// Every query requires two pieces of information—an:
//                                                   AppID and an input value. 
//  The appid parameter tells your query which AppID, the i parameter specifies the URL-encoded input for your query. For instance, here is a query for "What airplanes are flying overhead?":

            // http://api.wolframalpha.com/v1/simple?appid=DEMO&i=What+airplanes+are+flying+overhead%3F

// When executed with a valid AppID, this URL will return an image with informational elements relating to the input.
// You can add URL-encoded parameters to customize output. Since its output often includes a mix of text, images and layout elements, the Simple API will accept a number of parameters: https://products.wolframalpha.com/simple-api/documentation/

// Preserve future compatibility - The basic principle is to handle elements you know about, but ignore ones that you don't. Similarly for attributes—elements may acquire new attributes over time, although this is generally quite easy for client programs to accommodate by simply ignoring them.
// So far we have been dealing with the query function. There is another function in the API called validatequery. This is a specialized function that performs only the initial parsing phase of Wolfram|Alpha processing. Its purpose is to quickly determine whether Wolfram|Alpha can make sense of a given input, bypassing the more time-consuming stages of fully analyzing the input and preparing results.
// Here is a sample URL that calls the validate query function:
//  http://api.wolframalpha.com/v2/validatequery?appid=DEMO&input=pi

// Error results will have an <error> element that gives a code and short description of the error: http://api.wolframalpha.com/v2/query?input=mortgage


// Supports full JSON syntax but uses a specific interpretation.

// Following code taken from:
// // https://products.wolframalpha.com/api/libraries/javascript/module-wolfram-alpha-api.html#~createApiParams




// invoke and call 

// 


modlue.exports= {

                /**
                 * @module wolfram-alpha-api
                /**
  const https = require('https');
  const querystring = 'v2/query?appid=DEMO&input=population%20of%20france';
  const baseApiUrl = 'https://api.wolframalpha.com/';
  const createApiParamsRejectMsg = 'method only receives string or object';
  const output = json;
  console.log("inside wolframAPI", url);
                /**
                 * We support four 'output' formats:
                 * 'string' and 'xml' are both strings,
                 * 'json' is an Object (a result of JSON.parse), and
                 * 'image' is a string of a "Data URI"
                 * @typedef OutputFormat
                 * @property {'string'|'json'|'image'|'xml'} output
                 */
                /**
                 * @typedef FetchParams
                 * @property {Object} params
                 * @property {string} params.url - full URL of api call
                 * @property {OutputFormat} params.output - which OutputFormat do we want?
                 * @example {url: 'https://api.wolframalpha.com/v1/result?appid=DEMO&i=2%2B2', output: 'string'}
                 */
                /**
                 * @typedef FormatParams
                 * @property {Object} params
                 * @property {string} params.data - data returned by fetchResults
                 * @property {OutputFormat} params.output - which OutputFormat do we want?
                 * @property {integer} statusCode - HTTP status code of fetchResults
                 * @property {string} contentType - HTTP content-type header from fetchResults
                 * @example {data: '4', output: 'string', statusCode: 200, contentType: 'text/plain;charset=utf-8'}
                 */
                /**
                 * Build a URL call from a baseUrl and input; specify an OutputFormat (for fetchResults).
                 * @param {string} baseUrl - base URL of API we are trying to call
                 * @param {(string|Object)} input - string of query, or object of parameters
                 * @param {OutputFormat} [output=string] - which OutputFormat we want
                 * @returns {Promise<FetchParams>}
                 * @example
                 * // resolves {url: 'https://api.wolframalpha.com/v1/result?appid=DEMO&i=2%2B2', output: 'string'}
                 * createApiParams('https://api.wolframalpha.com/v1/result?appid=DEMO', '2+2', 'string')
                 * // resolves {
                 * //   url: 'https://api.wolframalpha.com/v1/simple?appid=DEMO&i=nyc%20to%la&units=metric',
                 * //   output: 'image'
                 * // }
                 * createApiParams('https://api.wolframalpha.com/v1/simple?appid=DEMO',
                 *   {i: 'nyc to la', units: 'metric'}, 'image')
                 * // rejects TypeError('method only receives string or object')
                 * createApiParams('https://api.wolframalpha.com/v1/result?appid=DEMO')
                 */
function createApiParams(baseUrl, input, output) {
    // function createApiParams(baseUrl, input, output = 'json') {
  console.log("inside createAPIParams" + url);
    return new Promise((resolve, reject) => {
      switch (typeof input) {
        case 'string':
          resolve({ url: `${baseUrl}&i=${encodeURIComponent(input)}`, output });
          break;
        case 'object':
          resolve({ url: `${baseUrl}&${querystring.stringify(input)}`, output });
  console.log("inside createAPIParams" + url);
          break;
        default:
          reject(new TypeError(createApiParamsRejectMsg));
      }
    });
  }
                                /**
                                 * Return a Promise that downloads params.url, and resolves the results (for formatResults).
                                 * @param {FetchParams} params
                                 * @returns {Promise<FormatParams>}
                                 * @example
                                 * // resolves { data: '4', output: 'string', statusCode: 200,
                                 * //            contentType: 'text/plain;charset=utf-8' }
                                 * fetchResults({
                                 *   url: 'https://api.wolframalpha.com/v1/result?appid=DEMO&i=2%2B2',
                                 *   output: 'string'
                                 * })
                                 * // resolves { output: 'json', statusCode: 200, contentType: 'text/plain;charset=utf-8',
                                 * //            data: '{"queryresult" : {\n\t"success" : true, \n\t"error" : false, \n\t"nu...', }
                                 * fetchResults({
                                 *   url: 'https://api.wolframalpha.com/v2/query?appid=DEMO&input=2%2B2&output=json',
                                 *   output: 'json'
                                 * })
                                 * // resolves { output: 'image', statusCode: 200, contentType: 'image/gif',
                                 * //            data: 'R0lGODlhHAJNBfcAAAAAAAAEAAgICAgMCBAQEBAUEBgYGBgcGCAgICAkICksKSkoKTEwMT...'}
                                 * fetchResults({
                                 *   url: 'https://api.wolframalpha.com/v1/simple?appid=DEMO&i=nyc%20to%la&units=metric',
                                 *   output: 'image'
                                 * })
                                 * // resolves { output: 'image', statusCode: 501, contentType: 'text/plain;charset=utf-8',
                                 * //            data: 'Wolfram|Alpha did not understand your input' }
                                 * fetchResults({
                                 *   url: 'https://api.wolframalpha.com/v1/result?appid=DEMO&i=F9TVlu5AmVzL'
                                 *   output: 'string'
                                 * })
                                 */
function fetchResults(params) {
  const { url, output } = params;
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        const statusCode = res.statusCode;
        const contentType = res.headers['content-type'];
        if (output === 'image' && statusCode === 200) {
          res.setEncoding('base64'); // API returns binary data, we want base64 for the Data URI
        } else {
          res.setEncoding('utf8');
        }
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({ data, output, statusCode, contentType });
        });
      })
      .on('error', (e) => {
        reject(e);
      });
  });
}
                                    /**
                                     * Return a Promise that RESOLVES A FORMATTED form of params.data, as specified by
                                     * params.output, params.statusCode, and params.contentType
                                     * @param {FormatParams} params
                                     * @returns {Promise<(Object|string)>}
                                     * @example
                                     * // resolves "4"
                                     * formatResults({
                                     *   data: '4', output: 'string', statusCode: 200,
                                     *   contentType: 'text/plain;charset=utf-8'
                                     * })
                                     * // resolves {success: true, error: false, numpods: 6, datatypes: 'Math', timedout: '' ...}
                                     * formatResults({
                                     *   data: '{"queryresult" : {\n\t"success" : true, \n\t"error" : false, \n\t"nu...',
                                     *   output: 'json', statusCode: 200, contentType: 'text/plain;charset=utf-8'
                                     * })
                                     * // resolves 'data:image/gif;base64,R0lGODlhHAJNBfcAAAAAAAAEAAgICAgMCBAQEBAUEBgYGBgcGCAgICAkIC...
                                     * formatResults({
                                     *   data: 'R0lGODlhHAJNBfcAAAAAAAAEAAgICAgMCBAQEBAUEBgYGBgcGCAgICAkICksKSkoKTEwMT...'
                                     *   output: 'image', statusCode: 200, contentType: 'image/gif'
                                     * })
                                     * // rejects Error('Wolfram|Alpha did not understand your input')
                                     * formatResults({
                                     *   data: 'Wolfram|Alpha did not understand your input'
                                     *   output: 'image', statusCode: 501, contentType: 'text/plain;charset=utf-8'
                                     * })
                                     */
function formatResults(params) {
  const { data, output, statusCode, contentType } = params;
  return new Promise((resolve, reject) => {
    if (statusCode === 200) {
      switch (output) {
        case 'json':
          try {
console.log("inside formatResults", data);
            resolve(JSON.parse(data).queryresult);
          } catch (e) {
            reject(
              new Error('Temporary problem in parsing JSON, please try again.'),
            );
          }
          break;
        case 'image':
          resolve(`data:${contentType};base64,${data}`);
          break;
        default:
          resolve(data);
      }
      // if (statusCode !== 200)...
    } else if (/^text\/html/.test(contentType)) {
      // Rarely, there may be a catastrophic error where the API gives an HTML error page.
      reject(new Error('Temporary problem with the API, please try again.'));
    } else {
      // This runs if non-full API input is empty, ambiguous, or otherwise invalid.
      reject(new Error(data));
    }
  });
}
                                  /**
                                   * Wolfram|Alpha API NPM Library
                                   */
class WolframAlphaAPI {
                                    /**
                                     * You may get your 'appid' at {@link https://developer.wolframalpha.com/portal/myapps/}.
                                     * Remember, this appID must be kept secret.
                                     * @param {string} appid - the appid, must be non-empty string.
                                     * @throws TypeError
                                     * @example
                                     * const WolframAlphaAPI = require('wolfram-alpha-api');
                                     * const waApi = WolframAlphaAPI('DEMO-APPID');
                                     */
        constructor(appid) {
          if (!appid || typeof appid !== 'string') {
            throw new TypeError('appid must be non-empty string');
          }
          this.appid = appid;
        }
                                    /**
                                     * Takes 'input' (which is either a string, or an object of parameters), runs it through
                                     * the Wolfram|Alpha Simple API, and returns a Promise that
                                     * resolves a string of a "Data URI", or rejects if there's an error.
                                     * @param {string|Object} input - string or object of parameters
                                     * @returns {Promise<DataURI>}
                                     * @see https://products.wolframalpha.com/simple-api/documentation/
                                     * @example
                                     * // "data:image/gif;base64,R0lGODlhHAK5AvcAAAAAAAAEAAgICAgMCBAQEBAUEBsdGzE0MTk8OTk4OS0uLSAkI...
                                     * waApi.getSimple('2+2').then(console.log, console.error);
                                     * // "data:image/gif;base64,R0lGODlhHAJNBfcAAAAAAAAEAAgICAgMCBAQEBAUEBgYGBgcGCAgICAkICksKSkoK...
                                     * waApi.getSimple({i: 'nyc to la', units: 'metric'}).then(console.log, console.error);
                                     * // Error: Wolfram|Alpha did not understand your input
                                     * waApi.getSimple('F9TVlu5AmVzL').then(console.log, console.error);
                                     * // TypeError: method only receives string or object
                                     * waApi.getSimple().then(console.log, console.error);
                                     */
        getSimple(input) {
          const baseUrl = `${baseApiUrl}v1/simple?appid=${this.appid}`;
          return createApiParams(baseUrl, input, 'image')
            .then(fetchResults)
            .then(formatResults);
        }
                                    /**
                                     * Takes 'input' (which is either a string, or an object of parameters), runs it through
                                     * the Wolfram|Alpha Short Answers API, and returns a Promise that
                                     * resolves a string of results, or rejects if there's an error.
                                     * @param {string|Object} input - string or object of parameters
                                     * @returns {Promise<string>}
                                     * @see https://products.wolframalpha.com/short-answers-api/documentation/
                                     * @example
                                     * // "4"
                                     * waApi.getShort('2+2').then(console.log, console.error);
                                     * // "3966 kilometers"
                                     * waApi.getShort({i: 'nyc to la', units: 'metric'}).then(console.log, console.error);
                                     * // Error: Wolfram|Alpha did not understand your input
                                     * waApi.getShort('F9TVlu5AmVzL').then(console.log, console.error);
                                     * // TypeError: method only receives string or object
                                     * waApi.getShort().then(console.log, console.error);
                                     */
        getShort(input) {
        const baseUrl = `${baseApiUrl}v1/result?appid${this.appid}`;
    console.log("inside getShort " + baseURL+ "  input:  ", + input);
        return createApiParams(baseUrl, input, 'json')
          .then(fetchResults)
          .then(formatResults);
      }
                                      /**
                                       * Takes 'input' (which is either a string, or an object of parameters), runs it through
                                       * the Wolfram|Alpha Spoken Results API, and returns a Promise that
                                       * resolves a string of results, or rejects if there's an error.
                                       * @param {string|Object} input - string or object of parameters
                                       * @returns {Promise<string>}
                                       * @see https://products.wolframalpha.com/spoken-results-api/documentation/
                                       * @example
                                       * // "The answer is 4"
                                       * waApi.getSpoken('2+2').then(console.log, console.error);
                                       * // "The answer is about 3966 kilometers"
                                       * waApi.getSpoken({i: 'nyc to la', units: 'metric'}).then(console.log, console.error);
                                       * // Error: Wolfram Alpha did not understand your input
                                       * waApi.getSpoken('F9TVlu5AmVzL').then(console.log, console.error);
                                       * // TypeError: method only receives string or object
                                       * waApi.getSpoken().then(console.log, console.error);
                                       */
        getSpoken(input) {
          const baseUrl = `${baseApiUrl}v1/spoken?appid=${this.appid}`;
          return createApiParams(baseUrl, input)
            .then(fetchResults)
            .then(formatResults);
        }
                                    /**
                                     * Takes 'input' (which is either a string, or an object of parameters), runs it through
                                     * the Wolfram|Alpha Full Results API, and returns a Promise that
                                     * either resolves an Object or a string of XML, or rejects if there's an error.
                                     * @param {string|Object} input - string or object of parameters
                                     * @returns {Promise<(Object|string)>}
                                     * @see https://products.wolframalpha.com/api/documentation/
                                     * @example
                                     * // {success: true, error: false, numpods: 6, datatypes: 'Math', timedout: '', timing: 1.08 ...
                                     * waApi.getFull('2+2').then(console.log, console.error);
                                     * // "<queryresult success='true' error='false' numpods='7' ...
                                     * waApi.getFull({input:'nyc to la', output:'xml'}).then(console.log, console.error);
                                     * // { success: false, error: false, numpods: 0, datatypes: '', timedout: '', ...
                                     * waApi.getFull('F9TVlu5AmVzL').then(console.log, console.error)
                                     * // TypeError: method only receives string or object
                                     * waApi.getFull().then(console.log, console.error);
                                     */
        getFull(input) {
          const baseUrl = `${baseApiUrl}v2/query?appid=${this.appid}`;
          // This promise works just like createApiParams, except with a bit more processing
          return new Promise((resolve, reject) => {
            switch (typeof input) {
              case 'string':
                resolve({
                  url: `${baseUrl}&input=${encodeURIComponent(input)}&output=json`,
                  output: 'json',
                });
                break;
              case 'object': {
                // the API defaults to XML, but we want to default to JSON.
                const options = Object.assign({ output: 'json' }, input);
                // since all other APIs use 'i' instead of 'input', allow for 'i'.
                if (options.input == null && options.i != null) {
                  options.input = options.i;
                  delete options.i;
                }
                resolve({
                  url: `${baseUrl}&${querystring.stringify(options)}`,
                  output: options.output,
                });
                break;
              }
              default:
                reject(new TypeError(createApiParamsRejectMsg));
            }
          })
            .then(fetchResults)
            .then(formatResults);
        }
      }
                                    /**
                                     * You may get your 'appid' at {@link https://developer.wolframalpha.com/portal/myapps/}.
                                     * Remember, this appID must be kept secret.
                                     * @param {string} appid - the appid, must be non-empty string.
                                     * @throws TypeError
                                     * @example
                                     * const WolframAlphaAPI = require('wolfram-alpha-api');
                                     * const waApi = WolframAlphaAPI('DEMO-APPID');
                                     */
  function initializeClass(appid) {
    return new WolframAlphaAPI(appid);
  }                 
       
  
 
  // invoke and call 
// const appid = 'DEMO';
// let iClass= initializeClass(appid);
// const input = "LA to new york";
// const https = require('https');
// const querystring = 'v2/query?appid=DEMO&input=population%20of%20france';
// const baseUrl = 'https://api.wolframalpha.com/';
// const createApiParamsRejectMsg = 'method only receives string or object';
// const output = 'json';
// gsresults = iclass.getShort(input); 
// console.log("inside ssswolframAPI.js");



                  
 // put this back in  module.exports = initializeClass;
}




                  
                  
               
                   
                  