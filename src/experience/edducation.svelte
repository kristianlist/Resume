<script lang="ts">
  import { Blockquote } from 'flowbite-svelte';
  import { t } from 'svelte-i18n';
  import { Timeline, TimelineGroup, TimelineItem } from '../components/timeline';

  const title = 'Uddannelse';
</script>

<TimelineGroup {title}>
  <Timeline>
    <TimelineItem
      title="Erhvervsakademi Aarhus - Datamatiker"
      from={new Date(2010, 7)}
      to={new Date(2013, 0)}
    ></TimelineItem>

    <TimelineItem title="Vejen Gymnasium & HF - STX" from={new Date(2006, 7)} to={new Date(2009, 6)}
    ></TimelineItem>
  </Timeline>
</TimelineGroup>
