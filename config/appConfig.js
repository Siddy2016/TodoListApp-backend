let appConfiguration = {
 port : 3004,
 env:"dev",
 db:{uri:"mongodb://127.0.0.1:27017/todo"},
 apiVersion:"/api/v1.0",
 allowedCorsOrigin:"*",
};
module.exports = appConfiguration;
