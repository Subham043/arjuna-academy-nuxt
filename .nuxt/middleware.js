const middleware = {}

middleware['Unauthenticated'] = require('../middleware/Unauthenticated.js')
middleware['Unauthenticated'] = middleware['Unauthenticated'].default || middleware['Unauthenticated']

export default middleware
