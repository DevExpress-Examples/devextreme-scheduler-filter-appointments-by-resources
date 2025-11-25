import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';
import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSchedulerModule,
    DxTagBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
