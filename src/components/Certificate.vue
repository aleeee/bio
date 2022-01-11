<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slides"
      thumbnails
      infinite
      control-type="push"
      control-color="green"
      arrows
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = true"
      @mouseleave="autoplay = true"
    >
     
      <q-carousel-slide :name="1" img-src="~assets/cert/Kafka_concepts.pdf-1.jpg" />
      <q-carousel-slide :name="2" img-src="~assets/cert/Apache_Kafka_Deployment_Operating_Tasks.pdf-1.jpg" />
<q-carousel-slide :name="3" img-src="~assets/cert/AWS_Developer_Associate_Amazon_Elastic_Compute_Cloud.pdf-1.jpg" />
<q-carousel-slide :name="4" img-src="~assets/cert/Back-end_Apps_Java_Message_Service_(JMS).pdf-1.jpg" />
<q-carousel-slide :name="5" img-src="~assets/cert/DevOps_with_Ansible_Overview.pdf-1.jpg" />
<q-carousel-slide :name="6" img-src="~assets/cert/Introducing_Apache_Spark_for_AI_Development.pdf-1.jpg" />
<q-carousel-slide :name="7" img-src="~assets/cert/Java_SE_11_Programmer_II_Core_JVM_Enhancements_Features.pdf-1.jpg" />
<q-carousel-slide :name="8" img-src="~assets/cert/Java_SE_11_Programmer_II_Fundamentals.pdf-1.jpg" />
<q-carousel-slide :name="9" img-src="~assets/cert/Java_Spring_Cloud_Introduction_to_Microservices.pdf-1.jpg" />
<q-carousel-slide :name="10" img-src="~assets/cert/Java_Spring_Cloud_Managing_Microservices_and_REST_Architecture.pdf-1.jpg" />
<q-carousel-slide :name="11" img-src="~assets/cert/Java_Spring_Cloud_SOAP_Development_of_Microservices.pdf-1.jpg" />
<q-carousel-slide :name="12" img-src="~assets/cert/Kubernetes_Clustering_Containers.pdf-1.jpg" />
<q-carousel-slide :name="13" img-src="~assets/cert/Kubernetes_Manifests,_Declaratives,_Imperatives.pdf-1.jpg" />
<q-carousel-slide :name="14" img-src="~assets/cert/Kubernetes_Pods,_Deployments,_Services,_Namespaces,_DaemonSets.pdf-1.jpg" />
<q-carousel-slide :name="15" img-src="~assets/cert/Microsoft_Azure_Fundamentals_App_Services.pdf-1.jpg" />
<q-carousel-slide :name="16" img-src="~assets/cert/Microsoft_Azure_Fundamentals_Cloud_Computing.pdf-1.jpg" />
<q-carousel-slide :name="17" img-src="~assets/cert/Microsoft_Azure_Fundamentals_Managing_Azure_Services.pdf-1.jpg" />
    </q-carousel>
  </div>
</template>

<script>


export default {
  data () {
      
    return {
      slides: 1,
       autoplay: true
    }
  }
}
</script>