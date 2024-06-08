/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { SearchRoutingModule } from './search-routing.module';

/** Custom Components */
import { SearchPageComponent } from './search-page/search-page.component';
import { PipesModule } from '@mifosx-lib/pipes/pipes.module';

/**
 * Search Module
 */
@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    MifosxLibModule,
    PipesModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
