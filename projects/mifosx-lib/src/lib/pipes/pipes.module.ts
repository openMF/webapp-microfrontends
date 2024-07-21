import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusLookupPipe } from './status-lookup.pipe';
import { AccountsFilterPipe } from './accounts-filter.pipe';
import { ChargesFilterPipe } from './charges-filter.pipe';
import { ChargesPenaltyFilterPipe } from './charges-penalty-filter.pipe';
import { FindPipe } from './find.pipe';
import { UrlToStringPipe } from './url-to-string.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { DatetimeFormatPipe } from './datetime-format.pipe';
import { ExternalIdentifierPipe } from './external-identifier.pipe';
import { FormatNumberPipe } from './format-number.pipe';
import { YesnoPipe } from './yesno.pipe';
import { PrettyPrintPipe } from './pretty-print.pipe';
import { TranslateCatalog } from './translate-catalog';
import { TranslationModule } from './translation.module';
@NgModule({
  imports: [CommonModule, TranslationModule],
  declarations: [
    StatusLookupPipe,
    AccountsFilterPipe,
    ChargesFilterPipe,
    ChargesPenaltyFilterPipe,
    FindPipe,
    UrlToStringPipe,
    DateFormatPipe,
    DatetimeFormatPipe,
    ExternalIdentifierPipe,
    FormatNumberPipe,
    YesnoPipe,
    PrettyPrintPipe,
    TranslateCatalog,
  ],
  providers: [
    StatusLookupPipe,
    AccountsFilterPipe,
    ChargesFilterPipe,
    ChargesPenaltyFilterPipe,
    FindPipe,
    UrlToStringPipe,
    DateFormatPipe,
    DatetimeFormatPipe,
    ExternalIdentifierPipe,
    FormatNumberPipe,
    YesnoPipe,
    PrettyPrintPipe,
  ],
  exports: [
    TranslationModule,
    StatusLookupPipe,
    AccountsFilterPipe,
    ChargesFilterPipe,
    ChargesPenaltyFilterPipe,
    TranslateCatalog,
    FindPipe,
    UrlToStringPipe,
    DateFormatPipe,
    DatetimeFormatPipe,
    ExternalIdentifierPipe,
    FormatNumberPipe,
    YesnoPipe,
    PrettyPrintPipe,
  ],
})
export class PipesModule {}
