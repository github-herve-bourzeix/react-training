const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')


require('@babel/register')({
  extensions: ['.js'],
  ignore: [/node_modules/],
})

Enzyme.configure({ adapter: new Adapter() })
