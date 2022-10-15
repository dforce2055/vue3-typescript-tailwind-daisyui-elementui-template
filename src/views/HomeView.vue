<template>
  <div class="home">
    <Hero />
    <section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.
            </h1>
            <button class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0">
              Button
            </button>
          </div>
        </div>
      </section>
    </section>
    <section>
      <Avatar />
    </section>
    <section>
      <Cards />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import PersonComponent from '@/components/PersonComponent.vue'
import Avatar from '@/components/Avatar.vue'
import Cards from '@/components/Cards.vue'
import Hero from '@/components/Hero.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Avatar,
    Cards,
    Hero,
  }
})
</script>
