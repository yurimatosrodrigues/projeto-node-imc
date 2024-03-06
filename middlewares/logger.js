function logger(req, res, next){
    console.log('antes...');
    next();
    console.log('depois...');
}

module.exports = logger;