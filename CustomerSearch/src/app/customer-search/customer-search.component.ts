import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../app.component';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {

  @Input() customers: Customer[];
  searchPipe: any = '';
  searchWord: any = '';
  constructor() { }

  ngOnInit(): void {
  }

}
