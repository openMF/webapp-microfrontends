/** Angular Imports */
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MifosxLibComponent } from './mifosx-lib.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/** Custom Components */
import { AccountNumberComponent } from './account-number/account-number.component';
import { GlAccountDisplayComponent } from './accounting/gl-account-display/gl-account-display.component';
import { GlAccountSelectorComponent } from './accounting/gl-account-selector/gl-account-selector.component';
import { ViewJournalEntryComponent } from './accounting/view-journal-entry/view-journal-entry.component';
import { ViewSavingsAccountingDetailsComponent } from './accounting/view-savings-accounting-details/view-savings-accounting-details.component';
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
import { FormfieldComponent } from './form-dialog/formfield/formfield.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { DatatableMultiRowComponent } from './tabs/entity-datatable-tab/datatable-multi-row/datatable-multi-row.component';
import { DatatableSingleRowComponent } from './tabs/entity-datatable-tab/datatable-single-row/datatable-single-row.component';
import { EntityDatatableTabComponent } from './tabs/entity-datatable-tab/entity-datatable-tab.component';
import { EntityNotesTabComponent } from './tabs/entity-notes-tab/entity-notes-tab.component';
import { UploadDocumentDialogComponent } from './tabs/upload-document-dialog/upload-document-dialog.component';
import { EntityDocumentsTabComponent } from './tabs/entity-documents-tab/entity-documents-tab.component';
import { MifosxLongTextComponent } from './feature-component/mifosx-long-text.component';

/** Custom Modules */

import { IconsModule } from './icons.module';
import { MaterialModule } from './material.module';
import { PipesModule } from './pipes/pipes.module';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RevertTransactionComponent } from './accounting/revert-transaction/revert-transaction.component';
import { ViewJournalEntryTransactionComponent } from './accounting/view-journal-entry-transaction/view-journal-entry-transaction.component';


@NgModule({
  imports: [
    IconsModule,
    CommonModule,
    RouterModule,
    PipesModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  declarations: [
    MifosxLibComponent,
    AccountNumberComponent,
    GlAccountDisplayComponent,
    RevertTransactionComponent,
    ViewJournalEntryTransactionComponent,
    GlAccountSelectorComponent,
    ViewJournalEntryComponent,
    ViewSavingsAccountingDetailsComponent,
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
    FileUploadComponent,
    FormfieldComponent,
    FormDialogComponent,
    ViewJournalEntryComponent,
    FooterComponent,
    DatatableMultiRowComponent,
    DatatableSingleRowComponent,
    EntityDatatableTabComponent,
    EntityNotesTabComponent,
    EntityDocumentsTabComponent,
    UploadDocumentDialogComponent,
    MifosxLongTextComponent
  ],
  exports: [
    MifosxLibComponent,
    AccountNumberComponent,
    GlAccountDisplayComponent,
    ExternalIdentifierComponent,
    GlAccountSelectorComponent,
    ViewJournalEntryComponent,
    ViewSavingsAccountingDetailsComponent,
    IconsModule,
    SearchToolComponent,
    RevertTransactionComponent,
    ViewJournalEntryTransactionComponent,
    PipesModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ThemePickerComponent,
    ThemeToggleComponent,
    TransactionPaymentDetailComponent,
    NotificationsTrayComponent,
    FileUploadComponent,
    FormDialogComponent,
    ViewJournalEntryComponent,
    FooterComponent,
    EntityDatatableTabComponent,
    EntityNotesTabComponent,
    UploadDocumentDialogComponent,
    EntityDocumentsTabComponent,
    StepperButtonsComponent,
    DatatableMultiRowComponent,
    LanguageSelectorComponent,
    TenantSelectorComponent,
    ServerSelectorComponent,
    MifosxLongTextComponent,
    EntityNameComponent
  ],
  schemas: [],
})
export class MifosxLibModule {}
