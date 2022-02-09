import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomerSearch';
  customers: Customer[] = [
    {name: "John Hastings", gender: "Male", location: "New South Blue", country: "Australia", id: "995671"},
    {name: "Williamson", gender: "Male", location: "Peter Avenue", country: "New Zealand", id: "995672"},
    {name: "Quinton", gender: "Male", location: "Cape Town", country: "South Africa", id: "995673"},
    {name: "Joe", gender: "Male", location: "Church Street", country: "England", id: "995674"},
    {name: "Rohit", gender: "Male", location: "Mumbai", country: "India", id: "995675"}
  ]
  
}

export class Customer {  
  name : string;
  gender: string;
  location : string;  
  country : string;  
  id : string;  
} 