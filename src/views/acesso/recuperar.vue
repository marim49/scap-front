<template>
    <div>
        <div class="content">
            <!-- Password recovery -->
            <form action="index.html">
                <div class="panel panel-body login-form">
                    <div class="text-center">
                        <div class="icon-object border-warning text-warning">
                            <i class="icon-spinner11"></i>
                        </div>
                        <h5 class="content-group">Recuperar senha
                            <small class="display-block">Para alterar sua senha, digite seu email ou CPF a seguir e lhe enviaremos um email com instruções para criação de uma nova senha.
                            </small>
                        </h5>
                    </div>

                    <div class="form-group has-feedback">
                        <input type="email"
                            class="form-control"
                            placeholder="Digite seu email ou CPF">
                        <div class="form-control-feedback">
                            <i class="icon-mail5 text-muted"></i>
                        </div>
                    </div>
                    <button type="submit"
                        class="btn bg-blue btn-block">Recuperar senha
                        <i class="icon-arrow-right14 position-right"></i>
                    </button>
                    <button type="submit"
                        class="btn btn-default btn-block">Cancelar</button>
                </div>
            </form>
            <!-- /password recovery -->
        </div>
    </div>
</template>