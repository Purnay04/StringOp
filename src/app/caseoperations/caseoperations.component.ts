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
    else if(flag == "lower_post"){
      this.stringoprequest.makeLowercasePost(this.input_string).subscribe((response:any) => {
        console.log(response+typeof response)
        this.result = response;
      },
      (error: any) => {
        console.log(error)
      })
    }
    else if(flag == "upper_post"){
      this.stringoprequest.makeUppercasePost(this.input_string).subscribe((response:any) => {
        console.log(response+typeof response)
        this.result = response;
      },
      (error: any) => {
        console.log(error)
      })
    }
  }
  onClear(flag:string): void{
    this.input_string = ""
    this.result = ""
  }
}
