/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { MifosxLibModule } from '../mifosx-lib.module';
import { SettingsRoutingModule } from './settings-routing.module';

/** Custom Components */
import { SettingsComponent } from './settings.component';
import { TranslateModule } from '@ngx-translate/core';
/**
 * Settings Module
 *
 * All components related to settings and web app configuration should be declared here.
 */
@NgModule({
  imports: [
    MifosxLibModule,
    SettingsRoutingModule,
    TranslateModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
