<template>
  <q-page class="column content-center items-center bg-primary">

    <q-card
      class="row q-ma-md"
      bordered
      style="min-width: 400px; width: 600px">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">{{ $t('about.whoami') }}</div>
          <div class="text-body2 text-grey-8 q-mt-md">
            {{ $t('about.greet') }}

            <br/><br/>

            {{ $t('about.speciality') }}

            <br/><br/>

            {{ $t('about.contact-email') }}
            <q-btn
              round
              color="primary"
              size="10px"
              type="a"
              href="mailto: contact@mpalade.ro"
              icon="fas fa-at">
              <q-tooltip content-class="bg-blue-7">
                contact@mpalade.ro
              </q-tooltip>
            </q-btn>

            <br/><br/>

            {{ $t('about.projects') }}
          </div>
        </q-card-section>

        <q-card-section class="col-5">
          <q-img
            class="rounded-borders"
            src="statics/marius_palade.jpg"
          />
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card
      class="row q-ma-sm"
      bordered
      style="min-width: 400px;  width: 550px"
    >
      <q-card-section class="col">
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">
            Gymbuff
            <q-badge
              class="q-pa-xs"
              color="warning"
              align="top">{{ $t('gymbuff.status') }}
            </q-badge>
          </div>

          <div class="text-body2 text-grey-8 q-mt-md text-justify">
            {{ $t('gymbuff.intro') }}
            <ul>
              <li>{{ $t('gymbuff.line1') }}</li>
              <li>{{ $t('gymbuff.line2') }}</li>
            </ul>
            <br />
            {{ $t('gymbuff.line3') }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-xs row justify-around items-center">
          <q-icon
            name="fas fa-leaf"
            class="text-green-9 "
            size="4rem"
          />

          <q-icon
            name="fas fa-plus"
            class="text-yellow-8"
            size="3rem"
          />

          <q-icon
            name="fas fa-dumbbell"
            class="text-deep-orange"
            size="4rem"
          />
        </q-card-section>
      </q-card-section>
      <q-card-actions
        vertical
        class="justify-around q-px-md">
        <q-btn
          round
          color="red"
          type="a"
          href="https://gymbuff.ro"
          target="_blank"
          icon="fas fa-eye">
          <q-tooltip content-class="bg-red">
            {{ $t('tooltip.button-demo') }}
          </q-tooltip>
        </q-btn>
        <q-btn
          round
          color="grey"
          icon="fab fa-github-alt">
          <q-tooltip content-class="bg-grey">
            {{ $t('tooltip.button-no-source') }}
          </q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card>

    <q-card
      class="row q-ma-sm"
      bordered
      style="min-width: 400px; width: 550px"
    >
      <q-card-section class="col">
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">
            Awesome TODO
            <q-badge
              class="q-pa-xs"
              color="green"
              align="top">{{ $t('todo.status') }}
            </q-badge>
          </div>
          <div class="text-body2 text-grey-8 q-mt-md text-justify">
            {{ $t('todo.intro') }}
            <br /><br />
            {{ $t('todo.line1') }}
          </div>
        </q-card-section>

        <q-img
          contain
          class="rounded-borders"
          src="statics/todo.png"
        />

      </q-card-section>
      <q-card-actions
        vertical
        class="justify-around q-px-md">
        <q-btn
          round
          color="red"
          type="a"
          href="https://mpalade.ro/todo"
          target="_blank"
          icon="fas fa-eye">
          <q-tooltip content-class="bg-red">
            {{ $t('tooltip.button-demo') }}
          </q-tooltip>
        </q-btn>
        <q-btn
          round
          color="accent"
          type="a"
          href="https://github.com/training-yoyosan/awesome-todo"
          target="_blank"
          icon="fab fa-github-alt">
          <q-tooltip content-class="bg-accent">
            {{ $t('tooltip.button-source') }}
          </q-tooltip>
        </q-btn>
        <q-btn
          round
          color="green-7"
          type="a"
          href="https://github.com/training-yoyosan/awesome-todo/releases"
          target="_blank"
          icon="get_app">
          <q-tooltip content-class="bg-green-7">
            {{ $t('tooltip.button-download') }}
          </q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
