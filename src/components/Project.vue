<template>
<div>
  <p class="text-h5">Projects</p>
 <div class="q-mt-lg">
 
      <q-expansion-item
            expand-icon-toggle
             expand-separator
             group="proj"
            @click.native="onClick(project.link)"
            v-for="(project, index) in projects"
            :style="index === 0 && 'margin-top: 20px'"
            icon="code"
            :label="project.name"
            :key="index"
            :caption="project.tech"
            
      >
    
          <q-card>
          <q-card-section>
            {{project.description}}
          </q-card-section>
        </q-card>
          </q-expansion-item>

 </div>
</div>
</template>

<script>
import { openURL } from 'quasar'
    export default {
        data() {
          return {
            projects: [
			 {name: 'jBatchProcessing', link: 'https://github.com/aleeee/jBatchProcessing' , image: './assets/images/springbatch.png', 
       tech: 'Springboot,Spring batch,h2',description: 'parallel batch process to load stock history data from yahoo finance'
       },
			 {name: 'Spark', link: 'https://github.com/aleeee/SparkUtils', image: './assets/images/esKafkaBoot.png'
       ,tech: 'Apache Spark, Springboot, java11' , description: 'Apache Spark utils to stream tweets from kafka and analyze thier sentiments' +
       'components to perform stock anaylysis'},
			 {name: 'springboot-elasticserach-kafka', link: 'https://github.com/aleeee/springboot-elasticserach-kafka' , image: './assets/images/bootEskafka.png', 
       tech: 'Elasticsearch,Springboot,Apache Kafka', description: 'Rest api to search and filter tweets, to stream tweeets '
       +'to elastic search and kafka'},
			 {name: 'VueTodo', link: 'https://github.com/aleeee/quasar-todo' , image: './assets/images/quasartodo.png', 
       tech: 'quasar, vue.js', description: 'simple to do app using vue.js and quasar'},
			  {name: 'DevOps', link: 'https://github.com/aleeee/node_xpres_nginx_docker', image: './assets/images/devops.png', 
        tech: 'Docker , Node.js, Express.js, Redis,Nginx', description: 'DevOps template to deploy Node.js app on dev and production' +
        ' servers. created from freecodecamp.org tutorial.'
        },
			  {name: 'Vue D3', link: 'https://github.com/aleeee/vue3D3', image: './assets/images/map.png',
         tech: 'D3,vue.js', description: 'world map and cities visualization'},

			 ]
          }
        },
        methods:{
           onClick: function (link) {
      openURL(link)
    }
        }
    }
    
</script>