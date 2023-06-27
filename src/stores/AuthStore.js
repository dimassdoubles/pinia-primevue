import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        users: [
            {
                id: 1, 
                username: 'dimas',
                password: '12345', 
                address: 'Batan Miroto', 
                name: 'Dimas Saputro', 
                gender:'M', 
                birthday: '12042002', 
                weight: 65, 
                height: 158
            },
        ],
        currentUser: null
    }),
    actions: {
        login(username, password) {
            console.log('authStore login')
            const index = this.users.findIndex(item => item.username === username)

            if (index !== -1) {
                console.log('sampai sini')
                console.log('username ', username)
                console.log('password ', password)
                console.log(this.users[index].password)
                if (this.users[index].password === password) {
                    console.log('sampai sini')
                    this.currentUser = this.users[index]
                    console.log('hallo sampai')
                    return {
                        status: true,
                        user: this.users[index]
                    }
                }
            }

            return {
                status: false,
                user: null
            }
        },
        logout() {
            this.currentUser = null
        },
        register({username, name, password, gender, address, birthday, weight, height}) {
            const id = Math.floor(Date.now() / 1000)
            this.users.push({
                id: id,
                username: username,
                password: password,
                address: address,
                name: name,
                gender: gender,
                birthday: birthday,
                weight: weight,
                height: height,
            })
        }
    }
})