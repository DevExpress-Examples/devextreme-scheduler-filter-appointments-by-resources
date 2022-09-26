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

  schedulerAssignees = assignees;

  views = ['day'];

  groups = ['assigneeId'];

  get schedulerResources() {
    return [
      {
        fieldExpr: 'assigneeId',
        dataSource: this.schedulerAssignees,
        label: 'Assignee',
      }, {
        fieldExpr: 'placeId',
        dataSource: places,
        label: 'Place',
        useColorAsDefault: true,
      }
    ]
  }

  onTagBoxInit(e: OptionChangedEvent) {
    e.component.option('value', assignees.map(item => item.id))
  }

  onTagBoxValueChanged(e: OptionChangedEvent) {
    this.schedulerAssignees = e.component.option('selectedItems') as IResource[];
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
