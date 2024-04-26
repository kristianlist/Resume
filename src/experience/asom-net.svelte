<script lang="ts">
  import { P } from 'flowbite-svelte';
  import { Timeline, TimelineGroup, TimelineItem } from '../components/timeline';
  import { getTranslate } from '@tolgee/svelte';

  const { t } = getTranslate();

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
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('asom-net.part1')}
      </P>
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('asom-net.part2')}
      </P>
      <P weight="light" class="whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('asom-net.part3')}
      </P>
    </TimelineItem>
  </Timeline>
</TimelineGroup>
