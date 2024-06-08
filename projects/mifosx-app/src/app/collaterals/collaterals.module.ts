/** Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '@mifosx-lib/directives/directives.module';

/** Custom Modules */
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { PipesModule } from '@mifosx-lib/pipes/pipes.module';

/** Custom Components */
import { CollateralsRoutingModule } from './collaterals-routing.module';
import { ViewCollateralComponent } from './view-collateral/view-collateral.component';
import { EditCollateralComponent } from './edit-collateral/edit-collateral.component';


@NgModule({
  declarations: [
    ViewCollateralComponent,
    EditCollateralComponent
  ],
  imports: [
    CommonModule,
    CollateralsRoutingModule,
    MifosxLibModule,
    DirectivesModule,
    PipesModule
  ]
})
export class CollateralsModule { }
