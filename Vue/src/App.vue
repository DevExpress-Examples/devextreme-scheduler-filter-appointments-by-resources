<template>
  <div>
    <DxTagBox
        class="resources"
        :data-source="assignees"
        value-expr="id"
        display-expr="text"
        :search-enabled="true"
        :show-selection-controls="true"
        :on-initialized="onTagBoxInit"
        :on-value-changed="onTagBoxValueChanged"
    >
    </DxTagBox>
    <DxScheduler
        timeZone="America/Los_Angeles"
        current-view="day"
        :data-source="dataSource"
        :current-date="currentDate"
        :resources="schedulerResources"
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
      currentDate: new Date(2021, 3, 26),
      dataSource: data,
      assignees: assignees,
      schedulerAssignees: assignees,
      groups: ['assigneeId'],
    };
  },
  methods: {
    onTagBoxInit: function (e) {
      e.component.option('value', assignees.map(item => item.id))
    },
    onTagBoxValueChanged: function (e) {
      this.schedulerAssignees = (e.component.option('selectedItems'));
    }
  },
  computed: {
    schedulerResources: {
      get() {
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
      },
    }
  }
};
</script>
