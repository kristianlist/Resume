<script>
  import '../app.pcss';
  import '$lib/locales/i18n.ts';
  import { t, isLoading } from 'svelte-i18n';
  import { DarkMode, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
  import { CursorGradient, Language } from '../components/';
</script>

<!-- Background image -->
<div class="fixed bottom-0 left-0 right-0 top-0 -z-10 bg-[url('/bg.png')] bg-cover bg-center"></div>

<div
  class="min-h-screen font-sans text-secondary-800 transition-colors duration-200 ease-in-out dark:text-secondary-100"
>
  {#if !$isLoading}
    <!-- Cursor gradient with background color -->
    <CursorGradient />
    <header class="fixed left-0 right-0 top-0 flex justify-end p-4">
      <Navbar class="z-20 w-fit" color="none">
        <Language />
        <DarkMode />
        <NavHamburger />
        <NavUl class="md:hidden">
          <NavLi href="#about">{$t('about')}</NavLi>
          <NavLi href="#experience">{$t('experience')}</NavLi>
          <NavLi href="#education">{$t('education')}</NavLi>
        </NavUl>
      </Navbar>
    </header>

    <slot />
  {/if}
</div>
