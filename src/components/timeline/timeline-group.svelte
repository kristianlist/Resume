<script lang="ts">
  import { Group } from 'flowbite-svelte';

  const classDiv = 'border-none bg-transparent dark:bg-transparent p-0 mb-24';
  const classOl = 'divide-y-0';

  export let title: string;
  $: date = title;
</script>

<Group {date} {classDiv} {classOl}>
  <slot name="description" />
  <slot />
</Group>
