<template>
  <el-row
    class="header"
   :style="{top: isShow ? 0 : '', backgroundColor: isShow ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 1)'}"
    tag="header"
    type="flex"
    justify="space-between"
    align="middle"
  >
    <a class="header__logo" href="/">
      <img
        class="logo__image"
        src="https://classics.oss-cn-beijing.aliyuncs.com/app/logo.png"
        alt="logo"
      />
      <h1 class="logo__text">古典名著苑</h1>
    </a>
    <nav class="header__navbar">
      <a
        class="navbar__item"
        :style="{color: activeIndex === index ? '#000' : ''}"
        v-for="(item, index ) of nav"
        :key="index"
        :href="item.url"
        :title="item.title"
        @click="handleNavbarClick(index, $event)"
        target="_blank"
      >{{item.name}}</a>
    </nav>
  </el-row>
</template>

<script>
import { scrollTransition } from '@/utils/utils';

export default {
  data() {
    return {
      isShow: false,
      activeIndex: 0,
      nav: [
        {
          name: '首页',
          url: '',
          title: '',
        },
        {
          name: '联系我们',
          url: '',
          title: '',
        },
        {
          name: '知晓程序',
          url: 'https://minapp.com/user/78359833/',
          title: '知晓程序--古典名著苑',
        },
      ],
    };
  },
  methods: {
    handleNavbarClick(index, e) {
      if (index !== 2) e.preventDefault();
      switch (index) {
        case 0:
          scrollTransition(0, 250);
          this.activeIndex = 0;
          break;
        case 1:
          scrollTransition(600, 250);
          this.activeIndex = 1;
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop >= 350) {
        this.isShow = true;
      } else this.isShow = false;
      if (scrollTop >= 450) this.activeIndex = 1;
      else this.activeIndex = 0;
    };
  },
};
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/utils.less';
@media screen and (max-width: 500px) {
  .header__navbar .navbar__item {
    display: none;
  }
  .header__logo {
    margin: 0 auto;
  }
  .header {
    padding: 0;
  }
}
.header {
  position: sticky;
  z-index: 999;
  height: 60px;
  padding: 0 5vw;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 1s;
  .header__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    text-decoration: none;
    .logo__image {
      width: 36px;
      height: 36px;
      border-radius: 4px;
    }
    .logo__text {
      margin-left: 10px;
      font-family: "webfont";
      font-weight: 600;
      font-size: 24px;
      color: #535659;
    }
  }
  .header__navbar {
    display: flex;
    align-items: center;
    padding: 0 15px;
    .navbar__item {
      padding: 20px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.5);
      text-decoration: none;
      transition: color 0.4s;
      &:hover {
        color: #000;
        font-weight: 500;
      }
    }
  }
}
</style>
