<script setup>
import { ref } from 'vue'

const splideRef = ref(null)

const goPrev = () => {
  splideRef.value?.splide.go('-1')
}

const goNext = () => {
  splideRef.value?.splide.go('+1')
}
const no = ref(0);

const switch_splide = (data) => {
  splideRef.value?.splide.go(data)
  no.value = data;
}

</script>
<template>
  <section class="team user-n w-full relative">
    <div class="team_title">
      <img class="en block md:hidden" src="@/section/s4/en_title_m.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />
      <img class="en hidden md:block" src="@/section/s4/en_title.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />

      <img class="cn block md:hidden" src="@/section/s4/cn_title_m.svg" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500" />
      <img class="cn hidden md:block" src="@/section/s4/cn_title.svg" data-aos="fade-up" data-aos-duration="1000"
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
            <div class="author">
              <div class="pic">
                <img src="@/section/s4/work/1/author.png" data-aos="fade-up" data-aos-duration="1000"
                  data-aos-delay="500" />
              </div>
              <div class="author_text">
                <img class="slogan" src="@/section/s4/work/1/slogan.png" data-aos="fade-up" data-aos-duration="1000"
                  data-aos-delay="500" />
                <h3 class="font-['Noto_Serif_TC'] text-[#AD9752]" data-aos="fade-up" data-aos-duration="1000"
                  data-aos-delay="500">雕塑城市記憶</h3>
                <h4 class="font-['Noto_Sans_TC'] text-[#675539]" data-aos="fade-up" data-aos-duration="1000"
                  data-aos-delay="500">
                  建築規劃 王成維建築師<br>王成維建築師事務所
                </h4>
              </div>
            </div>
            <div class="work">
              <div class="pic">
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/1/work01.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">3D示意圖</span>
                    <span class="tr font-['Noto_Sans_TC'] text-[#fff]">大同區　寶國建築</span>
                </div>
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/1/work02.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">3D示意圖</span>
                    <span class="tr font-['Noto_Sans_TC'] text-[#000]">新莊區　群曜維美</span>
                </div>
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/1/work03.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">3D示意圖</span>
                    <span class="tr font-['Noto_Sans_TC'] text-[#fff]">桃園市　大亮睦粼</span>
                </div>
              </div>
              <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                王成維建築師主張貼近土地紋理，打造契合當地生活節奏，以人為中心的建築哲學。深植於地域特性的理解，在簡約的設計語彙中，強化人與建築的連結空間，並與環境產生自然共鳴。作品遍布台北南港、信義、大同等精華區域，為城市打造集結生活記憶的美學量體。
                <br>
                <br>
                業績作品：●南港區 東驛家和 ●大同區 寶國建築 ●新莊區 群曜維美 ●桃園市 大亮睦粼
              </p>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div class="item">
            <div class="author">
              <div class="pic">
                <img src="@/section/s4/work/2/author.png" data-aos="fade-up" data-aos-duration="1000"
                  data-aos-delay="500" />
              </div>
              <div class="author_text">
                <img class="slogan" src="@/section/s4/work/2/slogan.png" />
                <h3 class="font-['Noto_Serif_TC'] text-[#AD9752]">注入文化美學</h3>
                <h4 class="font-['Noto_Sans_TC'] text-[#675539]">
                  公設設計 徐嫡嬪總監<br>沐易設計有限公司
                </h4>
              </div>
            </div>
            <div class="work">
              <div class="pic">
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/2/work01.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">3D示意圖</span>
                    <span class="tl font-['Noto_Sans_TC'] text-[#000]">中山區　昀集柏寓</span>
                </div>
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/2/work02.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">公設3D圖</span>
                    <span class="tl font-['Noto_Sans_TC'] text-[#fff]">中山區　昀集柏寓</span>
                </div>
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/2/work03.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">實景拍攝圖</span>
                    <span class="tl font-['Noto_Sans_TC'] text-[#000]">奎克咖啡　台中惠中店</span>
                </div>
              </div>
              <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                沐易設計融匯西方美學養份，力行跨界的策略性結盟，作品屢獲國際獎項肯定，如英國百大城市獎、美國MUSE金獎等。以經得起時代考驗的品味美學為指標，專注人的細緻感受，累積不少為城市地景，留下記憶刻痕的獨特作品。
                <br>
                <br>
                業績作品：●中山區 昀集柏寓 ●中山區 樂居微風旅店●台中七期 奎克咖啡旗艦店
              </p>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div class="item">
            <div class="author">
              <div class="pic">
                <img src="@/section/s4/work/3/author.png" data-aos="fade-up" data-aos-duration="1000"
                  data-aos-delay="500" />
              </div>
              <div class="author_text">
                <img class="slogan" src="@/section/s4/work/3/slogan.png" />
                <h3 class="font-['Noto_Serif_TC'] text-[#AD9752]">燈光映照詩意</h3>
                <h4 class="font-['Noto_Sans_TC'] text-[#675539]">
                  燈光設計 賴雨農總監<br>十聿照明設計有限公司
                </h4>
              </div>
            </div>
            <div class="work">
              <div class="pic">
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/3/work01.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">實景拍攝圖</span>
                    <span class="tr font-['Noto_Sans_TC'] text-[#fff]">台北101</span>
                </div>
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/3/work02.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">實景拍攝圖</span>
                    <span class="tr font-['Noto_Sans_TC'] text-[#fff]">上海外灘</span>
                </div>
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/3/work03.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">實景拍攝圖</span>
                    <span class="tr font-['Noto_Sans_TC'] text-[#fff]">曼谷瑰麗酒店</span>
                </div>
              </div>
              <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                2005年在紐約成立，十聿照明橫跨紐約、台北、上海的國際化團隊，憑藉燈光科技的精準執行與創新的空間美學思唯，作品遍布亞洲各大城市指標個案，從商業建築、高階飯店到集合住宅，以燈光為建築打造獨特的夜間樣貌，更曾榮獲有燈光界奧斯卡之稱的「國際照明設計師協會」（IALD）的設計卓越獎。
                <br>
                業績作品：●台北101大樓燈光改造●高雄萬豪酒店●上海外灘歷史建築●曼谷瑰麗酒店●中山區 昀集柏寓
              </p>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div class="item">
            <div class="author">
              <div class="pic">
                <img src="@/section/s4/work/4/author.png" data-aos="fade-up" data-aos-duration="1000"
                  data-aos-delay="500" />
              </div>
              <div class="author_text">
                <img class="slogan" src="@/section/s4/work/4/slogan.png" />
                <h3 class="font-['Noto_Serif_TC'] text-[#AD9752]">業界防水權威</h3>
                <h4 class="font-['Noto_Sans_TC'] text-[#675539]">
                  防水保固<img src="@/section/s4/work/4/mark.png" /><br>大信防水工程有限公司
                </h4>
              </div>
            </div>
            <div class="work">
              <div class="pic">
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/4/work01.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">實景拍攝圖</span>
                    <span class="tr font-['Noto_Sans_TC'] text-[#000]">華固天鑄</span>
                </div>
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/4/work02.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">實景拍攝圖</span>
                    <span class="tr font-['Noto_Sans_TC'] text-[#fff]">和平大苑</span>
                </div>
                <div class="pic_item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" >
                  <img src="@/section/s4/work/4/work03.webp" />
                    <span class="br font-['Noto_Sans_TC'] text-[#fff]">實景拍攝圖</span>
                    <span class="tr font-['Noto_Sans_TC'] text-[#000]">元利ONE　PARK</span>
                </div>
              </div>
              <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                DAISIN大信防水全面實施全方位標準工序，確保建設項目中的品質、安全與效率，並為技術人員提供統一指南，確保品質無虞；大信防水在台經營超越50年，並採用國際頂級材料接軌世界質量與性能要求，成立防水技術中心設置先進實驗室與設備，為建築防護的專業領頭羊。
                <br>
                <br>
                業績作品：●士林區 華固天鑄●松山區 華固松疆●大安區 元利One Park●中正區 和平大苑
              </p>
            </div>
          </div>
        </SplideSlide>

      </Splide>

      <div class="splide_btn prev hidden md:block" @click="goPrev"><img class="pic" src="@/section/s4/next.png" />
      </div>
      <div class="splide_btn next hidden md:block" @click="goNext"><img class="pic" src="@/section/s4/prev.png" />
      </div>

      <div class="dots block md:hidden">
        <ul>
          <li :class="{ active: no === 0 }" @click="switch_splide(0)" />
          <li :class="{ active: no === 1 }" @click="switch_splide(1)" />
          <li :class="{ active: no === 2 }" @click="switch_splide(2)" />
          <li :class="{ active: no === 3 }" @click="switch_splide(3)" />
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.team {

  .team_title {
    width: 100%;
    height: size-m(145);
    padding: size-m(12) 0 0 0;
    background-image: url(@/section/s4/title_bg.webp);
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
    position: relative;
    padding: size-m(50) 0;

    @media screen and (min-width:768px) {
      // display: flex;
      margin: size(230) 0 size(160) 0;
      padding: 0;
    }

    .item {
      padding: 0 size-m(40);
      margin-bottom: size-m(15);

      @media screen and (min-width:768px) {
        padding: 0;
        display: flex;
        max-width: size(1210);
        margin: 0 auto;
      }

      .author {
        width: 100%;
        display: flex;
        margin-bottom: size-m(25);

        @media screen and (min-width:768px) {
          width: 30%;
          display: block;
          margin-bottom: 0;
        }

        .pic {
          width: 38%;

          @media screen and (min-width:768px) {
            width: 100%;
            margin-bottom: size(50);
          }
        }

        .author_text {
          width: 62%;
          padding-left: size-m(25);

          @media screen and (min-width:768px) {
            width: 100%;
            padding-left: 0;
          }

          .slogan {
            @media screen and (min-width:768px) {
              margin-bottom: size(35);
            }
          }

          h3 {
            font-weight: 600;
            font-size: size-m(20);
            line-height: size-m(38);
            letter-spacing: 0.18em;
            margin-bottom: size-m(10);

            @media screen and (min-width:768px) {
              font-size: size(48);
              line-height: size(52);
              letter-spacing: 0.2em;
              margin-bottom: size(40);
            }

          }

          h4 {
            font-weight: 400;

            font-size: size-m(12);
            line-height: size-m(20);
            letter-spacing: 0.13em;

            @media screen and (min-width:768px) {
              font-size: size(30);
              line-height: size(42);
              letter-spacing: 0.13em;
            }

            img {
              display: inline-block;
              width: size-m(62);

              @media screen and (min-width:768px) {
                width: auto;
                margin-left: size(10);
              }
            }
          }
        }

      }

      .work {
        width: 100%;

        @media screen and (min-width:768px) {
          padding-left: size(90);
          width: 70%;
        }

        .pic {
          display: flex;
          gap: size-m(5);
          margin-bottom: size-m(15);
          @media screen and (min-width:768px) {
            gap: size(5);
            margin-bottom: size(30);
          }

          .pic_item {
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
                font-size: size-m(9);
                bottom: size-m(5);
                right: size-m(5);

                @media screen and (min-width:768px) {
                  font-size: size(9);
                  bottom: size(5);
                  right: size(5);
                }
              }

              &.tr {
                writing-mode: vertical-lr;
                font-weight: 400;
                line-height: 1;
                letter-spacing: 0.03em;
                font-size: size-m(10);
                top: size-m(5);
                right: size-m(5);

                @media screen and (min-width:768px) {
                  font-size: size(17);
                  top: size(10);
                  right: size(10);
                }
              }

              &.tl {
                writing-mode: vertical-lr;
                font-weight: 400;
                line-height: 1;
                letter-spacing: 0.03em;
                font-size: size-m(10);
                top: size-m(5);
                left: size-m(5);

                @media screen and (min-width:768px) {
                  font-size: size(17);
                  top: size(10);
                  left: size(10);
                }
              }
            }
          }


        }


        p {
          font-weight: 400;
          font-size: size-m(13);
          line-height: size-m(26);
          letter-spacing: 0.03em;

          @media screen and (min-width:768px) {
            font-size: size(23);
            line-height: size(37);
          }
        }
      }
    }

    .splide_btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      transition: 1s;

      &.prev {
        left: size(80);
      }

      &.next {
        right: size(80);
      }

      img {
        width: size(80);
      }

      &:hover {
        filter: grayscale(1);
      }
    }

    .dots {
      margin-top: size-m(10);
      width: 100%;

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: size-m(15);

        li {
          width: size-m(16);
          height: size-m(2);
          border-radius: 10px;
          background-color: #a2a2a2;
          transition: 0.3s;

          &.active {
            background-color: #ad9752;
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
