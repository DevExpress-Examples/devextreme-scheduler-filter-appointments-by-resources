<template>
  <div>
    <DxTagBox
        class="resources"
        :data-source="assignees"
        :value="defaultSelectedAssignees"
        value-expr="id"
        display-expr="text"
        :search-enabled="true"
        :show-selection-controls="true"
        :on-value-changed="onTagBoxValueChanged"
    >
    </DxTagBox>
    <DxScheduler
        timeZone="America/Los_Angeles"
        current-view="day"
        :data-source="dataSource"
        :current-date="currentDate"
        :resources="resources"
        :height="600"
        :start-day-hour="9"
        :end-day-hour="19"
        :groups="groups"
    >
    </DxScheduler>
  </div>
</template>

<script>
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxScheduler } from 'devextreme-vue/scheduler';
import { DxTagBox } from 'devextreme-vue/tag-box';
import { data, assignees, places } from './data.js';
import './style.css';

export default {
  name: 'App',
  components: {
    DxScheduler,
    DxTagBox,
  },
  data() {
    return {
      currentDate: new Date('2021-04-26T10:00:00.000Z'),
      dataSource: data,
      assignees: assignees,
      defaultSelectedAssignees: assignees.map(item => item.id),
      groups: ['assigneeId'],
      resources: [
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
      ]
    };
  },
  methods: {
    onTagBoxValueChanged: function (e) {
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
  },
};
</script>
