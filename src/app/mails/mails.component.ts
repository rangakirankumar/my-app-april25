import { Component } from '@angular/core';
import { MailingService } from '../mailing.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent {
  mailings:any=[];

  constructor(private _MailingService:MailingService){
   _MailingService.get().subscribe((data:any)=>{
    console.log (data);
    this.mailings=data;
    console.log (this._MailingService);
   },(error:any)=>{
    alert("Internal server Error!");
  
  
   
  })}
    
}
    

