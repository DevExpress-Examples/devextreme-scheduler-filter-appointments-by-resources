<template>
  <div>
    <DxTagBox
        class="resources"
        :data-source="allAssignees"
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
        :height="600"
        :start-day-hour="9"
        :end-day-hour="19"
        :groups="groups"
        :views="views"
    >
      <DxResource
          :data-source="assignees"
          field-expr="assigneeId"
          label="Assignee"
      />
      <DxResource
          :data-source="places"
          :use-color-as-default="true"
          field-expr="placeId"
          label="Place"
      />
    </DxScheduler>
  </div>
</template>

<script>
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { DxScheduler, DxResource } from 'devextreme-vue/scheduler';
import { DxTagBox } from 'devextreme-vue/tag-box';
import { data, assignees as allAssignees, places } from './data.js';
import './style.css';

export default {
  name: 'App',
  components: {
    DxScheduler,
    DxResource,
    DxTagBox,
  },
  data() {
    return {
      currentDate: new Date('2021-04-26T10:00:00.000Z'),
      dataSource: data,
      defaultSelectedAssignees: allAssignees.map(item => item.id),
      groups: ['assigneeId'],
      assignees: allAssignees,
      allAssignees: allAssignees,
      places: places,
      views: ['day'],
    };
  },
  methods: {
    onTagBoxValueChanged: function (e) {
      this.assignees = allAssignees.filter((item) => e.value.includes(item.id));
    }
  },
};
</script>
