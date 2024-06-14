/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { UsersRoutingModule } from './users-routing.module';

/** Custom Components */
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TranslateModule } from '@ngx-translate/core';
/**
 * Users Module
 *
 * Users components should be declared here.
 */
@NgModule({
  imports: [
    MifosxLibModule,
    UsersRoutingModule,
    TranslateModule
  ],
  declarations: [
    UsersComponent,
    CreateUserComponent,
    ViewUserComponent,
    EditUserComponent
  ]
})
export class UsersModule { }
