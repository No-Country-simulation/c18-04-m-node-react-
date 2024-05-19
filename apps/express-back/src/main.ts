import { ExpressService } from './services';
import { AppRoutes } from './modules/app.routes';
import { envs } from './config/envs';

(() => {
  main()
})();

async function main() {
  //Database connection

  //api service
  new ExpressService({
    port: envs.API_PORT,
    routes: AppRoutes.routes
  }).start()
}
