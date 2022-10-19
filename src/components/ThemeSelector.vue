<template>
  <select
    v-model="key"
    class="select select-bordered select-sm"
    data-choose-theme
  >
    <option
      v-for="(theme, index) in themes"
      :key="index"
      class="mr-5"
    >
      {{ theme }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { themeChange } from 'theme-change'

export default defineComponent({
  name: 'ThemeSelector',
  data: () => ({
    color: 'red',
    themes: ['light', 'dark'],
    key: '',
  }),
  async mounted() {
    themeChange(false)
    await this.getTheme()
  },
  methods: {
    getTheme() {
      this.key = localStorage.getItem('theme') || 'dark'
      return this.key
    },
  },
});
</script>
