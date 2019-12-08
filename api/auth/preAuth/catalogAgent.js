module.exports = {
  accessPoint,
  matchClosestRoute,
  routesToArry
};

//Used mainly for jwt as it perains to private routes
//Compares routeCatalog links against the requested URL
//Returs Boolean
function accessPoint(routeCatalog, url, params) {
  let access = false;
  const urlIndex = url.split("/");
  routeCatalog.forEach(route => {
    const routeIndex = route.route.split("/");
    access =
      routeIndex[1].toLocaleLowerCase() === urlIndex[1].toLocaleLowerCase()
        ? true
        : access;
  });
  return access;
}

function matchClosestRoute(routeCatalog,req) {
  req = req.substring(0, 5);
  filteredRoutes = [];
  routeCatalog = routesToArry(routeCatalog);
  
  routeCatalog.forEach(route => {
    route.route.includes(req) 
    && filteredRoutes.push(route.route);
  });

  match = filteredRoutes[0].split('/')
  return match[1];
}

function routesToArry(routeCatalog) {
  const routesAsArray = [];
  Object.keys(routeCatalog).forEach(routeGroup => {
    routeCatalog[routeGroup].forEach(route => {
      routesAsArray.push(route);
    });
  });
  return routesAsArray;
}
