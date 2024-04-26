<script lang="ts">
  import { TolgeeProvider, Tolgee, DevTools, FormatSimple, BackendFetch } from '@tolgee/svelte';

  const tolgee = Tolgee()
    .use(DevTools())
    .use(FormatSimple())
    .use(BackendFetch({ prefix: 'https://cdn.tolg.ee/a195ca7439eb3915750960a830c12766' }))
    .init({
      language: 'da',

      // for development
      apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
      apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
      availableLanguages: ['da', 'en', 'es'],
      // for production
      staticData: {}
    });
</script>

<TolgeeProvider {tolgee}>
  <div slot="fallback">Loading...</div>
  <slot />
</TolgeeProvider>
