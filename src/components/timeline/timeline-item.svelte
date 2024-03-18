<script lang="ts">
  import { Button, TimelineItem } from 'flowbite-svelte';
  import type { ComponentProps } from 'svelte';
  import Tag from '../tag.svelte';
  import { CalendarWeekSolid } from 'flowbite-svelte-icons';

  type props = ComponentProps<TimelineItem> & {
    skills: string[];
  };
</script>

<TimelineItem classDiv="ring-0" {...$$restProps}>
  <svelte:fragment slot="icon">
    <span
      class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-white dark:bg-primary-900"
    >
      <CalendarWeekSolid class="h-3 w-3 text-primary-600 dark:text-primary-400" />
    </span>
  </svelte:fragment>
  <slot />
  {#if $$props.skills}
    <div class="mt-2 flex flex-wrap gap-2 text-xs">
      {#each $$props.skills.sort() as title}
        <Tag {title} />
      {/each}
    </div>
  {/if}
</TimelineItem>
