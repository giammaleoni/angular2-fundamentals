import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms'
import { HTTP_PROVIDERS } from '@angular/http';
import { App, providers, routes } from './app';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

bootstrap(App, [
    ...HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ...providers
]);

