import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Scheduler, { Resource, type SchedulerTypes } from 'devextreme-react/scheduler';
import TagBox, { type TagBoxTypes } from 'devextreme-react/tag-box';
import {
  data, assignees as allAssignees, places, type ResourceItem,
} from './data';

const groups = ['assigneeId'];
const views: SchedulerTypes.ViewType[] = ['day'];
const currentDate = new Date('2021-04-26T10:00:00.000Z');
const defaultSelectedAssignees = allAssignees.map((item) => item.id);

function App(): JSX.Element {
  const [assignees, setAssignees] = useState<ResourceItem[]>(allAssignees);

  const onTagBoxValueChanged = useCallback((e: TagBoxTypes.ValueChangedEvent): void => {
    const selectedValues = allAssignees.filter((item) => e.value.includes(item.id));
    setAssignees(selectedValues);
  }, []);

  return (
    <div className="main">
      <TagBox
        className="resources"
        dataSource={allAssignees}
        defaultValue={defaultSelectedAssignees}
        valueExpr="id"
        displayExpr="text"
        searchEnabled={true}
        showSelectionControls={true}
        onValueChanged={onTagBoxValueChanged}
      />
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        currentView="day"
        currentDate={currentDate}
        startDayHour={9}
        endDayHour={19}
        groups={groups}
        height={600}
      >
        <Resource
          dataSource={assignees}
          fieldExpr="assigneeId"
          label="Assignee"
        />
        <Resource
          dataSource={places}
          fieldExpr="placeId"
          label="Place"
          useColorAsDefault={true}
        />
      </Scheduler>
    </div>
  );
}

export default App;
