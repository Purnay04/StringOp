import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CaseoperationsComponent } from './caseoperations/caseoperations.component';
import { CaseoperationsPostComponent } from './caseoperations-post/caseoperations-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseoperationsComponent,
    CaseoperationsPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
