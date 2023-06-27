import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks : [
            {
                id: 1, 
                status: false, 
                userId: 1, 
                title: 'Learn ES 6', 
                estimateMin: 120, 
                createdAt: 1687753090, 
                dueDate:1687839490, 
                doneAt:null
            }
        ]
    }),
    actions: {

        // _functions
        // - add
        // - check
        // - uncheck
        // - getTaskList
        
        add({title, dueDate, estimateMin, userId}) {
            const currentEpoch = Math.floor(Date.now() / 1000)
            this.tasks.push({
                id: currentEpoch,
                status: false,
                userId: userId,
                title: title,
                estimateMin: estimateMin,
                createdAt: currentEpoch,
                dueDate: dueDate,
                doneAt: null,
            })
        },

        check(taskId) {
            const currentEpoch = Math.floor(Date.now() / 1000)

            const index = this.tasks.findIndex(item => item.id === taskId)

            if (index !== -1) {
                this.tasks[index].doneAt = currentEpoch
            }

        },

        uncheck(taskId) {
            const index = this.tasks.findIndex(item => item.id === taskId)

            if (index !== -1) {
                this.tasks[index].doneAt = null
            }

        },

        getTaskList(userId, searchKeyword) {
            return this.tasks.filter((item) => item.userId === userId).filter((item) => item.title.toLowerCase().includes(searchKeyword.toLowerCase()))
        }


    }
})
