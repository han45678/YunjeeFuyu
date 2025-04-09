<script setup>
import { ref } from 'vue'
const splideRef = ref(null)
const switch_splide = (data) => {
  splideRef.value?.splide.go(data)
}

</script>
<template>
  <section class="team user-n w-full relative">
    <div class="team_title">
      <img class="en block md:hidden" src="@/section/s5/en_title_m.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />
      <img class="en hidden md:block" src="@/section/s5/en_title.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />

      <img class="cn block md:hidden" src="@/section/s5/cn_title_m.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />
      <img class="cn hidden md:block" src="@/section/s5/cn_title.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />
    </div>
    <div class="wrapper">
      <Splide ref="splideRef" :options="{
        type: 'fade',
        autoplay: true,
        interval: 5000,
        speed: 1000,
        arrows: false,
        pagination: true,
        pagination: false,
        drag: true,
        perPage: 1,
        rewind: true  // 👈 這行啟用循環
      }">

        <SplideSlide>
          <div class="item">
            <div class="pic">
              <img class="block md:hidden" src="@/section/s5/morning_m.webp" />
              <img class="hidden md:block" src="@/section/s5/morning.webp" />

              <span class="br font-['Noto_Sans_TC'] text-[#fff]">外觀3D示意圖</span>
            </div>
            <div class="text">
              <h3 class="font-['Noto_Serif_TC'] text-[#AD9752]" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="500">
                城市建築<br class="hidden md:block">時間刻度
              </h3>
              <p class="font-['Noto_Sans_TC'] text-[#000]" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="500">
                以北歐新建築為靈感，在簡約調性之中營造序列的律動感，突顯時間軸意象，同時在充滿秩序感的街區，展現細節層次，呼應新北地段隨著時間序列不停發展進化的精神。
              </p>
              <div class="arrow" @click="switch_splide(1)">
                <span class="font-['Noto_Sans_TC'] text-[#AD9752]">夜景Night</span>
                <img src="@/section/s5/prev.webp" alt="arrow">
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="item">
            <div class="pic">
              <img class="block md:hidden" src="@/section/s5/night_m.webp" />
              <img class="hidden md:block" src="@/section/s5/night.webp" />

              <span class="br font-['Noto_Sans_TC'] text-[#fff]">外觀3D示意圖</span>
            </div>
            <div class="text">
              <h3 class="font-['Noto_Serif_TC'] text-[#AD9752]">
                城市建築<br class="hidden md:block">時間刻度
              </h3>
              <p class="font-['Noto_Sans_TC'] text-[#000]">
                以北歐新建築為靈感，在簡約調性之中營造序列的律動感，突顯時間軸意象，同時在充滿秩序感的街區，展現細節層次，呼應新北地段隨著時間序列不停發展進化的精神。
              </p>
              <div class="arrow" @click="switch_splide(0)">
                <img src="@/section/s5/next.webp" alt="arrow">
                <span class="font-['Noto_Sans_TC'] text-[#AD9752]">日景Day</span>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>

    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.team {

  .team_title {
    width: 100%;
    height: size-m(145);
    padding: size-m(12) 0 0 0;
    background-image: url(@/section/s3/title_bg.webp);
    background-size: cover;
    background-position: center center;

    @media screen and (min-width:768px) {
      padding: size(60) 0 0 0;
      height: size(315);
    }

    .en {
      width: size-m(320);
      margin: size-m(35) auto size-m(10) auto;

      @media screen and (min-width:768px) {
        max-width: size(1880);
        margin: 0 auto size(30) auto;
      }
    }

    .cn {
      margin: 0 auto;

      @media screen and (min-width:768px) {
        width: size(510);
        margin: 0 auto;
      }
    }
  }

  .wrapper {
    .item {
      width: 100%;
      position: relative;

      .pic {
        width: 100%;
        position: relative;

        img {
          width: 100%;
        }

        span {
          position: absolute;

          &.br {
            font-weight: 400;
            line-height: 1;
            letter-spacing: 0.03em;
            font-size: size-m(10);
            bottom: size-m(15);
            right: size-m(15);

            @media screen and (min-width:768px) {
              font-size: size(17);
              bottom: size(15);
              right: size(15);
            }
          }
        }
      }

      .text {
        padding: size-m(15) size-m(45) size-m(30) size-m(45);
        background: linear-gradient(to right, #fff, #E6E0D1);

        @media screen and (min-width:768px) {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          width: size(460);
          height: size(550);
          background: linear-gradient(to right, #fff, #E6E0D1);
          padding: size(50) size(70);
        }

        h3 {
          font-weight: 600;
          font-size: size-m(25);
          line-height: size-m(38);
          letter-spacing: 0.18em;
          margin-bottom: size-m(10);
          text-align: center;

          @media screen and (min-width:768px) {
            font-size: size(48);
            line-height: size(68);
            letter-spacing: 0.2em;
            margin-bottom: size(20);
            text-align: left;
          }
        }

        p {
          font-weight: 400;

          font-size: size-m(12);
          line-height: size-m(22);
          letter-spacing: 0.03em;
          margin-bottom: size-m(20);

          @media screen and (min-width:768px) {
            font-size: size(23);
            line-height: size(37);
            margin-bottom: size(20);
          }
        }

        .arrow {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          cursor: pointer;
          gap: size-m(10);

          @media screen and (min-width:768px) {
            margin-top: size(20);
            justify-content: left;
            gap: size(20);
          }

          span {
            font-weight: 400;

            @media screen and (min-width:768px) {
              font-size: size(22);
              letter-spacing: 0.03em;
            }

          }

          img {
            width: size-m(80);

            @media screen and (min-width:768px) {
              width: auto;
            }
          }
        }
      }
    }

    .splide {
      width: 100%;
    }
  }
}
</style>
