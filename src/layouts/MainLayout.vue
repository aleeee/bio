<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-cyan-8">
        
      </q-header> 

<q-drawer  padding
        show-if-above
        :width="400"
        :breakpoint="600"
        content-class="bg- grey-5   text-green-6"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
           <Link
          v-for="link in links"
          :key="link.title"
          v-bind="link"
        />
          
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../assets/programmer.png">
            </q-avatar>
            <div class="text-weight-bold">Alemu T. Metaferia</div>
            <div>alemutadesse8@gmail.com</div>
          </div>
        </q-img>
      </q-drawer>
   <q-page-container class="p-container scroll">
        <q-page class="q-pa-md">
          <bio ref="bio" id="bio"/>  
          <skill ref="skill" id="skill"/>
          <experience id="experience"/>
         <education id="education"/>
          <project id="project"/>
         
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>

import Experience from 'src/components/Experience.vue'
import Project from 'src/components/Project.vue'
import Bio from 'src/components/Bio.vue'
import Skill from 'src/components/Skills.vue'
import Link from 'components/Link.vue'
import Education from 'components/Education.vue'

const linksData = [
  {
    title: 'Bio',
    caption: 'bio',
    icon: 'info',
    link: 'bio',
  },
  {
    title: 'Experience',
    caption: 'experience',
    icon: 'work',
    link: 'experience'
  },
  {
    title: 'Skills',
    caption: 'skills',
    icon: 'keyboard',
    link: 'skill'
  },
   {
    title: 'Education',
    caption: 'education',
    icon: 'school',
    link: 'education'
  },
  {
    title: 'Projects',
    caption: 'projects',
    icon: 'code',
    link: 'project'
  }
];

export default {
    data() {
        return{
            bio: {
			name: 'Alemu Tadesse Metaferia',
      email: 'alemutadesse8@gmail.com'},
        links: linksData
        }
    },
    components: { Link, Experience, Project,Bio,Skill ,Education}
    
}
</script>

<style lang="sass" scoped>

.p-container 
  width: 90%
</style>

