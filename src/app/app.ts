import express from 'express';
import router from '@routes/router';

class App {
  express: express.Application;

  constructor() {
    this.express = express();

    this.setup();
  }

  private setup() {
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(router);
  }
}

export default new App().express;
