<script lang="ts">
  import { P } from 'flowbite-svelte';
  import { Timeline, TimelineGroup, TimelineItem } from '../components/timeline';
  import { getTranslate } from '@tolgee/svelte';

  const { t } = getTranslate();

  const title = 'GolfBox A/S';
</script>

<TimelineGroup {title}>
  <P class="mb-8">
    {$t('golfbox.description')}
  </P>
  <Timeline>
    <TimelineItem
      title="Head of Project Management"
      from={new Date(2021, 7)}
      to={null}
      skills={['C#', 'SQL', 'Excel', 'Git', 'Jira', 'Node.js', 'SvelteKit', 'Tailwindcss', 'NPM']}
    >
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.head-of-project-management.part1')}
      </P>
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.head-of-project-management.part2')}
      </P>
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.head-of-project-management.part3')}
      </P>
      <P weight="light" class="whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.head-of-project-management.part4')}
      </P>
    </TimelineItem>

    <TimelineItem
      title="Technical Product Manager - ProPlanner"
      from={new Date(2019, 11)}
      to={new Date(2021, 7)}
      skills={['C#', 'ASP.NET', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Redmine']}
    >
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.technical-product-manager.part1')}
      </P>

      <P weight="light" class="whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.technical-product-manager.part2')}
      </P>
    </TimelineItem>

    <TimelineItem
      title="Senior System Engineer"
      from={new Date(2018, 4)}
      to={new Date(2019, 11)}
      skills={['C#', 'ASP.NET', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git', 'Gulp']}
    >
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.senior-system-engineer.part1')}
      </P>
      <P weight="light" class="whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.senior-system-engineer.part2')}
      </P>
    </TimelineItem>

    <TimelineItem
      title="System Engineer"
      from={new Date(2014, 9)}
      to={new Date(2018, 4)}
      skills={['C#', 'ASP.NET', 'JavaScript', 'HTML', 'CSS', 'SQL']}
    >
      <P weight="light" class="mb-2 whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.system-engineer.part1')}
      </P>
      <P weight="light" class="whitespace-pre-wrap" color="text-gray-700 dark:text-gray-200">
        {$t('golfbox.system-engineer.part2')}
      </P>
    </TimelineItem>
  </Timeline>
</TimelineGroup>
