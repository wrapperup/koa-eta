const eta = require('eta');

function koaEta(app, config) {
  config = {
    ...eta.defaultConfig,
    cache: process.env.NODE_ENV === 'production',
    ...config
  };

  eta.configure(config);

  app.context.render = async function(view, locals) {
    const ctx = this;
    const data = { ...ctx.state, ...locals };

    const html = await eta.renderFile(view, data);

    this.type = 'text/html';
    this.body = html;

    return html
  }

  return eta;
}

module.exports = koaEta;
