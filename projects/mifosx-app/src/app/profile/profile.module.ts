/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { ProfileRoutingModule } from './profile-routing.module';

/** Custom Components */
import { ProfileComponent } from './profile.component';

/**
 * Profile Module
 */
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    MifosxLibModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
