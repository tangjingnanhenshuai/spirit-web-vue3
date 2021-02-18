// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')


import { createApp } from 'vue'
import { ElButton, ElInput,ElUpload } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
const app = createApp(App)
// app.component(ElButton.name, ElButton);
// app.component(ElSelect.name, ElSelect);
// app.component(ElUpload.name, ElUpload);
 app.use(ElButton)
  app.use(ElInput)
  app.use(ElUpload)
app.mount('#app')


// import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
// import App from './App.vue';

// const app = createApp(App)
// app.use(ElementPlus)
// app.mount('#app')