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

                this.$store.commit('setData', jsonData);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>