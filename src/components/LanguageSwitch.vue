<script setup>
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

const lang = ref(locale.value);
const langOptions = computed(() => [
  { value: 'ro-ro', label: t('language.ro') },
  { value: 'en-us', label: t('language.en') },
]);

watch(lang, (v) => {
  locale.value = v;
});
</script>

<template><q-select label-color="white" v-model="lang" :options="langOptions" :label="$t('language.label')" borderless emit-value
  map-options rounded style="min-width: 126px" standout>
  <template v-slot:prepend>
    <q-icon color="white" name="language" />
  </template>
</q-select>
</template>

<style lang="sass">
div.q-dialog.fullscreen
  div.q-dialog__inner
    div.q-field__prepend.q-field__marginal i
      color: $primary !important

      div.q-field__label
        color: $primary !important

      div.q-field__native.row.items-center > span
        color: $dark !important

div.q-field__control-container > div.q-field__native.row.items-center > span
  color: white

div.q-field__append.q-field__marginal.row.no-wrap.items-center.q-anchor--skip > i
  color: white
</style>
