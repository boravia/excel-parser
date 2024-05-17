<script setup>
import HandleFileUpload from '@/components/HandleFileUpload.vue';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

</script>

<template>
  <HandleFileUpload></HandleFileUpload>
  <DataTable>
    <thead>
      <tr>
        <th>КАТО</th>
        <th>Наименование</th>
        <th>БИН</th>
        <th>Руководитель</th>
        <th>Адрес</th>
      </tr>
    </thead>
  </DataTable>
</template>

<style scoped>

</style>
