var __ = require('@carbon-io/fibers').__(module)
var CarbonClient = require('@carbon-io/carbon-client-node')

var client = new CarbonClient("http://localhost:8888")

__(function() {
    var usersCollection = client.getCollection("users")
    var cursor = usersCollection.find()
    var item = cursor.next()
    if (item == null) {
      console.log("Finish!")
    } else {
      console.log("Next item:")
      console.log(item)
    }
  }
)
