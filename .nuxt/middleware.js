const middleware = {}

middleware['IsAdmin'] = require('../middleware/IsAdmin.js')
middleware['IsAdmin'] = middleware['IsAdmin'].default || middleware['IsAdmin']

middleware['Unauthenticated'] = require('../middleware/Unauthenticated.js')
middleware['Unauthenticated'] = middleware['Unauthenticated'].default || middleware['Unauthenticated']

export default middleware
