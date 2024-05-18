<template>
    <div class="file_upload">
        <input type="file" id="file_input" @change="handleFileUpload" style="display:none;" />
        <label for="file_input" class="upload_button">Upload File</label>
    </div>
</template>

<script>
import * as XLSX from 'xlsx';
// import { ref, onMounted } from "vue";

export default {
    data(){

    },
    methods: {
        async handleFileUpload(event) {
            const file = event.target.files[0];
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data);

            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            const filteredData = jsonData.map(entry => ({
                КАТО: entry.КАТО,
                Наименование: entry.Наименование,
                БИН: entry.БИН,
                Руководитель: entry.Руководитель,
                Адрес: entry.Адрес
            }));

            // console.log(filteredData);
            this.$store.commit('setData', filteredData);
        }
    }
}
</script>

<style lang="scss" scoped>
.file_upload {
  display: flex;
  justify-content: center;
  margin: 20px;

  .upload_button {
    padding: 10px 20px;
    background-color: var(--dark-blue);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1e3a5a;;
    }
  }

  input[type="file"] {
    display: none;
  }
}
</style>