<template>
    <div>
        <input type="file" @change="handleFileUpload" />
    </div>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
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

<style lang="scss" scoped></style>