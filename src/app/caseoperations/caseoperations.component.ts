import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caseoperations',
  templateUrl: './caseoperations.component.html',
  styleUrls: ['./caseoperations.component.css']
})
export class CaseoperationsComponent implements OnInit {
  userinput:string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.userinput)
  }
  onClear(): void{
    this.userinput = ""
    console.log("cleared")
  }

}
