import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// Importar o pacote de internacionalização (i18n)
import { provideTranslateService } from '@ngx-translate/core';

// Importar o pacote responsável por importar os arquivos JSON
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang:'pt-BR',
      loader: provideTranslateHttpLoader({
        prefix:'./assets/i18n/',
        suffix:'.json'
      })
    })
  ]
};
