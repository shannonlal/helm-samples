

const loggerMiddleware = function (req, res, next) {
    console.log(`req ${req.method}  url ${req.url} Response Sent `);
    next();
}

module.exports = {
    loggerMiddleware
};