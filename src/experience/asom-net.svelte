<script lang="ts">
  import { Blockquote, P } from 'flowbite-svelte';
  import { Timeline, TimelineGroup, TimelineItem } from '../components/timeline';
  import { t } from 'svelte-i18n';

  const title = 'ASOM-Net';
</script>

<TimelineGroup {title}>
  <Timeline>
    <TimelineItem
      title="IT Support & Web Developer"
      date="Maj 2008 - September 2014"
      skills={['PHP', 'HTML', 'CSS', 'JavaScript']}
    >
      <P color="text-gray-700 dark:text-gray-300">
        {$t('asom-net resume')}
      </P>
    </TimelineItem>
  </Timeline>
</TimelineGroup>
