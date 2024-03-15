<script lang="ts">
  import { Blockquote } from 'flowbite-svelte';
  import TimelineGroup from '../components/timeline-group.svelte';
  import Timeline from '../components/timeline.svelte';
  import { t } from 'svelte-i18n';
  import TimelineItem from '../components/timeline-item.svelte';

  const title = 'ASOM-Net';
</script>

<TimelineGroup {title}>
  <Timeline>
    <TimelineItem
      title="IT Support & Web Developer"
      date="Maj 2008 - September 2014"
      skills={['PHP', 'HTML', 'Linux']}
    >
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        {$t('asom-net resume')}
      </p>
    </TimelineItem>
  </Timeline>
</TimelineGroup>
