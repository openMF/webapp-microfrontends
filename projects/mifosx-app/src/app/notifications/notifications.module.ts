/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { PipesModule } from '@mifosx-lib/pipes/pipes.module';
import { NotificationsRoutingModule } from './notifications-routing.module';

/** Custom Components */
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';

/**
 * Notifications Module
 */
@NgModule({
  declarations: [
    NotificationsPageComponent
  ],
  imports: [
    MifosxLibModule,
    PipesModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
