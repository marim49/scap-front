<template>
    <div>
        <div class="content">
            <form action="cadastrar"
                method="post">
                <div class="panel panel-body login-form">
                    <div class="text-center">
                        <div class="icon-object border-warning text-warning">
                            <i class="icon-user-plus"></i>
                        </div>
                        <h5 class="content-group">Criar conta
                            <small class="display-block">Preencha todos os campos</small>
                        </h5>
                    </div>

                    <div class="content-divider text-muted form-group">
                        <span>Seus dados</span>
                    </div>

                    <span class="display-block text-muted"> Nome: </span>
                    <div class="form-group has-feedback has-feedback-left">
                        <input type="text"
                            name="name"
                            v-model="name"
                            class="form-control"
                            placeholder="Digite seu primeiro nome">
                        <div class="form-control-feedback">
                            <i class="icon-user-check text-muted"></i>
                        </div>
                    </div>

                    <span class="display-block text-muted"> CPF: </span>
                    <div class="form-group has-feedback has-feedback-left">
                        <input type="text"
                            name="cpf"
                            v-model="cpf"
                            class="form-control"
                            placeholder="Digite seu CPF">
                        <div class="form-control-feedback">
                            <i class="icon-vcard text-muted"></i>
                        </div>
                    </div>

                    <span class="display-block text-muted"> Endereço: </span>
                    <div class="form-group has-feedback has-feedback-left">
                        <input type="text"
                            name="address"
                            v-model="address"
                            class="form-control"
                            placeholder="Digite seu endereço">
                        <div class="form-control-feedback">
                            <i class="icon-location4 text-muted"></i>
                        </div>
                    </div>

                    <span class="display-block text-muted"> Cargo: </span>
                    <div class="form-group has-feedback has-feedback-left">
                        <input type="text"
                            name="occupation"
                            v-model="occupation"
                            class="form-control"
                            placeholder="Digite seu cargo">
                        <div class="form-control-feedback">
                            <i class=" icon-user-tie text-muted"></i>
                        </div>
                    </div>

                    <div class="content-divider text-muted form-group">
                        <span>Suas credênciais</span>
                    </div>

                    <div class="form-group has-feedback has-feedback-left">
                        <input type="text"
                            name="email"
                            v-model="email"
                            class="form-control"
                            placeholder="Digite seu email">
                        <div class="form-control-feedback">
                            <i class="icon-mention text-muted"></i>
                        </div>
                    </div>

                    <div class="form-group has-feedback has-feedback-left">
                        <input type="text"
                            id="email2"
                            class="form-control"
                            placeholder="Digite seu email novamente">
                        <div class="form-control-feedback">
                            <i class="icon-mention text-muted"></i>
                        </div>
                    </div>

                    <div class="form-group has-feedback has-feedback-left">
                        <input type="password"
                            name="password"
                            v-model="password"
                            class="form-control"
                            placeholder="Crie uma senha">
                        <div class="form-control-feedback">
                            <i class="icon-user-lock text-muted"></i>
                        </div>
                    </div>

                    <div class="form-group has-feedback has-feedback-left">
                        <input type="password"
                            class="form-control"
                            placeholder="Digite sua senha novamente">
                        <div class="form-control-feedback">
                            <i class="icon-user-lock text-muted"></i>
                        </div>
                    </div>

                    <div class="content-divider text-muted form-group">
                        <span>Concordar</span>
                    </div>

                    <div class="form-group">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox"
                                    class="styled"> Eu aceito a
                                <a href="#">Política de prívacidade</a>
                            </label>
                        </div>

                        <div class="checkbox">
                            <label>
                                <input type="checkbox"
                                    class="styled"> Eu aceito os
                                <a href="#">Termos e condições</a>
                            </label>
                        </div>
                    </div>

                    <a type="submit"
                        @click="cadastra"
                        class="btn bg-teal btn-block btn-lg">Criar conta
                        <i class="icon-circle-right2 position-right"></i>
                    </a>
                </div>
            </form>

        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            cpf: null,
            password: null,
            address: null,
            occupation: null,
            email: null,
            name: null,
        }
    },
    methods: {
        cadastra() {
            console.log('oi')
            axios.post('/api/acesso/cadastrar', {
                name: this.name, 
                cpf: this.cpf, 
                address: this.address,
                occupation: this.occupation,
                email: this.email,
                password: this.password,

            })
        }
    }
}
</script>

