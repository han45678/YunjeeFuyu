<script setup>
</script>
<template>
  <section class="brand user-n w-full relative">
    <div class="brand_title">
      <img class="en block md:hidden" src="@/section/s3/en_title_m.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />
      <img class="en hidden md:block" src="@/section/s3/en_title.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />

      <img class="cn block md:hidden" src="@/section/s3/cn_title_m.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />
      <img class="cn hidden md:block" src="@/section/s3/cn_title.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />
    </div>
    <div class="wrapper">
      <div class="pic">
        <div class="pic_item">
          <img src="@/section/s3/brand_pic01.webp" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" />
          <span class="br font-['Noto_Sans_TC'] text-[#fff]">情境示意圖</span>
        </div>
        <div class="pic_item">
          <img src="@/section/s3/brand_pic02.webp" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" />
          <span class="br font-['Noto_Sans_TC'] text-[#fff]">3D示意圖</span>
          <span class="tr font-['Noto_Sans_TC'] text-[#fff]">中山區昀集柏寓</span>
        </div>
      </div>
      <div class="text">
        <div class="text_wrapper">
          <h3 class="font-['Noto_Serif_TC'] text-[#6E4D3B]" data-aos="fade-up" data-aos-duration="1000">
            <img src="@/section/s3/logo.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" />
            鍛造美學的時代建築
          </h3>
          <p class="font-['Noto_Sans_TC'] text-[#000]" data-aos="fade-up" data-aos-duration="1000">
            從台北市中心發跡的「樂居昀集」，致力以美學作為城市改造的起點，以「感官建築，靈魂空間」的品牌精神，將人們對建築的期待，從細緻感官體驗到身心靈的自在棲所為目標。樂居昀集指標個案—中山區精品宅「昀集柏寓」，在盛世繁華中山北路，打造世界旅人的酒店式寓所，促成北市100%完銷佳績，如今移師豪宅級精工團隊，進駐新北打造代表之作。
          </p>

          <img class="bottom_pic block md:hidden" src="@/section/s3/bottom_pic_m.webp" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="500" />
          <img class="bottom_pic hidden md:block" src="@/section/s3/bottom_pic.webp" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="500" />

          <p class="font-['Noto_Sans_TC'] text-[#000] block md:hidden" data-aos="fade-up" data-aos-duration="1000">
            「昀集柏寓」以「悠然之境，靜謐莊園」為主題，榮獲2024倫敦設計大獎 London Design Awards 銀獎
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.brand {
  background-image: url(@/section/s3/bg.webp);
  background-size: cover;
  background-position: center center;

  .brand_title {
    width: 100%;
    height: size-m(145);
    padding: size-m(12) 0 0 0;
    background-image: url(@/section/s3/title_bg.webp);
    background-size: cover;
    background-position: center center;
    position: relative;
    z-index: 1;

    @media screen and (min-width:768px) {
      padding: size(60) 0 0 0;
      height: size(315);
    }

    .en {
      width: size-m(320);
      margin: size-m(15) auto size-m(10) auto;

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
    @media screen and (min-width:768px) {
      padding: size(190) 0;
      display: flex;
    }

    .pic {
      margin-top: size-m(-25);
      display: flex;
      gap: size-m(5);

      @media screen and (min-width:768px) {
        margin-top: 0;
        width: 50.5%;
        gap: size(5);
      }

      .pic_item {
        position: relative;
        img {
          width: 100%;
        }

        span {
          position: absolute;

          &.br{
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

          &.tr{
            writing-mode: vertical-lr ;
            font-weight: 400;
            line-height: 1;
            letter-spacing: 0.03em;
            font-size: size-m(10);
            top: size-m(15);
            right: size-m(15);

            @media screen and (min-width:768px) {
              font-size: size(17);
              top: size(15);
              right: size(15);
            }
          }
        }
      }
    }

    .text {
      padding: size-m(35) size-m(45) size-m(10) size-m(45);

      @media screen and (min-width:768px) {
        padding: 0;
        width: 49.5%;

      }

      .text_wrapper {
        @media screen and (min-width:768px) {
          width: size(600);
          margin: 0 auto;
        }

        h3 {
          display: flex;
          align-items: center;
          font-weight: 600;

          font-size: size-m(20);
          line-height: size-m(38);
          letter-spacing: 0.18em;
          margin-bottom: size-m(15);

          @media screen and (min-width:768px) {
            font-size: size(38);
            line-height: size(52);
            letter-spacing: 0.2em;
            margin-bottom: size(56);
          }

          img {
            margin-right: size-m(10);
            width: 72.5px;

            @media screen and (min-width:768px) {
              margin-right: size(35);
              width: auto;
            }
          }
        }

        p {
          font-weight: 400;
          font-size: size-m(13);
          line-height: size-m(26);
          letter-spacing: 0.03em;
          margin-bottom: size-m(10);

          @media screen and (min-width:768px) {
            font-size: size(23);
            line-height: size(37);
            margin-bottom: size(105);
          }
        }

        .bottom_pic {
          margin: 0 auto size-m(10) auto;

          @media screen and (min-width:768px) {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
