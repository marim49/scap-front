<template>
    <div id="app">
        <navbar v-if="token"></navbar>
        <!-- Page container -->

        <div v-if="token">
            <div class="page-container">
                <!-- Page content -->
                <div class="page-content"
                    v-if="token">
                    <sidebar></sidebar>
                    <!-- Main content -->
                    <div class="content-wrapper">
                        <router-view/>
                    </div>
                    <!-- /main content -->
                </div>
                <div class="page-content"
                    v-else-if="teste">
                    <div class="content-wrapper">
                        <logar></logar>

                    </div>

                </div>
                <div class="page-content"
                    v-else-if="cadastro">
                    <div class="content-wrapper">
                        <cadastro></cadastro>
                    </div>

                </div>
                <!-- /page content -->

            </div>
        </div>

        <!-- oiii  -->
        <div class="login-container"
            v-if="token===null">
            <div class="page-container">
                <!-- Page content -->
                <div class="page-content"
                    v-if="token">
                    <sidebar></sidebar>
                    <!-- Main content -->
                    <div class="content-wrapper">
                        <router-view/>
                    </div>
                    <!-- /main content -->
                </div>
                <div class="page-content"
                    v-else-if="teste">
                    <div class="content-wrapper">
                        <logar></logar>

                    </div>

                </div>
                <div class="page-content"
                    v-else-if="cadastro">
                    <div class="content-wrapper">
                        <cadastro></cadastro>
                    </div>

                </div>
                <!-- /page content -->

            </div>
        </div>
        <spinner></spinner>

        <!-- /page container -->

        <!-- oiiii -->
    </div>

</template>

<script>
import navbar from '@/components/layout/Navbar'
import sidebar from '@/components/layout/Sidebar'
import spinner from '@/components/layout/Spinner'
import Logar from '@/views/acesso/logar'
import cadastro from '@/views/acesso/cadastrar'
import recupera from '@/views/acesso/recuperar'

import { mapState } from 'vuex'

export default {
    data() {
        return {

            teste: true,
            cadastro: false

        }
    },
    components: { navbar, sidebar, spinner, Logar, cadastro, recupera },
    computed: mapState(['token']),
}
</script>
