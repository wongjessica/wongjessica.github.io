<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>CUNY Hunter College</template>
      Obtained Bachelor's Degree in May 2021 | GPA 3.7<br>
      Activities: Hunter ACM Club, Women in CS Club, Open Source Club, Google Developer Student Club  

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>
      NASA @ Goddard Space Flight Center | August 2020 - April 2022 <br>
      For more information, see my resume or LinkedIn.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Blog</template>
      Will create a link to my blog, work in progress.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Communication</template>
      Email me at jessicawongdev@gmail.com or message me on LinkedIn if you want to chat.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Hobbies and Passions</template>
      My main hobbies include coding, singing, songwriting, creative writing, reading books, building new things,
      rubiks cubing, Tetris, video gaming, and baking.
  </WelcomeItem>
</template>
