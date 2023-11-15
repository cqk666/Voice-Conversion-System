//引入VueRouter
import VueRouter from 'vue-router'

//引入路由组件
import Login from '../views/Login'
import Register from '../views/Register'
import Index from '../views/Index'
import Submit from '../views/Submit'
import Data from '../views/Data'
import Url from '../views/Url'
import Online from '../views/Online'
import Upload from '../views/Upload'
import Test from '../views/test'

export default new VueRouter({
    routes: [
        { path: '/', component: Login, name: 'Login' },
        { path: '/register', component: Register, name: 'Register' },
        { path: '/index', component: Index, name: 'Index' },
        { path: '/submit', component: Submit, name: 'Submit' },
        { path: '/data', component: Data, name: 'Data' },
        { path: '/url', component: Url, name: 'Url' },
        { path: '/online', component: Online, name: 'Online' },
        { path: '/upload', component: Upload, name: 'Upload' },
        { path: '/test', component: Test, name: 'Test' },
        // {
        //     path: '/home', redirect: '/table', component: Home, name: 'Home', children: [
        //         // { path: '/table', component: Table, name: 'Table' },
        //     ]
        // },
    ]
})

