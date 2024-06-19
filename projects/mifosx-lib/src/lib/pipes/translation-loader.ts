import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';

export function createTranslateLoader(http: HttpClient, locationStrategy: LocationStrategy) {
  return new TranslateHttpLoader(http, `${window.location.protocol}//${window.location.host}${locationStrategy.getBaseHref()}projects/mifosx-app/src/assets/translations/`, '.json');
}
