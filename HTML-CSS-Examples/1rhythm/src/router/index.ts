import { createRouter, createWebHistory } from "vue-router";
const Login = () =>
  import(
    /* webpackChunkName: "Login" */ "@/components/login/login.vue"
  );
const Registration = () =>
  import(
  /* webpackChunkName: "Registration" */ "@/components/login/registration.vue"
  )

const LoginContainer = () =>
  import(
  /* webpackChunkName: "LoginContainer" */ "@/components/login/login-container.vue"
  )

const Home = () =>
  import(
  /* webpackChunkName: "Home" */ "@/components/home.vue"
  )

const AppShell = () =>
  import(
  /* webpackChunkName: "appshell" */ "@/components/app-shell/app-shell.vue"
  )

const Studio = () =>
  import(
  /* webpackChunkName: "Studio" */ "@/components/studio.vue"
  )

const Detail = () =>
  import(
  /* webpackChunkName: "Detail" */ "@/components/detail.vue"
  )

const StudioDetail = () =>
  import(
  /* webpackChunkName: "Detail" */ "@/components/studio-detail.vue"
  )

const BookingHistory = () =>
  import(
  /* webpackChunkName: "BookingHistory" */ "@/components/booking-history.vue"
  )

const appShellRoutes = [
  {
    path: "/home",
    name: 'Home',
    component: Home
  },
  {
    path: "/detail",
    name: 'Detail',
    component: Detail,
  },
  {
    path: "/studio",
    name: 'Studio',
    component: Studio,
  },
  {
    path: "/studio-detail",
    name: 'StudioDetail',
    component: StudioDetail,
  },
  {
    path: "/booking-history",
    name: 'BookingHistory',
    component: BookingHistory,
  },
]
const routes: any = [
  {
    path: '',
    component: AppShell,
    name: 'default',
    children: appShellRoutes
  },
  {
    path: "/login",
    component: LoginContainer,
    name: 'LoginContainer',
    redirect: '/login',
    children: [
      {
        path: "",
        name: 'Login',
        component: Login,
      },
      {
        path: "/registration",
        name: 'Registration',
        component: Registration,
      },
    ],
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
