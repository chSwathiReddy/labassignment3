import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo3';
  companyData=[
    {"id":1101,"name":"HCL","address":"Noida"},
    {"id":1102,"name":"TCS","address":"Hyderabad"},
    {"id":1103,"name":"Wipro","address":"Banglore"},
  ];

  data(name: string){
    alert(`Data was ${name}`);
  }
  parentcust(ob :any){
    alert(`the customer name is ${ob.name},the customer age is ${ob.age},
    the customer id is ${ob.id},the customer address is ${ob.address}`)
    
  }
}
