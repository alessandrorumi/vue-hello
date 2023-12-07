// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const { createApp } = Vue;

createApp({

  data() {
    return {
      messaggio: 'Hello World',
      foto: 'https://cdn.sanity.io/images/8edntncj/production/7cb22a8a9885468d96662f6ece61ceb2bc95666d-500x300.png',
      logoVue: 'logo Vue JS',
      coloreTitolo: ''
    }
  },

  methods: {

    changeBackgroundColor: function () {
      if (this.coloreTitolo === '') {
        this.coloreTitolo = 'blue'
      } else {
        this.coloreTitolo = ''
      }
    }
  }

}).mount('#app')