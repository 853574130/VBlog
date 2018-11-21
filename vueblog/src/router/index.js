import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ArticleList from '@/components/ArticleList'
import CateMana from '@/components/CateMana'
// import DataCharts from '@/components/dataStatistics/DataCharts'
import DataCharts from '../components/dataStatistics/DataCharts'
import dashboard from '../components/dataStatistics/dashboard'
// import attachmanage from '../components/attachmanage'
// import dashboard from '../components/dashboard'
import PostArticle from '@/components/PostArticle'
import UserMana from '@/components/usermanager/UserMana'
import BlogDetail from '@/components/BlogDetail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: '登录',
            hidden: true,
            component: Login
        },
        {
            path: '/home',
            component: Home,
            // name: '栏目管理',
            children: [{
            path: '/dashboard',
            name: '仪表盘',
            component: dashboard,
            hidden: true,
            // children: [{
            //     path: '/articleList',
            //     name: '文章列表',
            //     component: ArticleList,
            //     meta: {
            //         keepAlive: true
            //     }
            // }]

            }]
        },
 
        {
            path: '/home',
            component: Home,
            name: '文章管理',
            iconCls: 'fa fa-file-text-o',
            children: [{
                path: '/articleList',
                name: '文章列表',
                component: ArticleList,
                meta: {
                    keepAlive: true
                }
            }, {
                path: '/postArticle',
                name: '发表文章',
                component: PostArticle,
                meta: {
                    keepAlive: false
                }
            }, {
                path: '/blogDetail',
                name: '博客详情',
                component: BlogDetail,
                hidden: true,
                meta: {
                    keepAlive: false
                }
            }, {
                path: '/editBlog',
                name: '编辑博客',
                component: PostArticle,
                hidden: true,
                meta: {
                    keepAlive: false
                }
            }]
        }, 
        {
            path: '/home',
            component: Home,
            name: '附件管理',
            children: [{
                path: '/user',
                iconCls: 'el-icon-picture',
                name: '附件管理',
                // component: attachmanage
                component: UserMana
            }]
        }, 
    
        {
            path: '/home',
            component: Home,
            name: '用户管理',
            children: [{
                path: '/user',
                iconCls: 'fa fa-user-o',
                name: '用户管理',
                component: UserMana
            }]
        }, 
        {
            path: '/home',
            component: Home,
            name: '栏目管理',
            children: [{
                path: '/cateMana',
                iconCls: 'fa fa-reorder',
                name: '栏目管理',
                component: CateMana
            }]
        },
        {
            path: '/home',
            component: Home,
            name: '博客设置',
            iconCls: 'fa fa-bar-chart',
            children: [{
                path: '/charts',
                iconCls: 'el-icon-setting',
                name: '博客设置',
                component: DataCharts
            }]
        }
    ]
})