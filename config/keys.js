
if( process.env.NODE_ENV === 'production') {
    //we are in proudction- return production set of keys
    module.exports = require('./prod');
} else {
    // we are in dev , return dev set of keys
    module.exports = require('./dev');
}

