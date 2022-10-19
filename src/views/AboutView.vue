<template>
  <div class="about ">
    <h1>This is an about page</h1>
    <el-button
      plain
      @click="open"
    >
      Closes automatically
    </el-button>
    <section class="flex justify-center">
      <article class="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
        <!-- ... -->
      </article>
    </section>
    <section class="m-4">
      <Skeleton />
    </section>
    <section class="md:container md:mx-auto">
      <div
        class="flex justify-center"
      >
        <button class="btn loading mx-1">
          loading
        </button>
        <button class="btn btn-secondary btn-outline">
          Hello daisyui
        </button>
        <button class="btn">
          Button
        </button>
        <button class="btn btn-primary">
          Button
        </button>
        <button class="btn btn-secondary">
          Button
        </button>
        <button class="btn btn-accent">
          Button
        </button>
        <button class="btn btn-ghost">
          Button
        </button>
        <button class="btn btn-link">
          Button
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
import { themeChange } from 'theme-change'
import { ElNotification } from 'element-plus'

export default defineComponent({
  name: 'AboutView',
  components: {
    Skeleton
  },
  data: () => ({
    color: 'red',
  }),
  async mounted() {
    themeChange(false)
  },
  methods: {
    open() {
      ElNotification({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 5000,
      })
    }
  }
});
</script>
