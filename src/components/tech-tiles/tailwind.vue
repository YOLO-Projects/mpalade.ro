<template>
  <div class="bg-white col-12 q-pa-md column justify-center items-center q-gutter-y-sm">
    <q-icon
      color="white"
      style="font-size: 4.4em;"
    >
      <svg
        class="w-10 h-10 block md:hidden"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Tailwind CSS</title>
        <path
          d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          transform="translate(5 16)"
          fill="url(#logoMarkGradient)"
          fill-rule="evenodd"
        ></path>
        <defs>
          <linearGradient
            x1="0%"
            y1="0%"
            y2="100%"
            id="logoMarkGradient"
          >
            <stop stop-color="#2298BD"></stop>
            <stop
              offset="1"
              stop-color="#0ED7B5"
            ></stop>

          </linearGradient>
        </defs>
      </svg>
    </q-icon>
    <a
      href="https://tailwindcss.com"
      target="_blank"
      class="text-green-9"
    >Tailwindcss</a>
  </div>
</template>

<script>
export default {
  name: 'TileTailwind',

  data () {
    return {}
  }
}
</script>
