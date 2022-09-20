import React, { useCallback, useState } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import Scheduler from 'devextreme-react/scheduler';
import TagBox from 'devextreme-react/tag-box';

import { data, assignees, places } from './data';

const App = () => {
    const [schedulerAssignees, setSchedulerAssignees] = useState(assignees);

    const onTagBoxInit = useCallback((e) => {
        e.component.option('value', assignees.map(item => item.id))
    }, []);

    const onTagBoxValueChanged = useCallback((e) => {
        setSchedulerAssignees(e.component.option('selectedItems'));
    }, []);

    return (
        <div>
            <TagBox
                className='resources'
                dataSource={assignees}
                valueExpr='id'
                displayExpr='text'
                searchEnabled={true}
                showSelectionControls={true}
                onInitialized={onTagBoxInit}
                onValueChanged={onTagBoxValueChanged}
            >
            </TagBox>
            <Scheduler
                timeZone='America/Los_Angeles'
                dataSource={data}
                views={['day']}
                currentView='day'
                currentDate={new Date(2021, 3, 26)}
                startDayHour={9}
                endDayHour={19}
                groups={['assigneeId']}
                resources={[
                    {
                        fieldExpr: 'assigneeId',
                        dataSource: schedulerAssignees,
                        label: 'Assignee',
                    }, {
                        fieldExpr: 'placeId',
                        dataSource: places,
                        label: 'Place',
                        useColorAsDefault: true,
                    }]}
                height={600}
            >
            </Scheduler>
        </div>
    )
}

export default App;