<script lang="ts">
  import { Blockquote, Heading, P, Span } from 'flowbite-svelte';
  import {
    GithubSolid,
    LinkedinSolid,
    DiscordSolid,
    EnvelopeSolid,
    PhoneSolid
  } from 'flowbite-svelte-icons';

  import Golfbox from '../experience/golfbox.svelte';
  import AsomNet from '../experience/asom-net.svelte';
  import Edducation from '../experience/edducation.svelte';
  import { page } from '$app/stores';
  import { getTranslate, getTolgee } from '@tolgee/svelte';

  const tolgee = getTolgee(['language']);

  const { t } = getTranslate();

  $: external = [
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

  $: links = [
    {
      title: $t('about'),
      hash: '#about'
    },
    {
      title: $t('experience'),
      hash: '#experience'
    },
    {
      title: $t('education'),
      hash: '#education'
    }
  ];
</script>

<div
  class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans antialiased md:px-12 md:py-20 lg:px-24 lg:py-0"
>
  <div class="justify-between gap-4 lg:flex">
    <div class="flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:py-24">
      <!-- intro -->
      <div class="-z-10 flex flex-col items-center">
        <!-- image -->
        <div class="relative h-40 w-40 justify-self-center lg:h-60 lg:w-60">
          <img src="profile.jpg" alt="profile" class="profile rounded-full object-cover" />

          <img
            src="sombrero.png"
            alt="sombrero"
            class="absolute top-0 -mt-4 w-fit scale-x-[-1]"
            class:hidden={$tolgee.getLanguage() !== 'es'}
          />
        </div>

        <Heading tag="h1" class="w-auto leading-loose">Kristian List</Heading>
        <Heading tag="h4" class="w-auto leading-3">
          <Span gradient>{$t('full-stack-developer')}</Span></Heading
        >
      </div>
      <!-- nav -->
      <div class="hidden flex-col items-center gap-2 lg:flex">
        {#each links as link}
          <a
            href={link.hash}
            class="text-xl dark:hover:text-secondary-400 [&.active]:text-secondary-300"
            class:active={$page.url.hash === link.hash}>{link.title}</a
          >
        {/each}
      </div>

      <!-- social -->
      <div class="flex flex-row justify-center gap-2 py-6">
        {#each external as ex}
          <a href={ex.url} target="_blank"
            ><svelte:component this={ex.icon} class="lg:h-8 lg:w-8" alt={ex.name} /></a
          >
        {/each}
      </div>
    </div>
    <div class="flex flex-col lg:w-1/2 lg:py-24">
      <!-- about -->
      <div id="about" class="mb-48 mt-24">
        <Blockquote italic={false}>
          <P class="mb-2 mt-8">
            {$t('about-me.part1')}
          </P>
          <P weight="light" class="mb-2">
            {$t('about-me.part2')}
          </P>
          <P weight="light" class="mb-2">
            {$t('about-me.part3')}
          </P>
          <P weight="light" class="mb-2">
            {$t('about-me.part4')}
          </P>
        </Blockquote>
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
  img.profile {
    --shadowLength: 1rem;
    --shadowLengthMinus: calc(-1 * var(--shadowLength));
    box-shadow: 0 0 calc(var(--shadowLength) * 2) silver;
    filter: drop-shadow(var(--shadowLengthMinus) 0 0.5em hsla(180, 100%, 50%, 0.4))
      drop-shadow(var(--shadowLength) 0 0.5em hsla(60, 100%, 50%, 0.4));
  }
  a.active::before {
    content: '< ';
  }

  a.active::after {
    content: ' >';
  }
</style>
