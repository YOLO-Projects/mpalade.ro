<script setup>
import sadUrl from 'assets/sad.svg';
</script>

<template>
<div class="fixed-center text-center">
  <p>
    <img :src="sadUrl" style="width:30vw;max-width:150px;">
  </p>
  <p class="text-faded">
    Sorry, nothing here...<strong>(404)</strong>
  </p>
  <q-btn color="secondary" style="width:200px;" to="/" label="Go back" />
</div>
</template>
