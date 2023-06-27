<template>
    <!-- 
        content
        - _searchbar
        - _logout
        - _breadcrumb
        - _cardTodo
        - _cardHistoryTodo
        - _dialogAddTodo
     -->

    <div class="surface-ground">
        <div class="mx-6">
            <Menubar>
                <template #end>
                    <!-- _searchbar -->
                    <InputText v-model="searchKeyword" class="mr-4" placeholder="Search" type="text" />

                    <!-- _logout -->
                    <SplitButton :label="authStore.currentUser.name" icon="pi pi-user" :model="items" size="small" />
                </template>
            </Menubar>
            <br>
            <br>

            <div class="card flex">
                <!-- _breadcrumb -->
                <Breadcrumb :home="home" :model="breadcrumbItems" />
            </div>
            <br>
            <br>

            <!-- _cardTodo -->
            <Card>
                <template #title> TODO </template>
                <template #content>
                    <div v-for="task in taskStore.getTaskList(authStore.currentUser.id, searchKeyword)" :key="task.id">
                        <div class="field-checkbox">
                            <Checkbox @click="check(task.id, task.status)" v-model="task.status" inputId="task.id"
                                name="task.id" :binary="true" />
                            <label for="ingredient1" class="ml-2 inline-block w-full"> {{ task.title }} </label>
                            <div class="text-right w-full">{{ epochToDatetime(task.doneAt) }}</div>
                        </div>
                    </div>
                    <br>
                    <br>
                    <Button @click="visible = true">Tambah Todo</Button>
                </template>
            </Card>
            <br>
            <br>

            <!-- _cardHistoryTodo -->
            <Card>
                <template #title> History TODO </template>
                <template #content>
                    <HistoryTodo />
                </template>
            </Card>
        </div>
        <br>
        <br>

        <!-- _dialogAddTodo -->
        <div class="card flex justify-content-center">
            <Dialog v-model:visible="visible" modal header="ADD TODO" :style="{ width: '50vw' }">
                <div class="field">
                    <label for="title">Title</label>
                    <input id="title" type="text" v-model="title"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
                </div>
                <div class="field">
                    <label for="dueDate">Due Date</label>
                    <Calendar v-model="dueDate" class="w-full" showIcon />
                </div>
                <div class="field">
                    <label for="estimateMin">Estimate Min</label>
                    <input id="estimateMin" type="number"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
                </div>
                <template #footer>
                    <div class="text-center">
                        <Button label="Add" @click="addTodo()" autofocus />
                    </div>
                </template>
            </Dialog>
        </div>
    </div>
</template>

<script setup>
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import SplitButton from 'primevue/splitbutton'
import { useRouter } from 'vue-router'
import Breadcrumb from 'primevue/breadcrumb'
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import HistoryTodo from '../components/HistoryTodo.vue'
import Dialog from 'primevue/dialog'
import Calendar from 'primevue/calendar'
import { useAuthStore } from '../stores/AuthStore'
import { useTaskStore } from '../stores/TaskStore'


// _variables
const home = ref({
    icon: 'pi pi-home',
    to: '/home',
});
const breadcrumbItems = ref([
    { label: 'Learn App' },
    { label: 'Dashboard' },
]);
const router = useRouter()
const items = [
    {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
            router.push('/')
        }
    },
]
const visible = ref(false)
const authStore = useAuthStore()
const taskStore = useTaskStore()
const title = ref()
const dueDate = ref()
const estimateMin = ref()
const searchKeyword = ref('')


// _functions
// - addTodo
// - check
// - epochToDatetime

// addTodo
function addTodo() {
    taskStore.add({
        title: title.value,
        dueDate: dueDate.value,
        estimateMin: estimateMin.value,
        userId: authStore.currentUser.id,
    })
    title.value = ''
    dueDate.value = ''
    estimateMin.value = ''
    visible.value = false
}

// check
function check(taskId, taskStatus) {
    console.log("check dipanggil")
    console.log("taskId: ", taskId)
    console.log("taskStatus: ", taskStatus)

    console.log(taskStore.tasks)


    // status true => aksi uncheck
    if (taskStatus) {
        console.log("uncheck")
        taskStore.uncheck(taskId)
    } else {
        console.log("check")
        taskStore.check(taskId)
    }
}

// epochToDatetime
function epochToDatetime(epoch) {
    console.log("epochToDatetime dipanggil")
    console.log("epoch: ", epoch)

    if (epoch != null) {
        console.log(epoch)
        const date = new Date(epoch * 1000)
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }
        var formattedTime = date.toLocaleString('id-ID', options)
        formattedTime = formattedTime.replace('pukul', '')

        console.log(formattedTime)
        return 'at ' + formattedTime
    } return ''
}


</script>

<style scoped></style>