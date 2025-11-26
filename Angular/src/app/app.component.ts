import { Component } from '@angular/core';
import { type DxTagBoxTypes } from 'devextreme-angular/ui/tag-box';
import { DxSchedulerTypes } from 'devextreme-angular/ui/scheduler';
import { AppService, type Resource } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})
export class AppComponent {
  dataSource: DxSchedulerTypes.Appointment[];

  currentDate: Date = new Date('2021-04-26T10:00:00.000Z');

  assignees: Resource[];

  places: Resource[];

  allAssignees: Resource[];

  defaultSelectedAssignees: number[];

  views = ['day'];

  groups = ['assigneeId'];

  constructor(private readonly service: AppService) {
    this.dataSource = service.getAppointments();
    this.assignees = service.getAssignees();
    this.allAssignees = service.getAssignees();
    this.places = service.getPlaces();
    this.defaultSelectedAssignees = this.allAssignees.map((item) => item.id);
  }

  onTagBoxValueChanged(e: DxTagBoxTypes.ValueChangedEvent): void {
    this.assignees = this.allAssignees.filter((item) => e.value.includes(item.id));
  }
}
