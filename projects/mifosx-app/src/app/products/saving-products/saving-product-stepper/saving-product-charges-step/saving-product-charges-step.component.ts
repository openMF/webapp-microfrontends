import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormControl, AbstractControl } from '@angular/forms';

import { DeleteDialogComponent } from '@mifosx-lib/delete-dialog/delete-dialog.component';

@Component({
  selector: 'mifosx-saving-product-charges-step',
  templateUrl: './saving-product-charges-step.component.html',
  styleUrls: ['./saving-product-charges-step.component.scss']
})
export class SavingProductChargesStepComponent implements OnInit {

  @Input() savingProductsTemplate: any;
  @Input() currencyCode: AbstractControl<any, any>;

  chargeData: any;

  chargesDataSource: {}[];
  displayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType', 'action'];

  pristine = true;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.chargeData = this.savingProductsTemplate.chargeOptions;

    this.chargesDataSource = this.savingProductsTemplate.charges || [];
    this.pristine = true;

    this.currencyCode.valueChanges.subscribe(() => this.chargesDataSource = []);
  }

  addCharge(charge: any) {
    this.chargesDataSource = this.chargesDataSource.concat([charge.value]);
    charge.value = '';
    this.pristine = false;
  }

  deleteCharge(charge: any) {
    const deleteChargeDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `charge ${charge.name}` }
    });
    deleteChargeDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.chargesDataSource.splice(this.chargesDataSource.indexOf(charge), 1);
        this.chargesDataSource = this.chargesDataSource.concat([]);
        this.pristine = false;
      }
    });
  }

  get savingProductCharges() {
    return {
      charges: this.chargesDataSource
    };
  }

}
