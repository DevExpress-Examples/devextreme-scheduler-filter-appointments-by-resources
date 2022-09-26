import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule, DxTagBoxModule } from 'devextreme-angular';
import { data, assignees, places, IResource } from './data';
import { OptionChangedEvent } from 'devextreme/ui/tag_box';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  dataSource = data;

  currentDate: Date = new Date('2021-04-26T10:00:00.000Z');

  assignees = assignees;

  defaultSelectedAssignees = assignees.map(item => item.id);

  views = ['day'];

  groups = ['assigneeId'];

  resources = [
      {
        fieldExpr: 'assigneeId',
        dataSource: assignees,
        label: 'Assignee',
      }, {
        fieldExpr: 'placeId',
        dataSource: places,
        label: 'Place',
        useColorAsDefault: true,
      }
    ];

  onTagBoxValueChanged(e: OptionChangedEvent) {
    const selectedValues = assignees.filter((item) => e.value.includes(item.id));
    this.resources = [
      {
        fieldExpr: 'assigneeId',
        dataSource: selectedValues,
        label: 'Assignee',
      }, {
        fieldExpr: 'placeId',
        dataSource: places,
        label: 'Place',
        useColorAsDefault: true,
      }
    ];
  }
}

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

platformBrowserDynamic().bootstrapModule(AppModule);
