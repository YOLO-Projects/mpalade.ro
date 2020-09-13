<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      :class="$q.screen.gt.sm ? 'q-pa-sm' : 'q-pa-xs'"
    >
      <q-toolbar class="row items-center justify-around">
        <router-link
          to="/"
          class="text-white row items-center"
        >
          <q-toolbar-title :style="$q.screen.gt.sm ? 'font-size: 2em' : 'font-size: 1.4em'">
            <q-icon
              class="q-mb-xs"
              name="home"
            />
          </q-toolbar-title>
        </router-link>

        <q-space />

        <div
          class="q-mt-sm"
          v-if="$q.screen.gt.sm"
        >
          <menu-buttons class="row justify-around"></menu-buttons>
        </div>

        <q-btn
          color="primary"
          icon="fas fa-bars"
          v-else
          :class="$q.screen.gt.sm ? '' : 'q-mr-sm'"
        >
          <q-menu>
            <div class="column bg-primary">
              <menu-buttons class="column justify-center items-center"></menu-buttons>
            </div>
          </q-menu>
        </q-btn>

        <q-btn
          v-if="$q.screen.gt.sm"
          class="absolute-top-right q-px-lg q-py-none"
          unelevated
          color="red"
          label="Fork me"
          style="transform: rotate(45deg); top: 0px; right: -50px"
          no-caps
          align="center"
          type="a"
          href="https://bitbucket.org/yoyosan/mpalade.ro/src/master/"
          target="_blank"
        />

        <q-btn
          v-else
          class="absolute-top-right q-px-lg q-py-none"
          unelevated
          color="red"
          icon="mdi-source-fork"
          style="transform: rotate(45deg); top: -8px; right: -43px"
          align="center"
          type="a"
          href="https://bitbucket.org/yoyosan/mpalade.ro/src/master/"
          target="_blank"
        />

      </q-toolbar>
    </q-header>

    <q-footer
      reveal
      elevated
      class="orientation-portrait"
    >
      <q-toolbar class="row self-center text-center q-pa-md">
        <q-toolbar-title class="text-subtitle2">
          Made with <a
            href="https://quasar.dev"
            target="_blank"
            class="text-amber"
          >Quasar</a>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {
    }
  },

  components: {
    'menu-buttons': require('components/MenuButtons').default
  }
}
</script>

<style lang="sass">
.home-link
  color: white

.q-toolbar
  flex-direction: row

body.screen--sm, body.screen--xs
  .q-toolbar
    flex-direction: row
    align-items: center
    justify-content: space-around

.q-header
  .q-toolbar__title
    font-family: Hepta Slab
    font-weight: 700
    flex: none

a
  text-decoration: none
  border: none
  outline: none
</style>
