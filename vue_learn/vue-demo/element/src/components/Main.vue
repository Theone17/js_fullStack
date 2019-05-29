<template>
  <div class="main-content">
    <Header></Header>
    <Slide></Slide>
    <router-view>
      <MainDetail>
      </MainDetail>
    </router-view>
  </div>
</template>

<script>
/* eslint-disable */
import Header from '@/components/common/Header'
import Slide from '@/components/common/Slide'
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {
    Header,
    Slide
  }
}
</script>