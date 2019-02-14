import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function filterPfPj(to, from, next) {
    let tipo = to.params.tipo.toUpperCase()
    if (tipo !== 'PF' && tipo !== 'PJ') {
        next('404')
    }
    next()
}

export default new Router({
    routes: [
        
        {
            path: '/',
            component: require('@/views/Inicio').default,
        },
        {
            path: '/disciplinas',
            component: require('@/views/disciplina/Index').default,
        },
        {
            path: '/ensalamento',
            component: require('@/views/ensalamento/Index').default,
        },
        {
            path: '/professores',
            component: require('@/views/professor/Index').default,
        },
        {
            path: '/salas',
            component: require('@/views/sala/Index').default,
        },
        {
            path: '/turmas',
            component: require('@/views/turma/Index').default,
        },  
        {
            path: '/cadastro/disciplina',
            component: require('@/views/disciplina/Novo').default
        }, 

    ],
})
