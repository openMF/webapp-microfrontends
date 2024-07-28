import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'mifosx-share-product-general-tab',
  templateUrl: './share-product-general-tab.component.html',
  styleUrls: ['./share-product-general-tab.component.scss']
})
export class ShareProductGeneralTabComponent implements OnInit {

  shareProduct: any;

  marketPriceDisplayedColumns: string[] = ['fromDate', 'shareValue'];
  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];

  constructor(private route: ActivatedRoute, private decimalPipe: DecimalPipe) {
    this.route.data.subscribe((data: { shareProduct: any }) => {
      this.shareProduct = data.shareProduct;
    });
  }

  ngOnInit(): void {
  }

  formatShareValue(value: number): string {
    return this.decimalPipe.transform(value, 'numberFormat');
  }

}
