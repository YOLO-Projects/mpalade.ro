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
            Marius Palade
          </q-toolbar-title>
        </router-link>

        <q-space />

        <div
          class="q-mt-sm"
          v-if="$q.screen.gt.sm"
        >
          <q-list class="row justify-around">
            <q-item class="q-px-sm">
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

            <q-item class="q-px-sm">
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
            <q-item class="q-px-sm">
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

            <q-item class="q-px-sm">
              <q-item-section>
                <q-btn
                  type="a"
                  href="https://bitbucket.org/yoyosan/"
                  target="_blank"
                  class="glossy"
                  round
                  color="primary"
                  icon="fab fa-bitbucket"
                />
              </q-item-section>
            </q-item>

            <q-item class="q-px-sm">
              <language-switch></language-switch>
            </q-item>
          </q-list>

        </div>

        <q-btn
          color="primary"
          icon="fas fa-bars"
          v-else
          class="q-mt-sm"
        >
          <q-menu>
            <div class="column bg-primary">
              <q-list class="column justify-center items-center">
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
                  <q-item-section>
                    <q-btn
                      type="a"
                      href="https://bitbucket.org/yoyosan/"
                      target="_blank"
                      class="glossy"
                      round
                      color="primary"
                      icon="fab fa-bitbucket"
                    />
                  </q-item-section>
                </q-item>

                <q-item>
                  <language-switch></language-switch>
                </q-item>
              </q-list>
            </div>
          </q-menu>
        </q-btn>

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
    'language-switch': require('components/LanguageSwitch').default
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
