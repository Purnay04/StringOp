import { Component, OnInit } from '@angular/core';
import { StringopRestapiService } from '../stringop-restapi.service';

@Component({
  selector: 'app-caseoperations-post',
  templateUrl: './caseoperations-post.component.html',
  styleUrls: ['./caseoperations-post.component.css']
})
export class CaseoperationsPostComponent implements OnInit {
  input_string:string = ""
  result:string = ""
  ERROR:string = ""
  constructor(private stringoprequest:StringopRestapiService) { }
  ngOnInit(): void {
  }

  onSubmit(flag:string): void{
    if(flag == "lower"){
      console.log(this.input_string)
      try{
        this.ERROR = ""
        this.result = ""
        var json_formated = JSON.parse(this.input_string)
        this.stringoprequest.makeLowercasePost(JSON.parse(this.input_string)).subscribe((response:any) => {
          this.result = response;
        },
        (error: any) => {
          console.log(error)
          this.ERROR = error
        })
      }catch(error: any){
        console.log(error.toString())
        this.ERROR = error.toString()
      }
    }
    else if(flag == "upper"){
      console.log(this.input_string)
      try{
        this.ERROR = ""
        this.result = ""
        var json_formated = JSON.parse(this.input_string)
        this.stringoprequest.makeUppercasePost(json_formated).subscribe((response:any) => {
          this.result = response;
        },
        (error: any) => {
          console.log(error)
          
        })
      }catch(error:any){
        console.log(error.toString())
        this.ERROR = error.toString()
      }
    }
  }
  onClear(flag:string): void{
    this.input_string = ""
    this.result = ""
    this.ERROR = "" 
  }
}
