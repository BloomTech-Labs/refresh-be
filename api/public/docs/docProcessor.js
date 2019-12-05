
module.exports = {
  docGen
};

//Creates a new JWT Token
function docGen(routes) {
    return (req, res, next) => {
      req.routes = routes
      next()
    }
  }
