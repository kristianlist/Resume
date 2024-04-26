<script lang="ts">
  import '../app.pcss';
  import { CursorGradient, Header } from '../components/';
  import Tolgee from '../components/tolgee.svelte';
</script>

<!-- Background image -->
<div class="fixed bottom-0 left-0 right-0 top-0 -z-10 bg-[url('/bg.png')] bg-cover bg-center"></div>

<div
  class="min-h-screen font-sans text-secondary-800 transition-colors duration-200 ease-in-out dark:text-secondary-100"
>
  <Tolgee>
    <!-- Cursor gradient with background color -->
    <CursorGradient />
    <Header />
    <slot />
  </Tolgee>
</div>
