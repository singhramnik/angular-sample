import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTile: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
  }

}
