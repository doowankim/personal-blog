const koa = require('koa');
const app = new koa();
const port = 3200;

app.listen(port, console.log(`Server running on port: ${port}`));
