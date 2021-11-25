import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatQCMComponent } from './creat-qcm/creat-qcm.component';
import { TestQCMComponent } from './test-qcm/test-qcm.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatQCMComponent,
    TestQCMComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
