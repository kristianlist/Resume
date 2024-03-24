<script lang="ts">
  import { Blockquote, P } from 'flowbite-svelte';
  import { Timeline, TimelineGroup, TimelineItem } from '../components/timeline';
  import { t } from 'svelte-i18n';

  const title = 'GolfBox A/S';
</script>

<TimelineGroup {title}>
  <P slot="description" class="mb-8">
    Jeg har i min tid hos GolfBox haft mange forskellige roller, og har i høj grad været med til at
    præge både de teknogiske valg, samt den organisatorisk retning.
    <br />
    Fra første dag, har jeg været nysgerig og opsøgende, og det har gjort at jeg i dag har fået tildelt
    meget ansvar og er en aktiv del af udviklingen af alle software løsninger i GolfBox, både interne
    og eksterne.
    <br />
    De teknologiske rammer for webudvikling er i dag et helt andet sted, end da jeg startede for næsten
    10 år siden, og det er enormt spændende at tage ny landvindinger og udvikle løsninger med teknologi
    der ikke fandtes tidligere.
  </P>
  <Timeline>
    <TimelineItem
      title="Head of Project Management"
      from={new Date(2021, 7)}
      to={null}
      skills={['C#', 'SQL', 'Excel', 'Git', 'Jira', 'Node.js', 'SvelteKit', 'Tailwind']}
    >
      <P color="text-gray-700 dark:text-gray-300 mb-2">
        I min nuværende stilling har jeg det overordnede ansvar for projektstyring, i samarbejde med
        vores CTO samt Tech leads på de enkelte produkter, hvor jeg selv er Tech lead på ProPlanner
        produktet. I det daglige har jeg stadig de samme opgaver og ansvarsområder som tidligere,
        men med en lavere kapacitet.<br />
        Jeg har i perioden også været med til at afholde interne ansættelsessamtaler for udviklere.
      </P>
      <P color="text-gray-700 dark:text-gray-300 mb-2">
        En af de første opgaver jeg stod i spidsen for, var et migrationsprojekt fra Redmine til
        Jira. Et skifte der strømlinede vores projektstyringsprocesser og har sikret overblik for
        interessenter, og bla. kan udviklere nu følge en sag direkte til dets repositories, hvilket
        har styrket deres overblik. Dette initiativ omfattede opsætning af skræddersyede workflows i
        Jira for at passe med udvikling og releaseprocesser for de enkelte teams.
      </P>
      <P color="text-gray-700 dark:text-gray-300 mb-2">
        Ved siden af Jira har jeg udviklet et website i Svelte, med det formål at kunne generere
        leverancedatoer på opgaver til deling med interessenter. Dette er i dag helt essentielt for
        GolfBox for at kunne imødekomme behovet om åbenhed fra vores kunder, samt muligheden for at
        kunne langtidsplanlægge.
      </P>
      <P color="text-gray-700 dark:text-gray-300">
        For nuværende har jeg til opgave at understøtte udviklere hos vores outsourcing-partner, og
        løbende sikre at tech stacken er anvendt korrekt, samt at best practices bliver efterlevet.
        <br />
        Sideløbende udvikler jeg et komponent blibliotek i SvelteKit som proof of concept, med intention
        om at blive benyttet til al fremtidig udvikling af UI i GolfBox. Når den har en tilfredsstillende
        funktionsniveau og indhold, vil jeg efter planen begynde at planlægge omlægning af de nuværende
        tech stacks.
      </P>
    </TimelineItem>

    <TimelineItem
      title="Technical Product Manager - ProPlanner"
      from={new Date(2019, 11)}
      to={new Date(2021, 7)}
      skills={['C#', 'ASP.NET', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Redmine']}
    >
      <P color="text-gray-700 dark:text-gray-300">
        Denne stilling er afstedkommet i forbindelse med afgang af den tidligere projectleder,
        hvilket affødte et behov for et tættere ejerskab af ProPlanner produktet. Det har derfor
        ultimativt været min opgave også at danne visionen for produktet fremadrettet, selvom tiden
        ikke har været til at implementere dem alle. Efter afgang af tidligere projektleder har jeg
        også fået ansvar for vores daværende projektstyrings-værktøj Redmine, og stået for at
        afholde grooming af backlogs.
      </P>
    </TimelineItem>

    <TimelineItem
      title="Senior System Engineer"
      from={new Date(2018, 4)}
      to={new Date(2019, 11)}
      skills={['C#', 'ASP.NET', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git', 'Gulp']}
    >
      <P color="text-gray-700 dark:text-gray-300">
        I denne stilling antog jeg en rolle som senior systemingeniør, hvor jeg fortsætter med de
        samme opgaver som tidligere, men nu også er involveret i planlægning, mentorering af nye
        medarbejdere og onboarding-processen. Jeg har i denne periode oplært 2 nye udviklere.
      </P>
    </TimelineItem>

    <TimelineItem
      title="System Engineer"
      from={new Date(2014, 9)}
      to={new Date(2018, 4)}
      skills={['C#', 'ASP.NET', 'JavaScript', 'HTML', 'CSS', 'SQL']}
    >
      <P color="text-gray-700 dark:text-gray-300">
        Jeg begyndte som front-end udvikler på vores ASP.NET WebForms-baserede Tournament produkt,
        hvor jeg udviklede nye features baseret på custom CSS og JavaScript. Denne rolle lagde grund
        for min overgang til et omskrivningsprojekt af ProPlanner, hvor jeg sammen med en anden
        udvikler benyttede ASP.NET MVC til en komplet omskrivning. Med primært fokus på
        front-end-implementering benyttede jeg CSS, JavaScript og Gulp til at effektivisere
        udviklingen og lave genbrugelige komponenter. Siden 2016 har jeg været den eneste udvikler
        og vedligeholder af ProPlanner, hvor jeg bestemmer den tekniske retning og sikrer løbende
        opdatering af teknologier og understøtter brugerbehov. Selvom min primære rolle har været
        som udvikler og vedligeholder af ProPlanner, har jeg også udviklet en bred forståelse for
        webinfrastruktur og driftsaspekter.
      </P>
    </TimelineItem>
  </Timeline>
</TimelineGroup>
