// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.directive('drag', { 
  bind(e) {
      let odiv = e;
      odiv.onmousedown = (el) => {
          document.onmousemove = (ele) => {
            
            odiv.style.left  = ele.clientX - el.offsetX + 'px';
            odiv.style.top = ele.clientY - el.offsetY +  'px';

          }
          document.onmouseup = () => {
              document.onmousemove = null;
              document.onmouseup = null;
          };

        }
  }
})
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
