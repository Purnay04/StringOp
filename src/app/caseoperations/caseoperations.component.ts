import { Component, OnInit } from '@angular/core';
import { StringopRestapiService } from '../stringop-restapi.service';

@Component({
  selector: 'app-caseoperations',
  templateUrl: './caseoperations.component.html',
  styleUrls: ['./caseoperations.component.css']
})
export class CaseoperationsComponent implements OnInit {
  input_string:string = ""
  result:string = ""
  constructor(private stringoprequest:StringopRestapiService) { }

  ngOnInit(): void {
  }

  onSubmit(flag:string): void{
    if(flag == "lower"){
      this.stringoprequest.makeLowercase(this.input_string).subscribe((response:string) =>{
        this.result = response
      })
    }
    else if(flag == "upper"){
      this.stringoprequest.makeUppercase(this.input_string).subscribe((response:string) =>{
        this.result = response
      })
    }
  }
  onClear(flag:string): void{   
    this.input_string = ""
    this.result = ""
  }
}
