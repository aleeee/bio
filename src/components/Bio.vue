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
          bio: 'I am an enthusiastic software engineer consulting large financial and telecom companies. '+
          'My masters degree in computer science and networking from Sant\'Anna School of Advanced Studies and '+
          'Pisa University helped me to see software designs from multiple perspectives. '
           +'As a software engineer, I enjoy creating scalable and efficient applications providing our clients reliable'+
           ' products. Seeking an opportunity to use my diverse skills and knowledge and to be a reliable DevOps engineer.'
       
      }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  
</style>