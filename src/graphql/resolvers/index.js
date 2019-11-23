const requireDir = require('require-dir')
const resolversObj = requireDir('../resolvers')
const resolversArray = Object.values(resolversObj)

const resolvers = resolversArray.reduce((obj,resolver) =>
{
   return { ...obj,...resolver }
}, {})

module.exports = resolvers