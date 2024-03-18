<script lang="ts">
  import { Group } from 'flowbite-svelte';

  export let title: string;
  $: date = title;
</script>

<Group
  {date}
  classDiv="border-none bg-transparent dark:bg-transparent p-0 mb-24"
  classOl="divide-y-0 dark:divide-secondary-600"
>
  <slot name="description" />
  <slot />
</Group>
