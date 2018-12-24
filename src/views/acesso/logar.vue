<template>
    
        <div class="content">

            <!-- Advanced login -->
            <form action="logar"
                method="post">
                <div class="login-form">
                    <div class="text-center">
                        <div class="icon-object border-warning-400 text-warning-400">
                            <i class="icon-users"></i>
                        </div>
                        <h5 class="content-group-lg">Logar
                            <small class="display-block">Já sou cadastrado</small>
                        </h5>
                    </div>

                    <div class="form-group has-feedback has-feedback-left">
                        <input type="text"
                            name="cpf"
                            v-model="cpf"
                            class="form-control input-lg"
                            placeholder="Digite seu CPF">
                        <div class="form-control-feedback">
                            <i class="icon-user text-mutecontffdsgfsfsdfsdd"></i>
                        </div>
                    </div>

                    <div class="form-group has-feedback has-feedback-left">
                        <input type="password"
                            name="password"
                            v-model="password"
                            class="form-control input-lg"
                            placeholder="Digite sua senha">
                        <div class="form-control-feedback">
                            <i class="icon-lock2 text-muted"></i>
                        </div>
                    </div>

                    <div class="form-group login-options">
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="checkbox-inline">
                                    <input type="checkbox"
                                        class="styled"
                                        checked="checked"> Manter conectado
                                </label>
                            </div>

                            <div class="col-sm-6 text-right">
                                <router-link to="/recuperar">Esqueceu a sua senha?</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <a type="submit"
                            class="btn bg-blue btn-block btn-lg"
                            @click="logar">Logar
                            <i class="icon-arrow-right14 position-right"></i>
                        </a>
                    </div>

                    <div class="content-divider text-muted form-group">
                        <span>ou entre usando</span>
                    </div>
                    <ul class="list-inline form-group list-inline-condensed text-center">
                        <li>
                            <a href="#"
                                class="btn border-indigo text-indigo btn-flat btn-icon btn-rounded">
                                <i class="icon-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="btn border-pink-300 text-pink-300 btn-flat btn-icon btn-rounded">
                                <i class="icon-google"></i>
                            </a>
                        </li>
                    </ul>

                    <div class="content-divider text-muted form-group">
                        <span>Não tem uma conta?</span>
                    </div>
                    <a class="btn bg-slate btn-block btn-lg content-group"
                        @click="cadastra">Cadastrar</a>
                    <span class="help-block text-center">Se continuar, você estará confirmando que você leu e aceitou os nossos
                        <a href="#">Termos e condições</a> e a nossa
                        <a href="#">Política de privacidade</a>
                    </span>
                </div>
            </form>
            <!-- /advanced login -->
        </div>
        <!-- /main content -->
    
</template>
<script>
import { mapActions } from 'vuex'
import axios from 'axios'


export default {

    data() {
        return {
            cpf: null,
            password: null,
            cadastrar: null,
        }


    },
    mounted() {
        let token = localStorage.getItem('token')
        if (token) {
            this.login(token)
        }
    },
    methods: {
        ...mapActions(['login']),
        async logar() {
            let { data } = await axios.post('/api/acesso/logar', { cpf: this.cpf, password: this.password })
            localStorage.setItem('token', data)
            this.login(data)
        },
        cadastra() {
            console.log('chamou')
            return this.cadastrar === 1
        }
    }
}
</script>

