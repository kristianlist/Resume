<script lang="ts">
  import { Heading } from 'flowbite-svelte';

  export let title: string;
</script>

<div>
  <Heading tag="h3" color="text-secondary-400" class="mb-2 text-2xl font-bold">{title}</Heading>
  <slot />
</div>
