<script setup lang="ts">
import { ref } from 'vue';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxScheduler, DxResource } from 'devextreme-vue/scheduler';
import { DxTagBox, type DxTagBoxTypes } from 'devextreme-vue/tag-box';
import { data, assignees as allAssignees, places, type ResourceItem } from '../data';

const currentDate = new Date('2021-04-26T10:00:00.000Z');
const assignees = ref<ResourceItem[]>(allAssignees);
const defaultSelectedAssignees = allAssignees.map((item) => item.id);
const views = ['day'];
const groups = ['assigneeId'];

function onTagBoxValueChanged(e: DxTagBoxTypes.ValueChangedEvent): void {
  assignees.value = allAssignees.filter((item) => e.value.includes(item.id));
}
</script>

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
      @value-changed="onTagBoxValueChanged"
    />
    <DxScheduler
      time-zone="America/Los_Angeles"
      current-view="day"
      :data-source="data"
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

<style scoped>
.resources {
  margin-bottom: 15px;
}
</style>
