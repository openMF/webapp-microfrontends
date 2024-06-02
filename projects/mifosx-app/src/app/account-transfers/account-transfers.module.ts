/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { AccountTransfersRoutingModule } from './account-transfers-routing.module';
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { PipesModule } from '@mifosx-lib/pipes/pipes.module';
import { DirectivesModule } from '@mifosx-lib/directives/directives.module';

/** Custom Components */
import { ViewStandingInstructionsComponent } from './view-standing-instructions/view-standing-instructions.component';
import { EditStandingInstructionsComponent } from './edit-standing-instructions/edit-standing-instructions.component';
import { CreateStandingInstructionsComponent } from './create-standing-instructions/create-standing-instructions.component';
import { MakeAccountTransfersComponent } from './make-account-transfers/make-account-transfers.component';
import { ListStandingInstructionsComponent } from './list-standing-instructions/list-standing-instructions.component';
import { ListTransactionsComponent } from './list-transactions/list-transactions.component';
import { ViewAccountTransferComponent } from './view-account-transfer/view-account-transfer.component';
/**
 * Account Transfers Module
 *
 * All components related to Account Transfers functions should be declared here.
 */
@NgModule({
  imports: [MifosxLibModule, PipesModule, DirectivesModule, AccountTransfersRoutingModule],
  declarations: [
    ViewStandingInstructionsComponent,
    EditStandingInstructionsComponent,
    CreateStandingInstructionsComponent,
    MakeAccountTransfersComponent,
    ListStandingInstructionsComponent,
    ListTransactionsComponent,
    ViewAccountTransferComponent
  ],
  providers: [ ]
})
export class AccountTransfersModule { }
