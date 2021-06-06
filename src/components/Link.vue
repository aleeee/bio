<template>
  <q-item
    clickable
     @click.prevent="scrollMe()"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
     
    </q-item-section>
  </q-item>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
,
    methods:{
      scrollMe()
      {
        document.getElementById(this.link).scrollIntoView()
      }
      ,
       scrollToElement () {
        
         console.log(this.link)
         //this.link.open()
          const target = getScrollTarget(this.link)
          const offset = el.offsetTop
          const duration = 1000
          setScrollPosition(target, offset, duration)
}
}
}
</script>
