const axios = require("axios");
const rootUrl =
    "https://" + process.env.ROOT_URL || "http://localhost:" + process.env.PORT;
module.exports = {
    docGen
};

function docGen(routes) {
    return (req, res, next) => {
        let newObj = {};
        Object.keys(routes).forEach(async routeGroup => {
            axiosCalls = [];
            routes[routeGroup].forEach((route, i) => {
                axiosCalls.push(
                    axios[route.method.toLowerCase()](rootUrl + route.route)
                );
            });
            const resolved = [];
            await Promise.all(
                axiosCalls.map((p, i) =>
                    p
                    .then(res =>
                        resolved.push({...routes[routeGroup][i], returns: res.data })
                    )
                    .catch(() =>
                        resolved.push({
                            ...routes[routeGroup][i],
                            returns: "Not Functioning"
                        })
                    )
                )
            );
            newObj[routeGroup] = resolved;
            console.log(newObj);
        });
        //New object Returned before Above is fully resolved
        req.routes = newObj;
        setTimeout(function() { next(); }, 3000);

    };
}