import Main from '@/components/main/main'

export default [
    {
        path: '/',
        name: '_home',
        redirect: '/index',
        component: Main,
        children: [
            {
                /*主页*/
                path: '/index',
                name: 'index',
                component: () => import('@/view/index/index.vue')
            }
        ]
    },
    {
        path: '/401',
        name: 'error_401',
        component: () => import('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        component: () => import('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        component: () => import('@/view/error-page/404.vue')
    }
]
