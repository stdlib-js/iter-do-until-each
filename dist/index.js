"use strict";var y=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var d=y(function(p,c){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/assert-is-function/dist'),b=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/symbol-iterator/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function m(t,e,u,f){var n,i,a;if(!b(t))throw new TypeError(v('null46',t));if(!s(e))throw new TypeError(v('null2H',e));if(!s(u))throw new TypeError(v('null3N',u));return a=-1,n={},l(n,"next",g),l(n,"return",q),o&&s(t[o])&&l(n,o,w),n;function g(){var r;return a+=1,i?{done:!0}:(r=t.next(),r.done?(i=!0,r):(r=r.value,u.call(f,r,a),e(r,a)===!0?(i=!0,{done:!0}):{value:r,done:!1}))}function q(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function w(){return m(t[o](),e,u,f)}}c.exports=m
});var h=d();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
