<template>
<div class="q-pa-md" >
    <p class="text-h6">Skills</p>
    <div class="row">
        <p class=""></p>
      <div class="col-6 col-sm-3"
      v-for="skill in skills" :key="skill">
          {{skill}}
      </div>
 </div>
 </div>
</template>

<script>

    export default {
        data(){
            return{
                skills: ['Java', 'Spring(boot,batch,JPA)','Apache Kafka','Apache Spark',
                 'Jdbi' ,'OSGI', 'Resilience4j', 'ANTLR', 'Cplex', 'Mysql', 'H2',
                 'Swagger', 'Docker', 'Jenkins', 'SonarQube', 'Fortify', 'Junit', 'Mockito','WireMock', 'Git','IBM RTC', 'Splunk', 
                 'Shell scripting', 'jaxb','RESTful services', 'Agile',
                 'vue.js','quasar','javascript']
            }
        } 
    }
    
</script>