import { createApp } from 'vue'

import { ref } from 'vue'

app.config.console.errorHandler = (err) =>{

}

const counter = ref(0)

app.mount('#app')
app.component('TodoDeleteButton', TodoDeleteButton)
