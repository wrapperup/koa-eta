import * as Eta from 'eta';
import * as Koa from "koa";

declare module 'koa' {
  export interface ExtendableContext {
    render(view: string, locals?: any): Promise<void>
  }
}

/**
 * Setup function for Eta view rendering in Koa.
 * 
 * @example
 *
 * Basic usage:
 *
 * ```javascript
 * const Koa = require('koa');
 * const koaEta = require('koa-eta');
 *
 * const app = new Koa();
 *
 * koaEta(app, {
 *   views: __dirname + '/views'
 *   // ... other Eta options
 *   // see https://eta.js.org/docs/api/configuration for more
 * });
 *
 * app.use(async ctx => {
 *   ctx.state = {
 *     title: 'Koa Eta'
 *   };
 *
 *   await ctx.render('index', {
 *     message: 'Hello World!'
 *   });
 * });
 * ```
 */
declare function koaEta<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext>(app: Koa<StateT, ContextT>, config?: Partial<Eta.EtaConfig>): typeof Eta;
export = koaEta;
