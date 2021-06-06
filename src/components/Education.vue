<template>
    <div class="q-px-lg q-pb-md" id="education">
    <q-timeline layout="dense" color="secondary">
      <q-timeline-entry heading >
       <p class="text-h5">Education</p>
      </q-timeline-entry>
      <q-timeline-entry v-for="(education ,index) in educations" :key="index"
        :title=education.name
        :subtitle="schoolAndLocation(education)"
        side="right"
        icon="date_range"
      >
       
      </q-timeline-entry>
    </q-timeline>

 </div>
 
</template>

<script>

    export default {
        data(){
            return {
                educations: [
                    {name: 'Msc. in Computer Science And Networking',school: 'Pisa University and Sant\'Anna School of Advanced Studies',
                    location: 'Pisa,Italy'},
                    {name: 'Bsc in Computer Science',school: 'Debre Berhan University', location: 'Debre Berhan,Ethiopia'}
                    ]
            }
        },
         methods: {
          schoolAndLocation(education){
             return education.school +',' + education.location
          }
        }
    }
    
</script>