// Logger
const logger = (req, res, next) => {
    const today = new Date();
    console.log(`${today.toLocaleString()} - ${req.ip} > ${req.method} ${req.originalUrl}`);
    next();
  }
module.exports = logger;