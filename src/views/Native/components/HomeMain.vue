<template>
  <el-row class="main" tag="main" type="flex" justify="center" align="middle">
    <el-col class="main__exhibition" tag="section">
      <el-image
        class="exhibition__phone"
        src="https://classics.oss-cn-beijing.aliyuncs.com/app/%E7%A8%BF%E5%AE%9A%E8%AE%BE%E8%AE%A1%E5%AF%BC%E5%87%BA-20190816-134318.png"
        alt="手机"
        fit="contain"
      />
      <section class="exhibition__desc">
        <h2 class="exhibition__desc--name">古典名著苑</h2>
        <h3 class="exhibition__desc--explain">最全古典小说</h3>
        <img
          class="exhibition__desc--code"
          src="https://classics.oss-cn-beijing.aliyuncs.com/app/QRcode.jpg?x-oss-process=style/fade"
          alt="二维码"
        />
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
  height: calc(100vh - 60px);
  background: url("https://classics.oss-cn-beijing.aliyuncs.com/app/main-jpg.jpg?x-oss-process=style/fade")
    0 0 / cover no-repeat;
  .main__exhibition {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 500px;
    height: 500px;
    .exhibition__phone {
      width: 200px;
      height: 400px;
    }
  }

  .exhibition__desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 300px;
    color: #fff;
    .exhibition__desc--name {
      font-family: "webfont";
      font-weight: 600;
      font-size: 36px;
    }
    .exhibition__desc--explain {
      margin: 20px 0 40px 0;
      font-size: 22px;
    }
    .exhibition__desc--code {
      width: 180px;
      height: 180px;
    }
  }
}
</style>
