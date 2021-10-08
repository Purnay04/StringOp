import { Component, OnInit } from '@angular/core';
import { StringopRestapiService } from '../stringop-restapi.service';

@Component({
  selector: 'app-caseoperations',
  templateUrl: './caseoperations.component.html',
  styleUrls: ['./caseoperations.component.css']
})
export class CaseoperationsComponent implements OnInit {
  lower_userinput:string = ""
  upper_userinput:string = ""
  lower_result:string = ""
  upper_result:string = ""
  constructor(private stringoprequest:StringopRestapiService) { }

  ngOnInit(): void {
  }

  onSubmit(flag:string): void{
    if(flag == "lower"){
      this.stringoprequest.makeUppercase(this.lower_userinput).subscribe((response:string) =>{
        this.lower_result = response
      })
    }
    else{
      this.stringoprequest.makeLowercase(this.upper_userinput).subscribe((response:string) =>{
        this.upper_result = response
      })
    }
  }
  onClear(flag:string): void{
    if(flag == "lower"){
      this.lower_userinput = ""
      this.lower_result = ""
      console.log("lower cleared")
    }
    else{
      this.upper_userinput = ""
      this.upper_result = ""
      console.log("upper cleared")
    }
  }
}
