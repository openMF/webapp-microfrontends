/** Angular Imports */
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MifosxLibComponent } from './mifosx-lib.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/** Custom Components */
import { AccountNumberComponent } from './account-number/account-number.component';
import { GlAccountDisplayComponent } from './accounting/gl-account-display/gl-account-display.component';
import { GlAccountSelectorComponent } from './accounting/gl-account-selector/gl-account-selector.component';
import { ViewJournalEntryComponent } from './accounting/view-journal-entry/view-journal-entry.component';
// import { ViewSavingsAccountingDetailsComponent } from './accounting/view-savings-accounting-details/view-savings-accounting-details.component';
import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DisableDialogComponent } from './disable-dialog/disable-dialog.component';
import { EnableDialogComponent } from './enable-dialog/enable-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { EntityNameComponent } from './entity-name/entity-name.component';
import { ExternalIdentifierComponent } from './external-identifier/external-identifier.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { KeyboardShortcutsDialogComponent } from './keyboard-shortcuts-dialog/keyboard-shortcuts-dialog.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { SearchToolComponent } from './search-tool/search-tool.component';
import { ServerSelectorComponent } from './server-selector/server-selector.component';
import { StepperButtonsComponent } from './steppers/stepper-buttons/stepper-buttons.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { TenantSelectorComponent } from './tenant-selector/tenant-selector.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { TransactionPaymentDetailComponent } from './transaction-payment-detail/transaction-payment-detail.component';
import { NotificationsTrayComponent } from './notifications-tray/notifications-tray.component';
// import { FormfieldComponent } from './form-dialog/formfield/formfield.component';
// import { FormDialogComponent } from './form-dialog/form-dialog.component';

/** Custom Modules */

import { IconsModule } from './icons.module';
import { MaterialModule } from './material.module';
import { PipesModule } from './pipes/pipes.module';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';


/** Main Routing Module */

import { LocationStrategy } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';




@NgModule({
  declarations: [
    MifosxLibComponent,
    AccountNumberComponent,
    GlAccountDisplayComponent,
    GlAccountSelectorComponent,
    ViewJournalEntryComponent,
    // ViewSavingsAccountingDetailsComponent,
    CancelDialogComponent,
    ChangePasswordDialogComponent,
    ConfirmationDialogComponent,
    DeleteDialogComponent,
    DisableDialogComponent,
    EnableDialogComponent,
    ErrorDialogComponent,
    EntityNameComponent,
    ExternalIdentifierComponent,
    FileUploadComponent,
    KeyboardShortcutsDialogComponent,
    LanguageSelectorComponent,
    SearchToolComponent,
    ServerSelectorComponent,
    StepperButtonsComponent,
    SvgIconComponent,
    TenantSelectorComponent,
    ThemePickerComponent,
    ThemeToggleComponent,
    TransactionPaymentDetailComponent,
    NotificationsTrayComponent,
    // FormfieldComponent,
    // FormDialogComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient, locationStrategy: LocationStrategy) => {
          return new TranslateHttpLoader(http, `${ window.location.protocol }//${ window.location.host }${locationStrategy.getBaseHref()}/assets/translations/`, '.json');
        },
        deps: [HttpClient, LocationStrategy]
      }
    }),
    IconsModule,
    CommonModule,
    RouterModule,
    PipesModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule
  ],
  exports: [
    MifosxLibComponent,
    AccountNumberComponent,
    GlAccountDisplayComponent,
    GlAccountSelectorComponent,
    ViewJournalEntryComponent,
    // ViewSavingsAccountingDetailsComponent,
    IconsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ThemePickerComponent,
    ThemeToggleComponent,
    TransactionPaymentDetailComponent,
    NotificationsTrayComponent
  ]
})
export class MifosxLibModule { }
