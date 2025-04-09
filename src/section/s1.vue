<template>
  <section class="banner user-n w-full relative">
    <img class="logo" src="@/section/s1/logo.webp" data-aos="fade" data-aos-duration="1000" data-aos-delay="500" /> 
    <img class="title" src="@/section/s1/title.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" />
    <img class="product_title" src="@/section/s1/product_title.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" />
    <img class="group" src="@/section/s1/group.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.banner {
  width: 100%;
  height: size-m(667);
  background: #fff;
  background-image: url(@/section/s1/bg.webp);
  background-size: cover;
  background-position: center center;
  padding: size-m(80) 0 0 0;
  @media screen and (min-width:768px) {
    height: size(1080);
    padding: size(130) 0 0 0;
  }
  
  .logo {
    width: size-m(240);
    margin: 0 auto size-m(30) auto;
    @media screen and (min-width:768px) {
      width: size(390);
      margin: 0 auto size(50) auto;
    }
  }

  .title {
    width: size-m(240);
    margin: 0 auto size-m(50) auto;
    @media screen and (min-width:768px) {
      width: size(390);
      margin: 0 auto size(60) auto;
    }
  }

  .product_title {
    width: size-m(305);
    margin: 0 auto size-m(60) auto;
    @media screen and (min-width:768px) {
      width: size(580);
      margin: 0 auto size(70) auto;
    }
  }

  .group {
    width: size-m(210);
    margin: 0 auto;
    @media screen and (min-width:768px) {
      width: size(390);
      margin: 0 auto;
    }
  }
  
}
</style>
