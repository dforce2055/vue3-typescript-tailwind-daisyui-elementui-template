<template>
  <PricingComponent />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PricingComponent from '../components/PricingComponent.vue';

export default defineComponent({
  name: 'PricingView',
  components: {
    PricingComponent,
  },
});
</script>
