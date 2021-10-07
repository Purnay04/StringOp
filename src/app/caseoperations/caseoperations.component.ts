import { Component, OnInit } from '@angular/core';
import { StringopRestapiService } from '../stringop-restapi.service';

@Component({
  selector: 'app-caseoperations',
  templateUrl: './caseoperations.component.html',
  styleUrls: ['./caseoperations.component.css']
})
export class CaseoperationsComponent implements OnInit {
  userinput:string = ""
  result:string = ""
  constructor(private stringoprequest:StringopRestapiService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.stringoprequest.makeUppercase(this.userinput).subscribe((response:string) =>{
      this.result = response
    })
  }
  onClear(): void{
    this.userinput = ""
    this.result = ""
    console.log("cleared")
  }
}
