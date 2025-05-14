import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent{

 y:any=[

 ];
  constructor(private _yService:ServiceService){
  _yService.gety().subscribe((data:any)=>{
      console.log(data);
      this.y=data;
      console.log(this._yService);
},(error:any)=>{
  alert("Internal Sever Error!")


  
  
}
)
  }
  keywords:any='';
  search(){
    this._yService.filteredY(this.keywords).subscribe(
      (data:any)=>{
        console.log(data);
        this.y=data
      },(err:any)=>{
        alert("Internal Sever Error!")
      }
      )
    
  }
  column:any='';
  order:any='';
  sort(){
    this._yService.sortedY(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.y=data
      },(err:any)=>{
        alert("Internal Sever Error!")
      }
    )
  }
  // pagination
  limit:number=0;
  page:number=0;
  pagination(){
    this._yService.paginatedY(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.y=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  



}
