<template>
  <div class="about">
    <h1>This is an about page</h1>
    <section class="m-4">
      <Skeleton />
    </section>
    <section class="md:container md:mx-auto">
      <div class="flex justify-center">
        <button class="btn loading mx-1">
          loading
        </button>
        <button class="btn btn-secondary btn-outline">
          Hello daisyui
        </button>
      </div>
    </section>
    <section>
      <div class="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-info flex-shrink-0 w-6 h-6"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg>
          <span>12 unread messages. Tap to see.</span>
        </div>
      </div>
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
    color: 'red',
  }),
});
</script>
