import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DxSchedulerModule, DxTagBoxModule } from "devextreme-angular";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxSchedulerModule,
    DxTagBoxModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
