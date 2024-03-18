<script lang="ts">
  import { Blockquote } from 'flowbite-svelte';
  import { t } from 'svelte-i18n';
  import { Timeline, TimelineGroup, TimelineItem } from '../components/timeline';

  const title = 'Uddannelse';
</script>

<TimelineGroup {title}>
  <Timeline>
    <TimelineItem title="Erhvervsakademi Aarhus - Datamatiker" date="2010 - 2013"></TimelineItem>

    <TimelineItem title="Vejen Gymnasium & HF - STX" date="2006 - 2009"></TimelineItem>
  </Timeline>
</TimelineGroup>
