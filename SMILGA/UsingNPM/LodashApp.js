const _ = require('lodash')
// This is the convention used in calling node modules.
const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);