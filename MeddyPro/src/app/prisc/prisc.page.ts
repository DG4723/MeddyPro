import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {  HttpErrorResponse, } from '@angular/common/http';
import { map, } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prisc',
  templateUrl: 'prisc.page.html',
  styleUrls: ['prisc.page.scss']
})
export class PriscPage implements OnInit, AfterViewInit {
  @ViewChild('search', { static: false }) search: any;

  name = 'Ngx Datatables Filter All Columns';
  public temp: Array<object> = [];
  public rows: Array<object> = [];
  public columns: Array<object>;
  


  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    // Initial columns, can be used for data list which is will be filtered
    this.columns = [
      { prop: 'id' },
      { prop: 'name', name: 'Name' },
      { prop: 'price', name: 'price' },
      
      { prop: 'date',name: 'date' }
    ];

    this.getDataJson();
    // this.findAll();
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    fromEvent(this.search.nativeElement, 'keydown')
      .pipe(
        debounceTime(550),
        map(x => x['target']['value'])
      )
      .subscribe(value => {
        this.updateFilter(value);
      });
  }

  updateFilter(val: any) {
    const value = val.toString().toLowerCase().trim();
    // get the amount of columns in the table
    const count = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys(this.temp[0]);
    // assign filtered matches to the active datatable
    this.rows = this.temp.filter(item => {
      // iterate through each row's column data
      for (let i = 0; i < count; i++) {
        // check for a match
        if (
          (item[keys[i]] &&
            item[keys[i]]
              .toString()
              .toLowerCase()
              .indexOf(value) !== -1) ||
          !value
        ) {
          // found match, return true to add to result set
          return true;
        }
      }
    });

    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  findAll() {
   this.httpClient.get('./assets/movies.json').subscribe(
      (data: any) => {
        // cache our list
        this.temp = data;

        // push our inital complete list
        this.rows = [...this.temp];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  getDataJson() {
    this.httpClient.get('./assets/movies.json').subscribe(
      (data: any) => {
        // cache our list
        this.temp = data;

        // push our inital complete list
        this.rows = [...this.temp];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}

function debounceTime(arg0: number): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}
