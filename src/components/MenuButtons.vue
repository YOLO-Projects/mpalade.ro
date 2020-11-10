<template>
  <q-list>
    <q-item>
      <q-item-section>
        <q-btn
          round
          type="a"
          href="skype:mmarius.palade?chat"
          class="glossy"
          color="primary"
          icon="fab fa-skype"
        >
          <q-tooltip content-class="bg-blue-7">
            mmarius.palade
          </q-tooltip>
        </q-btn>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section>
        <q-btn
          round
          type="a"
          href="https://www.linkedin.com/in/marius-palade/"
          target="_blank"
          class="glossy"
          color="primary"
          icon="fab fa-linkedin-in"
        />
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section>
        <q-btn
          type="a"
          href="https://github.com/yoyosan"
          target="_blank"
          class="glossy"
          round
          color="primary"
          icon="fab fa-github"
        />
      </q-item-section>
    </q-item>

    <q-item>
      <language-switch></language-switch>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'MenuButtons',

  data () {
    return {}
  },

  components: {
    'language-switch': require('components/LanguageSwitch').default
  }
}
</script>
