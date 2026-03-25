<script setup>
import { useQuasar } from 'quasar';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const { locale } = useI18n();

onMounted(() => {
  const loc = ($q.lang.getLocale() || '').toLowerCase();
  switch (loc) {
    case 'en-us':
    case 'en-uk':
      locale.value = 'en-us';
      break;
    case 'ro-ro':
    case 'ro-md':
    case 'ro':
      locale.value = 'ro-ro';
      break;
    default:
      locale.value = 'en-us';
  }
});
</script>

<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
