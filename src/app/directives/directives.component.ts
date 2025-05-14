import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
ages:number[]=[10,25,44,34,65,76,54];

states:string[]=['Telangana','Andhrapradesh','Karnataka','Tamilnadu']

products:any[]=[
  {name:'pen',price:20,rating:2.6},
  {name:'book',price:200,rating:4.8},
  {name:'shoes',price:800,rating:4.5},
  {name:'shirt',price:900,rating:4.4},
  {name:'laptop',price:45000,rating:4.6},
  {name:'bike',price:200000,rating:4.2},
]

today:any = new Date();
}
