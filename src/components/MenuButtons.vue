<script setup>
import LanguageSwitch from 'components/LanguageSwitch.vue';
</script>

<template><q-list>
  <q-item>
    <q-item-section>
      <q-btn round type="a" href="https://www.linkedin.com/in/marius-palade/" target="_blank"
        rel="noopener noreferrer" class="glossy" color="primary" icon="fab fa-linkedin-in"
        :aria-label="$t('tooltip.linkedin')" />
    </q-item-section>
  </q-item>

  <q-item>
    <q-item-section>
      <q-btn type="a" href="https://github.com/yoyosan" target="_blank" rel="noopener noreferrer" class="glossy"
        round color="primary" icon="fab fa-github" :aria-label="$t('tooltip.github')" />
    </q-item-section>
  </q-item>

  <q-item>
    <q-item-section>
      <q-btn type="a" href="/cv/cv2026.pdf" target="_blank" rel="noopener noreferrer" class="glossy" round
        color="primary" icon="fas fa-file-pdf" :aria-label="$t('tooltip.cv')">
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
