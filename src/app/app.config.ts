import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptors, withXsrfConfiguration} from "@angular/common/http";
import {authExpired} from "./core/auth/auth-expired.intercepter";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([authExpired]),
      withXsrfConfiguration({cookieName: "XSRF-TOKEN", headerName: "X-XSRF-TOKEN"})),
    provideRouter(routes),
  ],
};
