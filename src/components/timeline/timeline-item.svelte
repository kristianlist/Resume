<script lang="ts">
  import { Button, TimelineItem } from 'flowbite-svelte';
  import type { ComponentProps } from 'svelte';
  import Tag from '../tag.svelte';
  import { CalendarWeekSolid } from 'flowbite-svelte-icons';
  import { getTranslate, getTolgee } from '@tolgee/svelte';

  const { t } = getTranslate();
  const tolgee = getTolgee(['language']);
  const dateOptions = { month: 'short', year: 'numeric' };

  export let skills: string[] = [];
  type props = ComponentProps<TimelineItem> & {
    from: Date;
    to: Date | null;
  };

  $: language = $tolgee.getLanguage();
  $: _date =
    $$props.from.toLocaleString(language, dateOptions) +
    ' - ' +
    ($$props.to ? $$props.to.toLocaleString(language, dateOptions) : $t('now'));
</script>

<TimelineItem classDiv="ring-0" {...$$restProps} classTime="capitalize" date={_date}>
  <svelte:fragment slot="icon">
    <span
      class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-white dark:bg-primary-900"
    >
      <CalendarWeekSolid class="h-3 w-3 text-primary-600 dark:text-primary-400" />
    </span>
  </svelte:fragment>
  <slot />
  {#if skills}
    <div class="mt-2 flex flex-wrap gap-2 text-xs">
      {#each skills.sort() as title}
        <Tag {title} />
      {/each}
    </div>
  {/if}
</TimelineItem>
