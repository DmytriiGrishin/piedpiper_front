<template>
    <v-container
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-card-title>Вход</v-card-title>
                    <v-card-text>
                        <v-form v-model="isValid">
                            <v-alert outline color="error" icon="mdi-exclamation-thick" :value="isError">Неправильный логин или пароль</v-alert>
                            <v-text-field
                                    label="Login"
                                    name="login"
                                    prepend-icon="mdi-account"
                                    type="text"
                                    v-model="login"
                                    :rules="[v => !!v || 'Login is required']"
                                    required
                            ></v-text-field>

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                                    :rules="[v => !!v || 'Password is required']"
                                    required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="loginAction" :disabled="!isValid" >Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Login",
        data () {
            return {
                isValid: true,
                login: null,
                password: null,
                isError: false
            }
        },
        methods: {
            loginAction() {
                this.isError = false
                axios.post("api/login", {login: this.login, email: this.email})
                    .then((resp) => {
                        const token = resp.data.token
                        localStorage.setItem('user-token', token)
                        // Add the following line:
                        axios.defaults.headers.common['Authorization'] = token
                        this.$router.push("/candidates")
                    })
                .catch(() => {
                    this.isError = true;
                })
            }
        }
    }
</script>

<style scoped>

</style>