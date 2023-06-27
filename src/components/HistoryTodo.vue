<template>
    <div>
        <DataTable :value="todos" tableStyle="min-width: 50rem" stripedRows>
            <Column field="datetime" header="Date Time"></Column>
            <Column field="todo" header="TODO"></Column>
            <Column field="remark" header="Remark"></Column>
            <Column field="bintang" header="Bintang">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.bintang" readonly :cancel="false" />
                </template>
            </Column>
            <Column field="reviewer" header="Reviewer"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'   // optional
import Row from 'primevue/row'                   // optional
import Rating from 'primevue/rating'
import { ref } from 'vue'

// _variables
const todos = ref(
    [
        {
            datetime: '1 Jan 2023 12:00',
            todo: 'Learn ES6',
            remark: 'Hello World!',
            bintang: 4,
            reviewer: 'Citrahadi'
        },
        {
            datetime: '2 Jan 2023 08:00',
            todo: 'Learn Vue',
            remark: 'Hello World!',
            bintang: 1,
            reviewer: 'Citrahadi'
        }
    ]
)


</script>

<style scoped></style>