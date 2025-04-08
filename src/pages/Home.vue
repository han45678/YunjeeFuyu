<script setup>
import s1 from "@/section/s1.vue"
import s2 from "@/section/s2.vue"
import s3 from "@/section/s3.vue"
import s4 from "@/section/s4.vue"
import s5 from "@/section/s5.vue"
import s6 from "@/section/s6.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: false
})

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init();
  };
})
</script>

<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="雍雋品" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-white overflow-hidden font-['Noto_Sans_TC']">
    <h1 style="display:none;">樂居昀集</h1>
    <s1 />
    <s2 />
    <s3 />
    <s4 />
    <s5 />
    <s6 />
    <Order />
  </div>
</template>

<style lang="scss">
  @import "@/assets/style/function.scss";
  .user-n{
    user-select:none;
  }
</style>


