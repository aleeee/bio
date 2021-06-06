<template>
<div>
  <p class="text-h5">Projects</p>
 <div class="q-mt-lg">
      <q-item v-ripple 
    clickable
    tag="a"
    target="_blank"
    :href="project.link"
     v-for="project in projects" :key="project.name"
  >
    <q-item-section
      v-if="project.image"
      avatar
    >
      <q-icon name="code" />
    </q-item-section>
        <q-item-section>
          <q-item-label>
            {{project.name}}
            </q-item-label>
        </q-item-section>

        
         <q-item-section side>
          <div class="row ">
            <q-icon name="build_circle" size="18px" />
            <q-item-label caption lines="1">{{project.tech}}</q-item-label>
           
          </div>
        </q-item-section>
      </q-item>
 </div>
</div>
</template>

<script>

    export default {
        data() {
          return {
            projects: [
			 {name: 'jBatchProcessing', link: 'https://github.com/aleeee/jBatchProcessing' , image: './assets/images/springbatch.png', 
       tech: 'Springboot,Spring batch,h2'},
			 {name: 'Spark', link: 'https://github.com/aleeee/SparkUtils', image: './assets/images/esKafkaBoot.png'
       ,tech: 'Apache Spark, Springboot, java11'},
			 {name: 'springboot-elasticserach-kafka', link: 'https://github.com/aleeee/springboot-elasticserach-kafka' , image: './assets/images/bootEskafka.png', 
       tech: 'Elasticsearch,Springboot,Apache Kafka'},
			 {name: 'Kafka', link: 'blue', image: './assets/images/esKafkaBoot.png', tech: 'Apache Kafka, Springboot'},
			 {name: 'VueTodo', link: 'https://github.com/aleeee/quasar-todo' , image: './assets/images/quasartodo.png', 
       tech: 'quasar, vue.js'},
			  {name: 'DevOps', link: 'https://github.com/aleeee/node_xpres_nginx_docker', image: './assets/images/devops.png', 
        tech: 'Docker , Node.js, Express.js, Redis,Nginx'},
			  {name: 'Vue D3', link: 'https://github.com/aleeee/vue3D3', image: './assets/images/map.png',
         tech: 'D3,vue.js'},

			 ]
          }
        }
    }
    
</script>