<template>
  <section>
    <GitHub />
    <HomeNavbar />
    <HomeMain />
    <HomeFooter />
    <el-backtop :visibility-height="20" />
  </section>
</template>

<script>
import HomeNavbar from './components/HomeNavbar.vue';
import HomeMain from './components/HomeMain.vue';
import HomeFooter from './components/HomeFooter.vue';
import GitHub from '@/components/GitHub.vue';

export default {
  components: {
    HomeNavbar,
    HomeMain,
    HomeFooter,
    GitHub,
  },
};
</script>
