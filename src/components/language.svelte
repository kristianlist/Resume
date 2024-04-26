<script lang="ts">
  import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { GlobeOutline } from 'flowbite-svelte-icons';
  import Icon from '@iconify/svelte';
  import { getTolgee, getTranslate } from '@tolgee/svelte';

  const { t } = getTranslate();
  const tolgee = getTolgee(['language']);
  const locales = getTolgee().value.getInitialOptions().availableLanguages as string[];

  function handleLanguageChange(e: string) {
    $tolgee.changeLanguage(e);
  }
</script>

<Button outline={false} color="none">
  <GlobeOutline class="h-5 w-5" />
</Button>
<Dropdown>
  {#each locales as lang}
    <DropdownItem
      on:click={() => handleLanguageChange(lang)}
      class="flex flex-row items-center justify-between gap-2 px-4 py-2"
    >
      <Icon icon="circle-flags:{lang}" />
      <span>
        {$t(`language.${lang}`)}
      </span>
    </DropdownItem>
  {/each}
</Dropdown>
