import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

// ✅ Registra o locale pt-BR antes de iniciar a aplicação
registerLocaleData(localePt);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
