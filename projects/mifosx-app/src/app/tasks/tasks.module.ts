import { NgModule } from '@angular/core';

/** Custom Modules */
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { PipesModule } from '@mifosx-lib/pipes/pipes.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { DirectivesModule } from '@mifosx-lib/directives/directives.module';

/** Custom Components */
import { CheckerInboxAndTasksComponent } from './checker-inbox-and-tasks/checker-inbox-and-tasks.component';
import { CheckerInboxComponent } from './checker-inbox-and-tasks-tabs/checker-inbox/checker-inbox.component';
import { ClientApprovalComponent } from './checker-inbox-and-tasks-tabs/client-approval/client-approval.component';
import { LoanApprovalComponent } from './checker-inbox-and-tasks-tabs/loan-approval/loan-approval.component';
import { LoanDisbursalComponent } from './checker-inbox-and-tasks-tabs/loan-disbursal/loan-disbursal.component';
import { RescheduleLoanComponent } from './checker-inbox-and-tasks-tabs/reschedule-loan/reschedule-loan.component';
import { ViewCheckerInboxComponent } from './view-checker-inbox/view-checker-inbox.component';

/**
 * Tasks Module
 */
@NgModule({
  imports: [
    MifosxLibModule,
    TasksRoutingModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [
    CheckerInboxAndTasksComponent,
    CheckerInboxComponent,
    ClientApprovalComponent,
    LoanApprovalComponent,
    LoanDisbursalComponent,
    RescheduleLoanComponent,
    ViewCheckerInboxComponent
  ],
  providers: [ ]
})
export class TasksModule { }
