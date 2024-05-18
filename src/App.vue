<script setup>
import HandleFileUpload from '@/components/HandleFileUpload.vue';
import TableData from '@/components/TableData.vue'

// import { computed } from 'vue';
// import { useStore } from 'vuex';


// const store = useStore();

// const tableData = computed(() => store.state.tableData);
</script>

<template>
  <HandleFileUpload></HandleFileUpload>
  <TableData></TableData>
<!-- <div>
      <thead>
        <tr>
          <th>КАТО</th>
          <th>Наименование</th>
          <th>БИН</th>
          <th>Руководитель</th>
          <th>Адрес</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.КАТО">
          <td>{{ item.КАТО }}</td>
          <td>{{ item.Наименование }}</td>
          <td>{{ item.БИН }}</td>
          <td>{{ item.Руководитель }}</td>
          <td>{{ item.Адрес }}</td>
        </tr>
      </tbody>
</div> -->

</template>

<style scoped>
</style>
