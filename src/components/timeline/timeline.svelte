<script lang="ts">
  import { Timeline } from 'flowbite-svelte';

  const timelineStyle = 'border-dashed';
</script>

<Timeline class={timelineStyle}>
  <slot />
</Timeline>
