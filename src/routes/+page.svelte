<script lang="ts">
  import { Group, Heading, P, Span, Timeline, TimelineItem, Blockquote, Hr } from 'flowbite-svelte';
  import { GithubSolid, LinkedinSolid, FacebookSolid, DiscordSolid } from 'flowbite-svelte-icons';

  import { t } from 'svelte-i18n';
  import Golfbox from '../experience/golfbox.svelte';
  import AsomNet from '../experience/asom-net.svelte';
  import Edducation from '../experience/edducation.svelte';

  const timelineStyle = 'border-dashed';
  const groupDivStyle = 'border-none bg-transparent dark:bg-transparent p-0';
  const groupOlStyle = 'divide-y-0';

  const social = [
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
      name: 'facebook',
      url: 'https://facebook.com/kristianlist',
      icon: FacebookSolid
    },
    {
      name: 'discord',
      url: 'https://discord.com/kristianlist',
      icon: DiscordSolid
    }
  ];
</script>

<div
  class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
>
  <div class="justify-between gap-4 lg:flex">
    <div class="flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:py-24">
      <!-- intro -->
      <div>
        <Heading tag="h1" class="leading-relaxed">Kristian List</Heading>
        <Heading tag="h4" class="">
          <Span gradient>Full Stack Udvikler</Span></Heading
        >
        <p>Kort intro her</p>
      </div>
      <!-- nav -->
      <div class="flex flex-col gap-2">
        <a href="#about" class="line-height-3 hover:text-xl active:text-xl">about</a>
        <a href="#experience">experience</a>
        <a href="#education">education</a>
        <a href="#contact">contact</a>
      </div>

      <!-- social -->
      <div class="flex flex-row gap-2 py-6">
        {#each social as social}
          <a href={social.url}><svelte:component this={social.icon} class="lg:h-8 lg:w-8" /></a>
        {/each}
      </div>
    </div>
    <div class="flex flex-col lg:w-1/2 lg:py-24">
      <!-- about -->
      <div id="about" class="mb-24">
        <P weight="normal" class="mb-2 mt-8">
          Jeg er en erfaren softwareudvikler der er kendt for en holistisk tilgang til udvikling og
          min interesse i at tilegne mig ny viden.
        </P>
        <P weight="normal" class="mb-2">
          Med nysgerrighed og en reflekterende tankegang nyder jeg at udforske nye teknologier og
          metoder for at udvide mit kendskab til software udvikling der er i konstant udvikling.
        </P>
        <P weight="normal" class="mb-2">
          Min erfaring som full stack udvikler gør det muligt for mig at betragte systemer fra alle
          perspektiver, mens min erfaring inden for webinfrastruktur sikrer robuste og skalerbare
          løsninger.
        </P>
        <P weight="normal" class="mb-2">
          Jeg er stolt af min evne til at tackle komplekse problemer med en rolig og fokuseret
          tilgang, og jeg stræber altid efter at levere resultater af høj kvalitet, der opfylder
          både tekniske og forretningsmæssige krav.
        </P>
      </div>

      <!-- experience -->
      <div id="experience">
        <Golfbox />
        <AsomNet />
      </div>

      <!-- education -->
      <div id="experience">
        <Edducation />
      </div>

      <!-- contact -->
      <div id="contact"></div>
    </div>
  </div>
</div>
