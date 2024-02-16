import { createApp } from 'vue'

import App from './App.vue'
app.config.console.errorHandler = (err) =>{

}

const app = createApp
({
    data() {
        return {
            count: 0
        }
    }
})
const app1 = createApp({

})

app1.mount('#container-1')

const app2 = createApp({

})

app2.mount('#container-2')

app.mount('#app')
app.component('TodoDeleteButton', TodoDeleteButton)
