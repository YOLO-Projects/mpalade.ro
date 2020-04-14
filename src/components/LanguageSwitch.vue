<template>
  <q-select
    label-color="white"
    v-model="lang"
    :options="langOptions"
    :label="$t('language.label')"
    borderless
    emit-value
    map-options
    rounded
    style="min-width: 130px"
    standout>
    <template v-slot:prepend>
      <q-icon color="white" name="language" />
    </template>
  </q-select>
</template>

<script>
export default {
  data () {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        {
          value: 'ro-ro',
          label: this.$t('language.ro')
        },
        {
          value: 'en-us',
          label: this.$t('language.en')
        }
      ]
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
      this.langOptions = [
        {
          value: 'ro-ro',
          label: this.$t('language.ro')
        },
        {
          value: 'en-us',
          label: this.$t('language.en')
        }
      ]
    }
  }
}
</script>

<style>
  div.q-field__control-container > div.q-field__native.row.items-center > span {
    color: white;
  }

  div.q-field__append.q-field__marginal.row.no-wrap.items-center.q-anchor--skip > i {
    color: white;
  }
</style>
