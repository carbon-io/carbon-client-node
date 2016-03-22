/**
 * Created by abdul on 3/22/16.
 */

var assert = require('assert');
var testClient = require('../setup')

// test hello async
console.log("Basic test (ASYNC)")


// GET
testClient.getEndpoint("get-test").get(function(e, res) {
  assert( e == null)
  assert(res != null)
  assert(res.body === "GET")
  console.log("get-test endpoint async get result: " + res.body)
})


// POST
testClient.getEndpoint("post-test").post(function(e, res) {
  assert( e == null)
  assert(res != null)
  assert(res.body === "POST")
  console.log("post-test endpoint async get result: " + res.body)
})

// PUT
testClient.getEndpoint("put-test").put(function(e, res) {
  assert( e == null)
  assert(res != null)
  assert(res.body === "PUT")
  console.log("put-test endpoint async get result: " + res.body)
})

// PATCH
testClient.getEndpoint("patch-test").patch(function(e, res) {
  assert( e == null)
  assert(res != null)
  assert(res.body === "PATCH")
  console.log("patch-test endpoint async get result: " + res.body)
})

// DELETE
testClient.getEndpoint("delete-test").delete(function(e, res) {
  assert( e == null)
  assert(res != null)
  assert(res.body === "DELETE")
  console.log("delete-test endpoint async get result: " + res.body)
})

// HEAD
testClient.getEndpoint("head-test").head(function(e, res) {
  assert( e == null)
  assert(res != null)
  assert(res.body === "HEAD")
  console.log("head-test endpoint async get result: " + res.body)
})

