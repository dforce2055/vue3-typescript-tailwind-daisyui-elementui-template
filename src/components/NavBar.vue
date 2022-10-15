<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered"
        >
      </div>
      <DarkModeSelector
        :size="5"
      />
      <ThemeSelector v-if="true" />
      <div class="dropdown dropdown-end">
        <label
          tabindex="0"
          class="btn btn-ghost btn-circle avatar"
        >
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people">
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ThemeSelector from './ThemeSelector.vue'
import DarkModeSelector from './DarkModeSelector.vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    ThemeSelector,
    DarkModeSelector
  },
  data: () => ({
    darkMode: false
  }),
  async mounted() {
    const theme = document?.querySelector('html')?.getAttribute('data-theme') || 'light'
    theme === 'light' ? this.darkMode = false : this.darkMode = true
  },
  computed: {
    isDarkMode() {
      return this.darkMode
    }
  }
})
</script>
