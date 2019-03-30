let appConfiguration = {
 port : 3000,
 env:"dev",
 db:{uri:"mongodb://127.0.0.1:27017/TodoListAppDB"},
 apiVersion:"/api/v1.0",
 allowedCorsOrigin:"*",
};
module.exports = appConfiguration;
