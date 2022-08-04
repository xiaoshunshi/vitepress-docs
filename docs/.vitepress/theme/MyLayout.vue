<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-outline-before>  </template>
    <template #aside-outline-after>
      <div class="aside-outline-title">菜 鸟 少 年</div>
      <div class="tip">
        <div class="aside-outline">CSDN不要脸诓我许多散碎银两</div>
        <div class="aside-outline">老夫年少轻狂搭建Vite个人博客</div>
      </div>
    </template>
  </Layout>
</template>
<style scoped>
.aside-outline-title {
  text-align: center;
  color: #646cff;
  margin-bottom: 20px;
  direction: rtl;
        unicode-bidi: bidi-override;
}
.tip{
    display: flex;
    justify-content: space-around;
    
}
.aside-outline {
  color:#646cff;
  writing-mode: tb-rl;
}
</style>