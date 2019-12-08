module.exports = (routeCatalog, url, params) => {
  //Used mainly for jwt as it perains to private routes
  //Compares routeCatalog links against the requested URL
  //Returs Boolean
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
};
