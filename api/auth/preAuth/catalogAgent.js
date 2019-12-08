module.exports = (routeCatalog, url, params) => {
  //I Do some comparisons
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
