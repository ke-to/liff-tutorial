<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">liff-tutorial</h1>
      <p>{{ liffId }}</p>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <p style="word-break: break-word; margin-top: 2rem">{{ token }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      liffId: process.env.LIFF_ID || '',
      token: ''
    }
  },
  computed: {
    token$: function() { 
      return ''
    }
  },
  async mounted() {
    await this.$liff
    .init({
        liffId: this.liffId
    })
    .then(async () => {
        if (!this.$liff.isLoggedIn()) {
            this.$liff.login();
        } else {
            this.token = this.$liff.getIDToken() || ''
        }
    })
    .catch((err) => {
        console.log(err.code, err.message);
    });
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
