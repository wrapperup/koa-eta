# koa-eta
A tiny library to bring Eta to Koa.

## Install
```bash
npm install koa-eta --save
```

## Basic Usage
```javascript
const Koa = require('koa');
const koaEta = require('koa-eta');

const app = new Koa();

koaEta(app, {
  views: __dirname + '/views'
  // ... other Eta options
  // see https://eta.js.org/docs/api/configuration for more
});

app.use(async ctx => {
  ctx.state = {
    title: 'Koa Eta'
  };

  await ctx.render('index', {
    message: 'Hello World!'
  });
});
```

## Mounting `ctx.render`
Call `koaEta(app, config)` with your Koa app and Eta config.

See https://eta.js.org/docs/learn/configuration or https://eta.js.org/docs/api/configuration for parameters to the config object.

## License
MIT
