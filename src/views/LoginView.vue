<template>
    <div id="loginView">
        <form @submit="login">
            <div class="p-input-icon-left">
                <font-awesome-icon icon="user" />
                <InputText v-model="username" placeholder="Username" :class="{ 'p-invalid': usernameError }"
                    aria-describedby="text-error" />
            </div>
            <br>
            <small class="p-error" id="text-error">{{ usernameError || '&nbsp;' }}</small>
            <br>
            <br>
            <div class="p-input-icon-left">
                <font-awesome-icon icon="lock" />
                <InputText v-model="password" type="password" placeholder="Password" />
            </div>
            <br>
            <small class="p-error" id="text-error">{{ passwordError || '&nbsp;' }}</small>
            <br>
            <br>
            <Button style="width: 260px" type="submit" label="Submit" />
            <br>
        </form>
        <p>Belum punya akun ? Registrasi <router-link to="/daftar"> di sini</router-link></p>
    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { RouterLink, useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import { useAuthStore } from '../stores/AuthStore'

// _variables
const router = useRouter()
const { handleSubmit, resetForm } = useForm();
const { value: username, errorMessage: usernameError } = useField('username', required)
const { value: password, errorMessage: passwordError } = useField('password', required)
const authStore = useAuthStore()


// _functions
// - login
// - required


// required
function required(username) {

    if (!username) {
        return 'Username and password must be filled';
    }

    return true;
}

// login
const login = handleSubmit((values) => {
    console.log('login called')
    console.log(authStore.login(values.username, values.password).status)
    console.log(authStore.users)
    if (authStore.login(values.username, values.password).status) {
        router.push('/home')
    } else {
        console.log("gagal login")
    }

});


</script>

<style scoped>
#loginView {
    text-align: center;
}
</style>