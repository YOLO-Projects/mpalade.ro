/* eslint-disable vue/no-unused-components */
<template>
  <q-card
    class="row q-ma-sm"
    :style="$q.screen.gt.sm ? 'width: 40%' : 'width: 95%'"
    bordered
  >
    <q-card-section class="col">
      <q-card-section class="q-pt-xs">
        <div class="text-h5 q-mt-sm q-mb-xs">
          {{ title }}
          <q-badge
            class="q-pa-xs"
            :color="status.color"
            align="top"
          >{{ status.label }}
          </q-badge>
        </div>
        <div class="text-body2 text-grey-8 q-mt-md text-justify">
          {{ intro }}
          <div v-if="line1 && line2 && line3">
            <ul>
              <li>{{ $t("lifebuff.line1") }}</li>
              <li>{{ $t("lifebuff.line2") }}</li>
            </ul>
            <br />
            {{ $t("lifebuff.line3") }}
          </div>
          <div v-else>
            <br />
            {{ line1 }}
          </div>
        </div>
      </q-card-section>

      <slot name="logo"></slot>
    </q-card-section>
    <q-card-actions
      vertical
      class="justify-around q-px-md"
    >
      <q-btn
        round
        color="red"
        type="a"
        :href="demoButton.href"
        target="_blank"
        icon="fas fa-eye"
      >
        <q-tooltip content-class="bg-red">
          {{ demoButton.tooltip }}
        </q-tooltip>
      </q-btn>
      <q-btn
        round
        type="a"
        :color="sourceButton.href ? 'accent' : 'grey'"
        icon="fab fa-github-alt"
        :href="sourceButton.href"
        target="_blank"
      >
        <q-tooltip :content-class="sourceButton.href ? 'bg-accent' : 'bg-grey'">
          {{ sourceButton.tooltip }}
        </q-tooltip>
      </q-btn>
      <q-btn
        round
        type="a"
        color="orange"
        icon="fas fa-layer-group"
        @click="techStack = true"
      >
        <q-tooltip content-class="bg-orange">
          {{ $t('language.tech') }}
        </q-tooltip>
      </q-btn>
      <q-btn
        v-if="downloadButton"
        round
        color="green-7"
        type="a"
        :href="downloadButton.href"
        target="_blank"
        icon="get_app"
      >
        <q-tooltip content-class="bg-green-7">
          {{ downloadButton.tooltip }}
        </q-tooltip>
      </q-btn>

      <q-dialog
        v-model="techStack"
        class="q-pa-none q-ma-none"
      >
        <q-card class="my-card q-pa-none q-ma-none">
          <q-card-section class="q-pa-none q-ma-none">
            <div class="row">
              <component
                v-for="(t, index) in tech"
                :key=index
                :is="t"
              ></component>
            </div>
            <q-page-sticky
              :position="$q.screen.gt.sm ? 'top' : 'bottom'"
              :offset="$q.screen.gt.sm ? [0, 140]: [0, 0]"
            >
              <q-btn
                fab
                icon="close"
                color="primary"
                v-close-popup
              />
            </q-page-sticky>
          </q-card-section>
        </q-card>
      </q-dialog>

    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    title: {
      type: String,
      required: true
    },
    status: {
      type: Object,
      required: true
    },
    intro: {
      required: true
    },
    line1: String,
    line2: String,
    line3: String,
    demoButton: {
      type: Object,
      required: true
    },
    sourceButton: {
      type: Object,
      required: true
    },
    downloadButton: Object,
    tech: {
      required: true,
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      techStack: false
    }
  },

  components: {
    bitbucket: () => import('components/tech-tiles/bitbucket'),
    github: () => import('components/tech-tiles/github'),
    laravel: () => import('components/tech-tiles/laravel'),
    vuejs: () => import('components/tech-tiles/vuejs'),
    quasar: () => import('components/tech-tiles/quasar'),
    tailwind: () => import('components/tech-tiles/tailwind')
  }
}
</script>
