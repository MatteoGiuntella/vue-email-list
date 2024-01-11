const { createApp } = Vue

  createApp({
    data() {
      return {
        list : [],
      }
    },
    methods: {

        },
    mounted(){
      for (let i = 0; i < 10; i++) {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((res) => {
            this.list.push(res.data.response)
        })
      }
    }
  }).mount('#app')