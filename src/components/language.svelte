<script lang="ts">
  import { t, locale, locales } from 'svelte-i18n';
  import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { GlobeOutline } from 'flowbite-svelte-icons';
  import Icon from '@iconify/svelte';

  $: console.log($locale);

  function changeLocale(locale: string) {
    $locale = locale;
  }
</script>

<Button outline={false} color="none">
  <GlobeOutline class="h-5 w-5" />
</Button>
<Dropdown>
  {#each $locales as lang}
    <DropdownItem
      on:click={() => changeLocale(lang)}
      class="flex flex-row items-center justify-between gap-2 px-4 py-2"
    >
      <Icon icon="circle-flags:{lang}" />
      <span>
        {$t(`language.${lang}`)}
      </span>
    </DropdownItem>
  {/each}
</Dropdown>
