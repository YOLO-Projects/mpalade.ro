<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    // detect user language
    switch (this.$q.lang.getLocale().toLowerCase()) {
      case 'en-us':
      case 'en-uk':
        this.$i18n.locale = 'en-us'

        break
      case 'ro-ro':
      case 'ro-md':
      case 'ro':
        this.$i18n.locale = 'ro-ro'

        break
      default:
        this.$i18n.locale = 'en-us'

        break
    }
  }
}
</script>
