<script lang="ts">
  import { Button, TimelineItem } from 'flowbite-svelte';
  import type { ComponentProps } from 'svelte';

  type props = ComponentProps<TimelineItem> & {
    skills: string[];
  };
</script>

<TimelineItem {...$$restProps}>
  <slot />
  {#if $$props.skills}
    <div class="mt-2 flex flex-wrap gap-2">
      {#each $$props.skills as skill}
        <Button
          color="none"
          class="rounded-full bg-primary-500 bg-opacity-50 px-3 py-1 text-primary-300"
          >{skill}</Button
        >
      {/each}
    </div>
  {/if}
</TimelineItem>
