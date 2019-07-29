import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { CompileShallowModuleMetadata } from "@angular/compiler";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent 
                  implements OnInit{
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://runeman.org/clipart/2019/spade.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://runeman.org/clipart/2018/hammer-chinese.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "http://runeman.org/clipart/2019/blunderbuss.png"
    },
  ];

  constructor(){
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
}