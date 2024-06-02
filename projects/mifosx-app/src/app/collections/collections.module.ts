/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { PipesModule } from '@mifosx-lib/pipes/pipes.module';
import { CollectionsRoutingModule } from './collections-routing.module';

/** Custom Components */
import { IndividualCollectionSheetComponent } from './individual-collection-sheet/individual-collection-sheet.component';

@NgModule({
  imports: [
    MifosxLibModule,
    PipesModule,
    CollectionsRoutingModule
  ],
  declarations: [
    IndividualCollectionSheetComponent
  ]
})
export class CollectionsModule { }
