/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityService } from '../utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  brands: any = [];
  sizes: any = [];

  selectedBrands: any = [];
  selectedSizes: any = [];

  priceRange: PriceRange = {
    lower: 0,
    upper: 5000,
    applied: false
  };

  sort: Sort = {
    latest: false,
    price_lth: false,
    price_htl: false
  };

  items: any = [];
  item: any = {};
  filterItems: any = [];

  cartCount = 0;

  listBy: ListBy = {
    nav: false,
    search: false,
    banner: false,
    details: false
  };

  searchTerm = '';
  searchIn: string;
  bannerId: string;

  show_result_size = true;

  bannerImages = [
    {
      imgurl: 'assets/venki/babpack.jpg'
    }, {
      imgurl: 'assets/venki/b.jpg'
    }, {
      imgurl: 'assets/venki/healthfood.jpg'
    }
  ];

  products = [
    {
      id : 1,
      imgurl: 'assets/venki/babb.jpg',
      name: 'bath kits',
      category: 'shopping',
      price: 627,
      totalStock: 10
    }, {
      id : 2,
      imgurl: 'assets/venki/ba.jpg',
      name: 'dentel kits',
      category: 'routine',
      price: 437,
      totalStock: 10
    }, {
      id : 3,
      imgurl: 'assets/venki/b.jpg',
      name: 'Real Value',
      price: 477,
      totalStock: 10
    }, {
      id : 4,
      imgurl: 'assets/venki/babpack.jpg',
      name: 'Vosto bags',
      category: 'shopping',
      price: 565,
      totalStock: 10
    }, {
      id : 5,
      imgurl: 'assets/venki/lotions.jpg',
      name: 'pampers',
      category: 'shopping',
      price: 650,
      totalStock: 10
    }, {
      id : 6,
      imgurl: 'assets/venki/babpack.jpg',
      name: 'Vosto bags',
      category: 'shopping',
      price: 65,
      totalStock: 10
    }
  ];

  categories: any = [
    {
      category : 'shopping'
    }, {
      category : 'folk'
    }, {
      category : 'routine'
    }
  ];

  constructor(
    private modalCtrl: ModalController,
    private utility: UtilityService,
  ) {

  }

  searchProducts( term: string, sort: string = '' ) {
    this.utility.presentLoading('Please wait.!.');

    this.resetItems();
    this.listBy.search = true;

  }

  getProductsByDepartment(department: string, sort: string = '' ) {
    console.log('search product by department :', department);
    this.utility.presentLoading('Loading...');
    // list by and reset all items is in the childcategories page


  }

  initProductList(items: any) {
    this.items = items;
    this.filterItems = items;

    this.setSizes();
    this.setBrands();
    this.showResultCount();
  }

  applySort( column, order, type ) {
    this.uncheckSorts();

    console.log('type :>> ', type, this.sort);
    //this.utility.presentLoading('Please wait.....');

    if ( this.listBy.banner ) {

    } else if ( this.listBy.nav ) {
      this.resetItems();
      this.listBy.nav = true;

      this.getProductsByDepartment(this.searchIn, `&column=${column}&order=${order}`);
    } else if ( this.listBy.search ) {
      this.searchProducts(this.searchIn, `&column=${column}&order=${order}`);
    }

    this.sort[type] = true;

  }

  applyLocalSort( column, order, type )  {
    this.uncheckSorts();
    this.sort[type] = true;
    console.log('column :>> ', column);
    this.items = this.items.sort((a, b) => {
      console.log('sort :>> ', a, b);
      if ( order === 'desc' ) {
        return a[column] > b[column];
      } else {
        return a[column] < b[column];
      }

    });
  }

  applyFilter() {
    console.log(this.selectedBrands, this.selectedSizes, this.priceRange);
    if ( this.selectedBrands.length > 0 || this.selectedSizes.length > 0 || this.priceRange.applied ) {
      console.log('Filter applied :>> ');
      this.items = [];

      for(let i = 0; i < this.filterItems.length; i++) {
        let foundBrand = true; let foundSize = true; let foundPrice = true;

        if ( this.selectedBrands.length > 0 ) {
          foundBrand = this.selectedBrands.some( (val: { brand: string; isChecked: any }) => val.brand.toLocaleLowerCase() === this.filterItems[i].brand.toLocaleLowerCase() && val.isChecked);
        }

        if ( this.selectedSizes.length > 0 ) {
          foundSize = this.selectedSizes.some( val => val.size === this.filterItems[i].size && val.isChecked);
        }

        if ( this.priceRange.applied ) {
          let price = this.filterItems[i].rsp;
          price = !price ? this.filterItems[i].mrp : price;
          foundPrice = ( price >= this.priceRange.lower && price <= this.priceRange.upper );
        }

        if(foundBrand && foundSize && foundPrice) {
          this.items.push(this.filterItems[i]);
        }

      }
    } else {
      console.log('No Filter found:>> ');
      this.items = this.filterItems;
    }
  }


  showResultCount() {
    this.show_result_size = true;
    setTimeout(() => {
      this.show_result_size = false;
    }, 2000);
  }

  getBrands() {
    const tempBrands = [];
    this.brands = [];
    this.selectedBrands = [];


  }

  setBrands() {
    const tempBrands = [];
    this.brands = [];
    this.selectedBrands = [];

    this.items.forEach(val => {
      if ( val.brand && !tempBrands.includes(val.brand) ) {
        tempBrands.push(val.brand);
        this.brands.push({
          isChecked: false,
          brand: val.brand
        });

      }
    });

    console.log('set brands :>> ', this.brands);

  }

  setSizes() {

    const tempSizes = [];
    this.sizes = [];
    this.selectedSizes = [];

    this.items.forEach(val => {
      console.log('val :>> ', val);
      if ( val.size && !tempSizes.includes(val.size) ) {
          tempSizes.push(val.size);

          this.sizes.push({ isChecked: false, size: val.size });
      }

    });

    console.log('sizes :>> ', this.sizes);

  }

  resetItems() {
    this.items = [];
    this.filterItems = [];

    this.searchIn = '';
    this.searchTerm = '';
    this.uncheckFilters();
    this.uncheckSorts();
    this.defaultListBy();
  }

  uncheckSorts() {
    this.defaultSorting();
  }

  uncheckFilters() {
    this.selectedBrands = [];
    this.selectedSizes = [];
    this.defaultPriceRange();

    for( let i = 0; i < this.brands.length; i++) {
      this.brands[i].isChecked = false;
    }

    for( let i = 0; i < this.sizes.length; i++) {
      this.sizes[i].isChecked = false;
    }
  }

  defaultPriceRange() {
    this.priceRange = {
      applied:  false,
      lower : 0,
      upper : 5000
    };

  }

  defaultSorting() {
    Object.keys(this.sort).forEach(key => {
      this.sort[key] = false;
    });
  }

  defaultListBy() {
    Object.keys(this.listBy).forEach(key => {
      this.listBy[key] = false;
    });
  }

}

interface PriceRange {
  lower: any;
  upper: any;
  applied: boolean;
}

interface Sort {
  latest: boolean;
  price_lth: boolean;
  price_htl: boolean;
}

interface ListBy {
  search: boolean;
  banner: boolean;
  nav: boolean;
  details: boolean;
}
