<script setup>
import LanguageSwitch from 'components/LanguageSwitch.vue';
</script>

<template><q-list>
  <q-item>
    <q-item-section>
      <q-btn round type="a" href="https://www.linkedin.com/in/marius-palade/" target="_blank" class="glossy"
        color="primary" icon="fab fa-linkedin-in" />
    </q-item-section>
  </q-item>

  <q-item>
    <q-item-section>
      <q-btn type="a" href="https://github.com/yoyosan" target="_blank" class="glossy" round color="primary"
        icon="fab fa-github" />
    </q-item-section>
  </q-item>

  <q-item>
    <q-item-section>
      <q-btn type="a" href="/cv/cv2026.pdf" target="_blank" class="glossy" round color="primary" icon="fas fa-file-pdf">
        <q-tooltip class="bg-primary shadow-4">
          {{ $t('tooltip.cv') }}
        </q-tooltip>
      </q-btn>
    </q-item-section>
  </q-item>

  <q-item>
    <LanguageSwitch />
  </q-item>
</q-list>
</template>
