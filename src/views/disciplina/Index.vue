<template>
<div>
    <page-header>
        <span class="text-semibold">Disciplinas</span>
        <div slot="heading-elements"
            class="heading-btn-group">
            <router-link to="/cadastro/disciplina"
                class="btn btn-primary">
                <i class="icon-books position-left"></i>
                <span>Cadastrar disciplina</span>
            </router-link>
        </div>
    </page-header>
    <div class="content">
        <div class="panel panel-flat">
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="linha in tabela"
                                :key="linha.id">
                                <td>{{ linha.id }}</td>
                                <td>{{ linha.nome }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import PNotify from 'pnotify/dist/es/PNotify'

export default {
    data() {
        return {
            tabela: []
        }
    },
    async created() {
        try {
            this.showLoading()
            let { data } = await axios.get('/api/cadastro/disciplina')
            this.tabela = data
        } catch (err) {
            PNotify.error('Erro ao obter dados do servidor. Tente novamente mais tarde.')
        } finally {
            this.hideLoading()
        }
    }
}
</script>
