import Vue from "vue";
import "./cube-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "amfe-flexible";
import setAxios from "./setaxios";
/* 消除vue-router.esm.js?8c4f:2051 Uncaught (in promise) 告警 */
import Router from "vue-router";
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error);
};
setAxios();
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

//路由守卫
router.beforeEach((to, from, next) => {
	//无论是刷新还是跳转路由，第一个进入的就是这个路由前置钩子函数
	store.commit("setToken", localStorage.getItem("token"));
	if (to.meta.requireAuth) {
		if (store.state.token) {
			next();
		} else {
			next({
				path: "/login",
				query: { redirect: to.fullPath }
			});
		}
	} else {
		next();
	}
});
new Vue({
	router,
	store,
	render: function(h) {
		return h(App);
	}
}).$mount("#app");
