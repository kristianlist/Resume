<script lang="ts">
  import { spring } from 'svelte/motion';

  let coordinates = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.5 });

  const onMouseMove = (event: MouseEvent) => {
    $coordinates = { x: event.x, y: event.y };
  };
</script>

<svelte:window on:mousemove={onMouseMove} />

<div
  class="fixed
    left-0
    top-0 -z-10 h-full
    w-full bg-[radial-gradient(circle_at_var(--mouse-x,_0px)_var(--mouse-y,_0px),theme(colors.primary.100_/_90%),theme(colors.primary.100/_99%)_40%)]
    dark:bg-[radial-gradient(circle_at_var(--mouse-x,_0px)_var(--mouse-y,_0px),theme(colors.primary.950_/_90%),theme(colors.primary.950_/_99%)_40%)]"
  style:--mouse-x={`${$coordinates.x}px`}
  style:--mouse-y={`${$coordinates.y}px`}
></div>
