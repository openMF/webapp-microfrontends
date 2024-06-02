/**
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/web-app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { appModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(appModule)
  .catch(err => console.log(err));
