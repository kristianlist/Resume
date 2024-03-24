<script lang="ts">
  import { Heading, P, Span } from 'flowbite-svelte';
  import {
    GithubSolid,
    LinkedinSolid,
    DiscordSolid,
    EnvelopeSolid,
    PhoneSolid
  } from 'flowbite-svelte-icons';

  import { t } from 'svelte-i18n';
  import Golfbox from '../experience/golfbox.svelte';
  import AsomNet from '../experience/asom-net.svelte';
  import Edducation from '../experience/edducation.svelte';

  const external = [
    {
      name: 'github',
      url: 'https://github.com/kristianlist',
      icon: GithubSolid
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/kristianlist',
      icon: LinkedinSolid
    },
    {
      name: 'discord',
      url: 'https://discordapp.com/users/list5138',
      icon: DiscordSolid
    },
    {
      name: 'email',
      url: 'mailto:kristianl90@gmail.com',
      icon: EnvelopeSolid
    },
    {
      name: 'phone',
      url: 'tel:+45 3150 1726',
      icon: PhoneSolid
    }
  ];
</script>

<div
  class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
>
  <div class="justify-between gap-4 lg:flex">
    <div class="flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:py-24">
      <!-- intro -->
      <div class="flex flex-col items-center">
        <!-- image -->
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFsL6gP_TsCoQ/profile-displayphoto-shrink_800_800/0/1640008466235?e=1716422400&v=beta&t=Q8DEY1oQ9g1vf9ZJKa1vk6NTc_CCPHmVSwAcMEYemYo"
          alt="profile"
          class="-z-10 h-40 w-40 justify-self-center rounded-full object-cover lg:h-60 lg:w-60"
        />

        <Heading tag="h1" class="w-auto leading-loose">Kristian List</Heading>
        <Heading tag="h4" class="w-auto leading-3">
          <Span gradient>{$t('full-stack-developer')}</Span></Heading
        >
      </div>
      <!-- nav -->
      <div class="hidden flex-col items-center gap-2 lg:flex">
        <a href="#about" class="line-height-3 hover:text-xl active:text-xl">{$t('about')}</a>
        <a href="#experience">{$t('experience')}</a>
        <a href="#education">{$t('education')}</a>
      </div>

      <!-- social -->
      <div class="flex flex-row justify-center gap-2 py-6">
        {#each external as ex}
          <a href={ex.url}
            ><svelte:component this={ex.icon} class="lg:h-8 lg:w-8" alt={ex.name} /></a
          >
        {/each}
      </div>
    </div>
    <div class="flex flex-col lg:w-1/2 lg:py-24">
      <!-- about -->
      <div id="about" class="mb-24">
        <P weight="normal" class="mb-2 mt-8">
          {$t('about-me.part1')}
        </P>
        <P weight="normal" class="mb-2">
          {$t('about-me.part2')}
        </P>
        <P weight="normal" class="mb-2">
          {$t('about-me.part3')}
        </P>
        <P weight="normal" class="mb-2">
          {$t('about-me.part4')}
        </P>
      </div>

      <!-- experience -->
      <div id="experience">
        <Golfbox />
        <AsomNet />
      </div>

      <!-- education -->
      <div id="education">
        <Edducation />
      </div>
    </div>
  </div>
</div>

<style>
  img {
    --shadowLength: 1rem;
    --shadowLengthMinus: calc(-1 * var(--shadowLength));
    box-shadow: 0 0 calc(var(--shadowLength) * 2) silver;
    filter: drop-shadow(var(--shadowLengthMinus) 0 0.5em hsla(180, 100%, 50%, 0.4))
      drop-shadow(var(--shadowLength) 0 0.5em hsla(60, 100%, 50%, 0.4));
  }
</style>
