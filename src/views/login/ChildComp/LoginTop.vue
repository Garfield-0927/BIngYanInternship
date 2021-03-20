<template>

  <!-- 登陆界面的上半诗文部分 -->
  <div class="loginTop">
    <div class="poet">
      <div class="title">
        <p>雕刀</p>
        <p>席慕容</p>
      </div>

      <div class="poem">
        <p>也不过只是为了想让这个世界知道，</p>
        <p>反复与坚持之后，</p>
        <p>柔水终成雕刀。</p>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "LoginTop"
}
</script>

<style scoped lang="less">
.loginTop {
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .title {
    p:first-child {
      color: steelblue;
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 0;
    }

    p:last-child {
      color: grey;
      margin-top: 5px;
    }
  }

  p {
    text-align: center;
  }
}
</style>