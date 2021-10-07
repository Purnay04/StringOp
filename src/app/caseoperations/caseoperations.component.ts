import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caseoperations',
  templateUrl: './caseoperations.component.html',
  styleUrls: ['./caseoperations.component.css']
})
export class CaseoperationsComponent implements OnInit {
  userinput:string = ""
  result:string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.result = this.userinput;
    console.log(this.userinput)
  }
  onClear(): void{
    this.userinput = ""
    this.result = ""
    console.log("cleared")
  }
}
