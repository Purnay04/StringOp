import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringopRestapiService {
  apiURL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  makeUppercase(inputed_string:string): any{
    return this.http.get(this.apiURL+'/doUppercase?string='+inputed_string, {'responseType': 'text'})
  }
  makeLowercase(inputed_string:string): any{
    return this.http.get(this.apiURL+'/doLowercase?string='+inputed_string, {'responseType': 'text'})
  }

  makeUppercasePost(inputed_string:JSON): any{
    return this.http.post(this.apiURL+'/doUppercasePOST',inputed_string,{responseType: 'text'})
  }

  makeLowercasePost(inputed_string:JSON): any{
    return this.http.post(this.apiURL+'/doLowercasePOST',inputed_string,{responseType: 'text'})
  }
}
