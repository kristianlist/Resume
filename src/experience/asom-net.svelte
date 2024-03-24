<script lang="ts">
  import { P } from 'flowbite-svelte';
  import { Timeline, TimelineGroup, TimelineItem } from '../components/timeline';
  import { t } from 'svelte-i18n';

  const title = 'ASOM-Net';
</script>

<TimelineGroup {title}>
  <Timeline>
    <TimelineItem
      title={$t('asom-net.title')}
      from={new Date(2008, 4)}
      to={new Date(2014, 8)}
      skills={['PHP', 'HTML', 'CSS', 'JavaScript']}
    >
      <P color="text-gray-700 dark:text-gray-300">
        {$t('asom-net.resume')}
      </P>
    </TimelineItem>
  </Timeline>
</TimelineGroup>

Maj 2008 - September 2014
