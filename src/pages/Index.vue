<template>
  <q-page class="column content-center items-center bg-primary q-py-sm">

    <q-card
      class="row q-ma-md justify-center"
      :class="$q.screen.gt.sm ? 'q-pa-md' : 'q-pa-xs'"
      bordered
      :style="$q.screen.gt.sm ? 'width: 45%' : 'width: 95%'"
    >
      <q-card-section :horizontal="$q.screen.gt.sm">
        <q-card-section
          class="q-pt-xs"
          :class="$q.screen.gt.sm ? 'q-px-md' : 'q-px-xs'"
        >
          <div class="text-h5 q-mt-sm q-mb-xs">{{ $t("about.whoami") }}</div>
          <div
            class="text-grey-8 q-mt-md text-left"
            :class="$q.screen.gt.sm ? 'text-body2' : 'text-subtitle2'"
            style="hyphens: auto"
          >
            {{ $t("about.greet") }}

            <br /><br />

            <div v-html="specialty"></div>

            <br /><br />

            {{ $t("about.contact-email") }}
            <q-btn
              round
              color="primary"
              size="10px"
              type="a"
              href="mailto: contact@mpalade.ro"
              icon="fas fa-at"
            >
              <q-tooltip content-class="bg-blue-7">
                contact@mpalade.ro
              </q-tooltip>
            </q-btn>

            <br /><br />

            {{ $t("about.projects") }}
          </div>
        </q-card-section>

        <q-card-section class="col-5">
          <q-img
            contain
            class="rounded-borders"
            src="marius_palade.jpg"
            :ratio="$q.screen.gt.sm ? 1 : 4/3"
          />
        </q-card-section>
      </q-card-section>
    </q-card>

    <project-card
      title="Lifebuff"
      :status="{ label: $t('lifebuff.status'), color: 'yellow-8' }"
      :intro="$t('lifebuff.intro')"
      :line1="$t('lifebuff.line1')"
      :line2="$t('lifebuff.line2')"
      :line3="$t('lifebuff.line3')"
      :demoButton="{ href: 'https://lifebuff.ro', tooltip: $t('tooltip.button-demo') }"
      :sourceButton="{ href: null, tooltip: $t('tooltip.button-no-source') }"
      :tech="['vuejs', 'quasar', 'laravel', 'bitbucket']"
    >
      <template v-slot:logo>
        <q-card-section class="q-pt-xs row justify-around items-center">
          <q-icon
            name="fas fa-leaf"
            class="text-green-9"
            :size="$q.screen.gt.sm ? '4em' : '2.5em'"
          />

          <q-icon
            name="fas fa-plus"
            class="text-yellow-8"
            :size="$q.screen.gt.sm ? '4em' : '2em'"
          />

          <q-icon
            name="fas fa-dumbbell"
            class="text-deep-orange"
            :size="$q.screen.gt.sm ? '4em' : '2.5em'"
          />
        </q-card-section>
      </template>
    </project-card>

    <project-card
      :title="$t('ql-example.title')"
      :status="{ label: $t('ql-example.status'), color: 'green' }"
      :intro="$t('ql-example.intro')"
      :line1="$t('ql-example.line1')"
      :line2="$t('ql-example.line2')"
      :demoButton="{ href: 'http://frex.mpalade.ro', tooltip: $t('tooltip.button-demo') }"
      :sourceButton="{ href: 'https://github.com/training-yoyosan?q=spa&type=&language=', tooltip: $t('tooltip.button-source') }"
      :tech="['vuejs', 'quasar', 'laravel', 'github']"
    >
      <template v-slot:logo>
        <q-card-section class="q-pt-xs row justify-around items-center">
          <q-avatar :size="$q.screen.gt.sm ? '4em' : '2em'">
            <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
          </q-avatar>
          <q-icon
            name="fas fa-plus"
            class="text-info"
            :size="$q.screen.gt.sm ? '4em' : '2em'"
          />

          <q-icon
            name="fab fa-laravel"
            class="text-red"
            :size="$q.screen.gt.sm ? '4em' : '2.5em'"
          />
        </q-card-section>
      </template>
    </project-card>

    <project-card
      title="re: plic"
      :status="{ label: $t('replic.status'), color: 'green' }"
      :intro="$t('replic.intro')"
      :line1="$t('replic.line1')"
      :demoButton="{ href: 'https://replicro.surge.sh', tooltip: $t('tooltip.button-live') }"
      :sourceButton="{ href: null, tooltip: $t('tooltip.button-no-source') }"
      :tech="['vuejs', 'quasar', 'laravel', 'bitbucket']"
    >
      <template v-slot:logo>
        <q-img
          class="rounded-borders"
          src="replic.png"
        />
      </template>
    </project-card>

    <project-card
      v-show="false"
      :title="$t('contestatie.title')"
      :status="{ label: $t('contestatie.status'), color: 'green' }"
      :intro="$t('contestatie.intro')"
      :line1="$t('contestatie.line1')"
      :demoButton="{ href: 'https://contestatie-dev.abvlegal.ro', tooltip: $t('tooltip.button-demo') }"
      :sourceButton="{ href: null, tooltip: $t('tooltip.button-no-source') }"
      :tech="['vuejs', 'quasar', 'laravel', 'bitbucket']"
    >
    </project-card>

    <project-card
      title="Awesome TODO"
      :status="{ label: $t('todo.status'), color: 'green' }"
      :intro="$t('todo.intro')"
      :line1="$t('todo.line1')"
      :demoButton="{ href: 'https://todo.mpalade.ro', tooltip: $t('tooltip.button-demo') }"
      :sourceButton="{ href: 'https://github.com/training-yoyosan/awesome-todo', tooltip: $t('tooltip.button-source') }"
      :downloadButton="{ href: 'https://github.com/training-yoyosan/awesome-todo/releases', tooltip: $t('tooltip.button-download') }"
      :tech="['vuejs', 'quasar', 'laravel', 'github']"
    >
      <template v-slot:logo>
        <q-img
          contain
          class="rounded-borders"
          src="todo.png"
        />
      </template>
    </project-card>

    <project-card
      title="The PIT"
      :status="{ label: $t('thepit.status'), color: 'green' }"
      :intro="$t('thepit.intro')"
      :line1="$t('thepit.line1')"
      :demoButton="{ href: 'https://thepit.ro', tooltip: $t('tooltip.button-live') }"
      :sourceButton="{ href: null, tooltip: $t('tooltip.button-no-source') }"
      :tech="['laravel', 'github', 'tailwind']"
    >
      <template v-slot:logo>
        <q-img
          contain
          class="rounded-borders"
          src="thepit.png"
        />
      </template>
    </project-card>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  created () {
    this.$root.$on('language-changed', () => {
      this.specialty = this.$t('about.speciality')
    })
  },

  data () {
    return {
      specialty: this.$t('about.speciality')
    }
  },

  components: {
    'project-card': () => import('components/ProjectCard')
  },

  meta: {
    // sets document title
    // title: 'Marius Palade\'s official website',
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    // titleTemplate: title => `${title}`,

    // meta tags
    meta: {
      keywords: { name: 'keywords', content: 'vue.js, quasar, react, php, laravel, docker, python, django, dev-ops' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
      // viewport: { ''}
    },

    // CSS tags
    link: {
      material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    },

    // <noscript> tags
    noscript: {
      default: 'This is content for browsers with no JS (or disabled JS)'
    }
  }
}
</script>

<style lang="sass">
a
  color: $primary
</style>
