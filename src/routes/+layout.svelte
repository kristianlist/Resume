<script>
  import '../app.pcss';
  import '$lib/locales/i18n.ts';
  import { t, isLoading } from 'svelte-i18n';
  import { DarkMode, NavHamburger } from 'flowbite-svelte';
</script>

<div
  class="min-h-screen bg-primary-100 bg-[url('/static/bg.png')] bg-cover bg-center font-sans transition-colors duration-200 ease-in-out dark:bg-secondary-950 dark:text-primary-50"
>
  <header class="fixed left-0 right-0 top-0 flex justify-end p-4">
    <DarkMode />
    <NavHamburger />
  </header>

  {#if !$isLoading}
    <slot />
  {/if}
</div>
