<template>
  <div class="about">
    <h1>This is an about page</h1>
    <section class="m-4">
      <Skeleton />
    </section>
    <section class="pt-2 mt-2">
      <button
        :class="`
        flex-shrink-0
        text-white
        bg-${color}-500
        border-0
        py-2 px-8
        focus:outline-none
        hover:bg-${color}-600
        rounded
        text-lg
        mt-10
        sm:mt-0
        transition ease-in-out delay-150 bg-${color}-500 hover:-translate-y-1 hover:scale-110 hover:bg-${color}-500 duration-150
        `"
      >
        Button
      </button>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Skeleton from '@/components/Skeleton.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    Skeleton
  },
  data: () => ({
    color: 'red'
  }),
});
</script>
