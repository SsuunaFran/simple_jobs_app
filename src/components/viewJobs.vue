<template>
    <section class="px-4 py-9 bg-light-blue-lighten-5">
        <div class="m-auto container-xl lg:container">
          <jobCards />
        </div>
      </section>
  </template>
<script>
import jobCards from './jobCards.vue'
export default {
    name :'viewJobs',
    components: {
    jobCards,
  }
}
</script>
