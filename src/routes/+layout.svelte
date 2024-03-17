<script>
  import '../app.pcss';
  import '$lib/locales/i18n.ts';
  import { t, isLoading } from 'svelte-i18n';
  import { DarkMode, NavHamburger } from 'flowbite-svelte';
  import CursorGradient from '../components/cursor-gradient.svelte';
</script>

<!-- Background image -->
<div class="fixed bottom-0 left-0 right-0 top-0 -z-10 bg-[url('/bg.png')] bg-cover bg-center"></div>

<div
  class="min-h-screen font-sans text-secondary-800 transition-colors duration-200 ease-in-out dark:text-secondary-100"
>
  <!-- Cursor gradient with background color -->
  <CursorGradient />
  <header class="fixed left-0 right-0 top-0 flex justify-end p-4">
    <DarkMode />
    <NavHamburger />
  </header>

  {#if !$isLoading}
    <slot />
  {/if}
</div>
