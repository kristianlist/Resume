<script lang="ts">
  import { Blockquote, TimelineItem } from 'flowbite-svelte';
  import TimelineGroup from '../components/timeline-group.svelte';
  import Timeline from '../components/timeline.svelte';
  import { t } from 'svelte-i18n';

  const title = 'Uddannelse';
</script>

<TimelineGroup {title}>
  <Timeline>
    <TimelineItem title="Erhvervsakademi Aarhus - Datamatiker" date="2010 - 2013"></TimelineItem>

    <TimelineItem title="Vejen Gymnasium & HF - STX" date="2006 - 2009"></TimelineItem>
  </Timeline>
</TimelineGroup>
