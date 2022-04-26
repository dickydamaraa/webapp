// import { createRouter, createWebHistory, RouteRecordRaw } from ''
import HomeView from '../views/HomeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import StyleguideView from '@/views/StyleguideView.vue'
import ImportLedgerView from '@/views/ImportLedgerView.vue'
import ConnectingKeplr from '@/views/ConnectingKeplr.vue'
import ImportSeedView from '@/views/ImportSeedView.vue'
import SetPassword from '@/views/SetPassword.vue'
import SetWalletName from '@/views/SetWalletName.vue'
import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import CreateAccountView from '@/views/CreateAccountView.vue'
import LeaseView from '@/views/LeaseView.vue'
import EarningsView from '@/views/EarningsView.vue'
import HistoryView from '@/views/HistoryView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/auth',
    component: AuthView,
    children: [
      {
        path: '',
        name: 'authHome',
        component: HomeView
      },
      {
        path: 'connecting-to-keplr',
        name: 'connectingKeplr',
        component: ConnectingKeplr
      },
      {
        path: 'import-ledger',
        name: 'importLedger',
        component: ImportLedgerView
      },
      {
        path: 'import-seed',
        name: 'importSeedView',
        component: ImportSeedView
      },
      {
        path: 'set-password',
        name: 'setPassword',
        component: SetPassword
      },
      {
        path: 'create-account',
        name: 'createAccountView',
        component: CreateAccountView
        // children: [
        //   {
        //     path: 'confirm-mnemonic',
        //     name: 'ConfirmMnemonicView',
        //     component: ConfirmMnemonicView
        //   }
        // ]
      }

    ]
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/styleguide',
    name: 'styleguide',
    component: StyleguideView
  },
  {
    path: '/set-wallet-name',
    name: 'SetWalletName',
    component: SetWalletName
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'welcome' && !localStorage.getItem('wallet_connect_via')) {
//     next({ name: 'welcome' })
//   } else {
//     next()
//   }
// })

export default router
