const koa = require('koa');
const koaRouter = require('koa-router');
const app = new koa();
const router = new koaRouter();
const port = 3000;

router.get('/', (ctx) => {
  ctx.body = '<h1>page of index</h1>';
});

router.get('/about', (ctx) => {
  ctx.body = '<h1>page of about</h1>';
});

router.get('/contact', (ctx) => {
  ctx.body = '<h1>page of contact</h1>';
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => console.log(`server port ${port} is launch `));
