<template>
  <div>
    <HomeNavbar />
    <HomeMain />
    <HomeFooter />
    <el-backtop :visibility-height="20" />
  </div>
</template>

<script>
import HomeNavbar from './components/HomeNavbar.vue';
import HomeMain from './components/HomeMain.vue';
import HomeFooter from './components/HomeFooter.vue';

export default {
  components: {
    HomeNavbar,
    HomeMain,
    HomeFooter,
  },
};
</script>
