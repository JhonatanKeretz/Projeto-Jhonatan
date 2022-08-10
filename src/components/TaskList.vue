<!-- <template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nome da Ação</th>
        
          <th class="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="text-left"
          style="cursor: pointer"
          v-for="(task, index) in tasks"
          :key="index"
          @click="goTo(`/tasks/${task._id}`)"
        >
          {{
            index + 1
          }}
          {{
            task.title
          }}
          |
          {{
            task.priority
          }}
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
-->

<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <td class="text-left">
            Ação
          </td>
          
          <td class="text-left">
            Dependência
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          class="text-left"
          style="cursor: pointer"
          v-for="(task, index) in tasks"
          :key="index"
          @click="goTo(`/tasks/${task._id}`)"
        > 
        
          <td>       
          {{ task.title }}  
          </td>
          
          <td>
           {{ task.priority }}
          </td>
          <v-divider></v-divider>
          </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskService";
import { defineComponent } from "vue";
import { RawLocation } from "vue-router";

export default defineComponent({
  data() {
    return {
      tasks: [{}] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks = res.data;
    },
    goTo(route: RawLocation) {
      this.$router.push(route);
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>

<style></style>
