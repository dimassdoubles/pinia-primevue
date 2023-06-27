<template>
    <form @submit="submitRegistration">
        <div class="p-4">
            <h1>Registrasi User</h1>

            <!-- field input 
                - _email 
                - _name 
                - _password 
                - _gender 
                - _address 
                - _birthday 
                - _weight 
                - _height 
                - _termCondition 
                - _registerButton-->

            <div class="formgrid grid">
                <div class="field col">
                    <!-- _email -->
                    <label for="email">Email</label>
                    <InputText id="email" type="text" v-model="email"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                        :class="{ 'p-invalid': emailError }" aria-describedby="text-error" />
                    <br>
                    <small class="p-error" id="text-error">{{ emailError || '&nbsp;' }}</small>
                    <br>
                    <br>

                    <!-- _password -->
                    <label for="password">Password</label>
                    <InputText id="password" type="password" v-model="password"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                        :class="{ 'p-invalid': passwordError }" aria-describedby="text-error" />
                    <br>
                    <small class="p-error" id="text-error">{{ passwordError || '&nbsp;' }}</small>
                    <br>
                    <br>

                    <!-- _address -->
                    <label for="address">Address</label>
                    <Textarea rows="7" id="address" type="text" v-model="address"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                        :class="{ 'p-invalid': addressError }" aria-describedby="text-error" />
                    <br>
                    <small class="p-error" id="text-error">{{ addressError || '&nbsp;' }}</small>

                </div>
                <div class="field col">
                    <!-- _name -->
                    <label for="name">Name</label>
                    <InputText id="name" type="text" v-model="name"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                        :class="{ 'p-invalid': nameError }" aria-describedby="text-error" />
                    <br>
                    <small class="p-error" id="text-error">{{ nameError || '&nbsp;' }}</small>
                    <br>
                    <br>

                    <!-- _gender -->
                    <label for="gender">Gender</label>
                    <select id="state" v-model="gender"
                        class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary"
                        style="appearance: auto" :class="{ 'p-invalid': genderError }" aria-describedby="text-error">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <br>
                    <small class="p-error" id="text-error">{{ genderError || '&nbsp;' }}</small>
                    <br>
                    <br>

                    <!-- _birthday -->
                    <label for="birthday">birthday</label>
                    <Calendar class="w-full" v-model="birthday" showIcon :class="{ 'p-invalid': genderError }"
                        aria-describedby="text-error" />
                    <br>
                    <small class="p-error" id="text-error">{{ genderError || '&nbsp;' }}</small>

                    <br>
                    <br>
                    <div class="formgrid grid">
                        <div class="col-6">

                            <!-- _weight -->
                            <label for="weight">Weight (Kg)</label>
                            <InputText id="weight" type="number" v-model="weight"
                                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                                :class="{ 'p-invalid': weightError }" aria-describedby="text-error" />
                            <br>
                            <small class="p-error" id="text-error">{{ weightError || '&nbsp;' }}</small>

                        </div>

                        <div class="col-6">

                            <!-- _height -->
                            <label for="height">Height (Cm)</label>
                            <InputText id="height" type="number" v-model="height"
                                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                                :class="{ 'p-invalid': heightError }" aria-describedby="text-error" />
                            <br>
                            <small class="p-error" id="text-error">{{ heightError || '&nbsp;' }}</small>

                        </div>
                    </div>

                </div>
            </div>

            <!-- _termCondition -->
            <div class="text-center">
                <Checkbox v-model="termCondition" inputId="termCondition" name="termCondition"
                    :class="{ 'p-invalid': termConditionError }" binary aria-describedby="chbx-error" />
                <label for="termCondition" class="ml-2"> I Have read term on Condition </label>
                <br>
                <small class="p-error" id="chbx-error">{{ termConditionError || '&nbsp;' }}</small>
            </div>
            <br>
            <br>

            <!-- _registerButton -->
            <div class="text-center">
                <Button type="submit">Register</Button>
            </div>

        </div>
    </form>
</template>

<script setup>
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import InputText from 'primevue/inputtext'
import { useField, useForm } from 'vee-validate'
import { useAuthStore } from '../stores/AuthStore'
import { useRouter } from 'vue-router'

// _variables
const router = useRouter()
const { handleSubmit } = useForm()
const { value: email, errorMessage: emailError } = useField('email', required)
const { value: name, errorMessage: nameError } = useField('name', required)
const { value: password, errorMessage: passwordError } = useField('password', required)
const { value: gender, errorMessage: genderError } = useField('gender', required)
const { value: address, errorMessage: addressError } = useField('address', required)
const { value: birthday, errorMessage: birthdayError } = useField('birthday', required)
const { value: weight, errorMessage: weightError } = useField('weight', required)
const { value: height, errorMessage: heightError } = useField('height', required)
const { value: termCondition, errorMessage: termConditionError } = useField('termCondition', required)
const authStore = useAuthStore()

// _functions
// - required
// - submitRegistration

// required
function required(value) {
    console.log(value)

    if (!value) {
        return 'Field must be filled';
    }

    return true;
}

// submitRegistration
const submitRegistration = handleSubmit((values) => {
    authStore.register({
        username: values.email,
        name: values.name,
        password: values.password,
        address: values.password,
        gender: values.address,
        birthday: values.birthday,
        weight: values.weight,
        height: values.height,
    })
    router.push('/')
});


</script>

<style scoped></style>