<script>
  import { DarkMode, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
  import { Language } from '.';
  import { getTranslate } from '@tolgee/svelte';

  const { t } = getTranslate();
</script>

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
