<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="q-pa-md"
    >
      <q-toolbar>
        <router-link
          to="/"
          class="row text-white items-center absolute-left"
        >
          <q-icon
            name="home"
            class="vertical-middle"
            style="font-size: 2.5em"
          />
          <q-toolbar-title
            class="ellipsis"
          >
            Marius Palade
          </q-toolbar-title>
        </router-link>

        <q-space />

        <q-list class="row absolute-right">
          <q-item class="q-px-sm">
            <q-item-section>
              <q-btn
                type="a"
                  href="skype:mmarius.palade?chat"
                class="glossy"
                round
                color="primary"
                icon="fab fa-skype">
                <q-tooltip content-class="bg-blue-7">
                  mmarius.palade
                </q-tooltip>
              </q-btn>
            </q-item-section>
          </q-item>

          <q-item class="q-px-sm">
            <q-item-section>
              <q-btn
                type="a"
                href="https://www.linkedin.com/in/marius-palade/"
                target="_blank"
                class="glossy"
                round
                color="primary"
                icon="fab fa-linkedin-in"/>
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
                icon="fab fa-github"/>
            </q-item-section>
          </q-item>
        </q-list>
      </q-toolbar>
    </q-header>

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
  }
}
</script>

<style>
  .home-link {
    text-color: white;
  }
  .q-header .q-toolbar__title {
    font-family:Hepta Slab;
    font-weight:700;
    font-size:30px;
    flex:none
  }
  a {
    text-decoration: none;
    border: none;
    outline: none;
  }
</style>
