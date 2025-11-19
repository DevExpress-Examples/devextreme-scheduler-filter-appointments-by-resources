import React, { useCallback, useState } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import Scheduler, { Resource } from 'devextreme-react/scheduler';
import TagBox from 'devextreme-react/tag-box';

import { data, assignees as allAssignees, places } from './data';

const groups = ['assigneeId'];
const views = ['day'];

const currentDate = new Date('2021-04-26T10:00:00.000Z')
const defaultSelectedAssignees = allAssignees.map(item => item.id);

const App = () => {
    const [assignees, setAssignees] = useState(allAssignees);

    const onTagBoxValueChanged = useCallback((e) => {
        const selectedValues = allAssignees.filter((item) => e.value.includes(item.id));
        setAssignees(selectedValues)
    }, []);

    return (
        <div>
            <TagBox
                className='resources'
                dataSource={allAssignees}
                defaultValue={defaultSelectedAssignees}
                valueExpr='id'
                displayExpr='text'
                searchEnabled={true}
                showSelectionControls={true}
                onValueChanged={onTagBoxValueChanged}
            >
            </TagBox>
            <Scheduler
                timeZone='America/Los_Angeles'
                dataSource={data}
                views={views}
                currentView='day'
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
    )
}

export default App;