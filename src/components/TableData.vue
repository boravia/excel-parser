<template>
  <div class="data_table">
    <table>
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
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const tableData = computed(() => store.state.tableData);

</script>

<style lang="scss" scoped>
.data_table {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  table {
    width: 80%;
    border-collapse: collapse;
    margin: 10px 0;

    th,
    td {
      padding: 5px;
      border: 1px solid var(--light-gray);
      text-align: left;
    }

    th {
      background-color: var(--light-blue);
    }

    tbody tr:nth-child(odd) {
      background-color: var(--light-gray);
    }

    tbody tr:nth-child(even) {
      background-color: white;
      color: black;
    }
  }
}
</style>