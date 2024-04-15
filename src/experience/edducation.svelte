<script lang="ts">
  import { P } from 'flowbite-svelte';
  import { t } from 'svelte-i18n';
  import { Timeline, TimelineGroup, TimelineItem } from '../components/timeline';

  const title = 'Uddannelse';
</script>

<TimelineGroup {title}>
  <Timeline>
    <TimelineItem
      title={$t('computer_science.title')}
      from={new Date(2010, 7)}
      to={new Date(2013, 0)}
      skills={['ASP.NET', 'C#', 'Java']}
    >
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('computer_science.part1')}
      </P>
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('computer_science.part2')}
      </P>
      <P weight="light" class="whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('computer_science.part3')}
      </P>
    </TimelineItem>

    <TimelineItem
      title={$t('stx.title')}
      from={new Date(2006, 7)}
      to={new Date(2009, 6)}
      skills={['Dansk', 'Engelsk', 'Billedkunst', 'Fysik', 'Matematik']}
    >
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('stx.part1')}
      </P>
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('stx.part2')}
      </P>
      <P weight="light" class="whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('stx.part3')}
      </P>
    </TimelineItem>
  </Timeline>
</TimelineGroup>
