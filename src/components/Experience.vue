<template>
 <div class="q-mt-lg">
 
 <div class="q-px-lg q-pb-md" id="experience">
    <q-timeline layout="dense" color="secondary">
      <q-timeline-entry heading >
       <p class="text-h5"> Experience</p>
      </q-timeline-entry>
      <q-timeline-entry v-for="(experience ,index) in experiences" :key="index"
        :title="workAndCompany(experience)"
        :subtitle="dateRange(experience)"
        side="right"
        icon="date_range"
      >
        <div>
      <q-list dense bordered padding class="rounded-borders">
      <q-item  v-ripple v-for="(desc,index) in experience.description" :key="index" >
       
        <q-item-section >
          <div class="row">
         <div class="column justify-center">
          <q-icon name="radio_button_checked" size="18px" class="q-mr-xs"/>
          </div> 
          <div class="colum">
             
          <q-item-label class="row justfify-end">{{desc}}</q-item-label>
          </div>
        </div>
        </q-item-section>
      </q-item>
          </q-list>
        </div>
      </q-timeline-entry>
    </q-timeline>
 </div>
    
 </div>
</template>

<script>

    export default {
        data(){
          return {
            	experiences: [
                  {name: 'Software Engineer', startDate: 'Dec 2017', endDate:'present' ,company: 'NTT DATA'
                   ,description: ['Developed Integeration layer restful apis to mediate backend billing system with payment gateways and CRM systems.'
                                  ,'Implemented custom invoicing plugin to apply tax and refund items for Kill Bill billing system.'
                                  ,'Conducted unit, integration and performance testing.'
                                  ,'Developed several batch applications.'
                                  ,'Migrated test database to a new cloud server.'
                                  ,'Setup and installed apps on new test and production server.'
                                  ,'Optimized slow and long mysql queries.'
                   ]}
                  ,{name: 'Software Developer', startDate: 'Dec 2015', endDate: 'Jul 2017' ,company: 'Rjc Soft',
                  description: ['Worked on maintaing and adding new features on an old system.']
                  }
               ]
          }  
        },
        methods: {
          dateRange(experience){
             return experience.startDate+ '-' + experience.endDate
          },
          workAndCompany(experience){
             return experience.name+ ' @' + experience.company
          }
        }
    }
    
</script>