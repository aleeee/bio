<template>
    <q-card 
      class="my-card text-white"
    >
      <q-card-section>
          
        <p>Hi there, <q-avatar><q-icon name="waving_hand" color="brown"/> </q-avatar>I'm<b> Alemu</b></p>
      </q-card-section>

      <q-card-section class="q-pt-none text-h6 text-weight-light">
        {{ bio }}
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  data(){
      return {
          bio: 'Software developer holding MS degree in Computer science and Networking'
+'with 6+ years of experience. Working on several projects for clients in different'
+'sectors including Telecom, Insurance and Motorway management. Experience'
+'in designing, coding, testing, integration, query writing, agile methodologies'
+'and web services. Seeking an opportunity to use my diverse skills and'
+ 'knowledge and to be a reliable DevOps engineer.'
       
      }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  
</style>