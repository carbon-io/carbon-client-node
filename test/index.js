var carbon_core = require('@carbon-io/carbon-core')

var o   = require('@carbon-io/atom').o(module).main
var _o  = require('@carbon-io/bond')._o(module)
var testtube = require('@carbon-io/testtube')


/***********************************************************************************************************************
 * All tests
 */
module.exports = o({

  /*********************************************************************************************************************
   * _type
   */
  _type: testtube.Test,

  /*********************************************************************************************************************
   * name
   */
  name: "Carbon Client Node tests",

  /*********************************************************************************************************************
   * tests
   */
  tests: [
    _o('./HttpMethodsTest'),
    _o('./CollectionsTest'),
    _o('./ErrorTest')
  ]
})
