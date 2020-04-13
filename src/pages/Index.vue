<template>
  <q-page class="column content-center items-center bg-primary">

    <q-card
      class="row q-ma-md"
      bordered
      style="min-width: 400px; width: 600px">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">Who am I?</div>
          <div class="text-body2 text-grey-8 q-mt-md">
            Hi there! My name is Marius.

            <br/><br/>

            I'm a Full Stack Developer,
            mainly working with Laravel and Quasar + Vue.js.

            <br/><br/>

            Contact me for various opportunities
            <q-btn
              round
              color="primary"
              size="10px"
              type="a"
              href="mailto: contact@mpalade.ro"
              icon="fas fa-at">
            </q-btn>

            <br/><br/>

            Find below some of the projects I've worked on and
            the ones I'm working at right now.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
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
          <div class="text-h5 q-mt-sm q-mb-xs">Gymbuff</div>
          <div class="text-body2 text-grey-8 q-mt-md text-justify">
            An all-in-one platform for:
            <ul>
              <li>Eating healthy and cooking.</li>
              <li>Exercise enough to keep healthy.</li>
            </ul>
            <br />
            Portable on any platform: browser, desktop, IOS, Android.
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
            View demo
          </q-tooltip>
        </q-btn>
        <q-btn
          round
          color="grey"
          icon="fab fa-github-alt">
          <q-tooltip content-class="bg-grey">
            Source code not available
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
          <div class="text-h5 q-mt-sm q-mb-xs">Awesome TODO</div>
          <div class="text-body2 text-grey-8 q-mt-md text-justify">
            A simple TODO app using Quasar + Vue.js and Firebase.
            <br /><br />
            Available on all platforms: browser, desktop, Android.
          </div>
        </q-card-section>

        <q-img
          contain
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
            View demo
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
            Check the source code
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
