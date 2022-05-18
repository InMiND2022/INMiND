<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "App",
  components: {},
  setup() {
    const sectionBackgroundImg = {
      Two: require("./assets/images/01.png"),
      Three: require("./assets/images/02.png"),
      Four: require("./assets/images/角色介紹.png"),
      Five: require("./assets/images/04.jpg"),
    };

    // const imgContainer = ref(null);
    // const imgFive = ref(null);

    const filterContainer = ref(1500);

    const videoWidth = ref(100);
    const videoPlayer = ref(null);

    const slideBar = ref(null);
    const infoContent = ref(null);
    function moveTo(number) {
      const btnList = slideBar.value.querySelectorAll("li");
      for (let btnDom of btnList) {
        btnDom.classList.remove("active");
      }
      infoContent.value.classList.remove("l-100m");
      infoContent.value.classList.remove("l-200m");
      infoContent.value.classList.remove("l-300m");
      switch (number) {
        case "One":
          btnList[0].classList.add("active");
          break;
        case "Two":
          infoContent.value.classList.add("l-100m");
          btnList[1].classList.add("active");
          break;
        case "Three":
          infoContent.value.classList.add("l-200m");
          btnList[2].classList.add("active");
          break;
        case "Four":
          infoContent.value.classList.add("l-300m");
          btnList[3].classList.add("active");
          break;
      }
    }

    function resizeVideoWidth() {
      videoWidth.value = document.body.offsetWidth;
      // imgContainer.value.height = imgFive.value.height;
    }

    const sectionTwo = ref(null);
    function onScrollDownSectionTwo() {
      sectionTwo.value.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function fadeVideo() {
      videoPlayer.value.addEventListener("timeupdate", () => {
        if (videoPlayer.value === null) return;
        if (videoPlayer.value.currentTime > 30) {
          videoPlayer.value.classList.remove("videoFade");
          videoPlayer.value.currentTime = 0;
        }
        if (videoPlayer.value.currentTime > 25) {
          videoPlayer.value.classList.add("videoFade");
        }
      });
    }
    onMounted(() => {
      resizeVideoWidth();
      window.addEventListener("resize", resizeVideoWidth);
      fadeVideo();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resizeVideoWidth);
    });
    return {
      sectionBackgroundImg,
      videoPlayer,
      videoWidth,
      sectionTwo,
      // imgContainer,
      // imgFive,
      slideBar,
      infoContent,
      moveTo,
      filterContainer,
      onScrollDownSectionTwo,
    };
  },
};
</script>

<template>
  <v-app>
    <v-main class="container-fluid">
      <div class="section section-1">
        <video ref="videoPlayer" :width="videoWidth" autoplay loop muted>
          <source src="/INMiND/video/inMind.mp4" type="video/mp4" />
          <p>瀏覽器不支援。</p>
        </video>
        <div class="scroll-btn" @click="onScrollDownSectionTwo"></div>
      </div>
      <div class="section section-2 position-relative" ref="sectionTwo">
        <div
          class="section-2-content position-absolute top-0 w-39 pl-10 pt-10 mt-10 ml-10"
        >
          <p class="description text-white fw-normal">
            世界已經崩壞且了無生機，人們遺忘、
            捨棄了過去的身分，都成為一個個樣貌
            相同、仰賴能量所維生的冰冷機器人，
            而能量來自於機器人每日不斷地工作所
            產生，因此他們只能不斷重複枯燥的工 作，日復一日⋯⋯
          </p>
        </div>
        <img
          class="img-fluid"
          :src="sectionBackgroundImg.Two"
          alt="區塊背景二"
        />
      </div>
      <div class="section section-3 position-relative">
        <div
          class="section-3-content position-absolute bottom-0 w-39 pl-10 pb-10 ml-10"
        >
          <div class="description text-white fw-normal">
            主角本來是其中的一員，但就在他工作
            時，動作逐漸變得緩慢之際，突然出現 了一個謎樣的發光體
          </div>
        </div>
        <img
          class="img-fluid"
          :src="sectionBackgroundImg.Three"
          alt="區塊背景三圖片"
        />
      </div>
      <div class="section section-4 position-relative">
        <div
          class="section-4-content position-absolute top-0 end-0 w-39 pr-10 pt-10"
        >
          <div class="description text-white fw-normal">
            在路途中逐漸意識到自己過去的種種，光球的
            引導似乎讓他找回了一部分的自己，沒想到它
            終究只是帶來曇花一現的預言⋯⋯
          </div>
        </div>
        <img
          class="img-fluid"
          :src="sectionBackgroundImg.Four"
          alt="區塊背景四圖片"
        />
      </div>
      <div class="section section-5 pt-2 pb-2" ref="imgContainer">
        <div class="row introduction g-0">
          <div class="col-12 col-md-9 order-2 order-md-1">
            <div class="row justify-content-center">
              <div class="col-11 align-self-center">
                <div class="info-container">
                  <div class="info-content" ref="infoContent">
                    <div class="info info-1">
                      <iframe
                        class="d-none d-md-flex m-auto"
                        width="80%"
                        height="480"
                        src="https://www.youtube.com/embed/ct2hdescVMQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      <iframe
                        class="d-md-none"
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/ct2hdescVMQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="info info-2">
                      <div class="row w-75 m-auto">
                        <div class="col-12 pl-0">
                          <div class="fs-3 text-white">線上設定集</div>
                        </div>
                      </div>
                      <div
                        class="row h-100 w-75 m-auto align-items-center justify-content-center artBook d-none d-md-flex"
                      >
                        <div class="col-8">
                          <div class="img-container">
                            <img
                              :src="require('@/assets/images/設定集圖.png')"
                              height="250"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pl-3 text-black">
                            <p class="fs-5 pb-0 mb-0 fw-bold">IN(MiND)</p>
                            <p class="fs-6 pb-0">線上設定集</p>
                            <ul class="list-unstyled color-grey-dark">
                              <li>
                                <a
                                  class="text-decoration-underneath pl-1 color-grey-dark"
                                  href="https://www.behance.net/gallery/143060267/IN-%28-MiND-%29-"
                                  target="_blank"
                                  >Behance
                                </a>
                                >
                              </li>
                              <li>
                                <a
                                  class="text-decoration-underneath pl-1 color-grey-dark"
                                  href="https://issuu.com/teu03/docs/_-_issue"
                                  target="_blank"
                                  >Issuu
                                </a>
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row h-75 w-100 m-auto flex-column align-items-center justify-content-center d-md-none artBook"
                      >
                        <div class="col-8">
                          <div class="img-container">
                            <img
                              :src="require('@/assets/images/設定集圖.png')"
                              height="150"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-4 mt-3">
                          <div class="pl-3 text-black">
                            <p class="fs-5 pb-0 mb-0 fw-bold">IN(MiND)</p>
                            <p class="fs-6 pb-0 mb-0 mb-md-1">線上設定集</p>
                            <ul class="list-unstyled color-grey-dark">
                              <li>
                                <a
                                  class="text-decoration-underneath pl-1 color-grey-dark art-link"
                                  href="https://www.behance.net/gallery/143060267/IN-%28-MiND-%29-"
                                  target="_blank"
                                  >Behance
                                </a>
                                >
                              </li>
                              <li>
                                <a
                                  class="text-decoration-underneath pl-1 color-grey-dark art-link"
                                  href="https://issuu.com/teu03/docs/_-_issue"
                                  target="_blank"
                                  >Issuu
                                </a>
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="info info-3">
                      <div class="row w-75 m-auto">
                        <div class="col-12 pl-0">
                          <div class="fs-3 text-white">展期公告</div>
                        </div>
                      </div>
                      <div
                        class="row h-100 w-75 m-auto align-items-center justify-content-center artBook d-none d-md-flex"
                      >
                        <div class="col-12">
                          <div class="pb-md-12 pl-md-12 text-black">
                            <ul class="list-unstyled color-grey-dark2">
                              <li>
                                <p class="fw-bold m-0">◌ 校內展<br /></p>
                                <span
                                  >2022/5/9 - 5/13
                                  國立臺北教育大學篤行樓1樓</span
                                >
                              </li>
                              <li class="mt-2 mt-md-3">
                                <p class="fw-bold m-0">◌ 放視大賞<br /></p>
                                <span>2022/5/18 - 5/20 高雄展覽館南館</span>
                              </li>
                              <li class="mt-2 mt-md-3">
                                <p class="fw-bold m-0">◌ 新一代設計展<br /></p>
                                <span>2022/6 新一代線上展</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row h-75 w-100 m-auto align-items-center justify-content-center artBook d-md-none"
                      >
                        <div class="col-12">
                          <div class="pb-md-12 pl-md-12 text-black">
                            <ul class="list-unstyled color-grey-dark2 pl-10">
                              <li>
                                <p class="fw-bold m-0">◌ 校內展<br /></p>
                                <span
                                  >2022/5/9 - 5/13
                                  國立臺北教育大學篤行樓1樓</span
                                >
                              </li>
                              <li class="mt-2 mt-md-3">
                                <p class="fw-bold m-0">◌ 放視大賞<br /></p>
                                <span>2022/5/18 - 5/20 高雄展覽館南館</span>
                              </li>
                              <li class="mt-2 mt-md-3">
                                <p class="fw-bold m-0">◌ 新一代設計展<br /></p>
                                <span>2022/6 新一代線上展</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="info info-4">
                      <div class="row w-75 m-auto">
                        <div class="col-12 pl-0">
                          <div class="fs-3 text-white">關於我</div>
                        </div>
                      </div>
                      <div
                        class="row h-100 w-75 m-auto align-items-center justify-content-center artBook d-none d-md-flex"
                      >
                        <div class="col-5">
                          <div
                            class="img-container d-flex justify-content-center pl-12"
                          >
                            <img
                              class="rounded-circle"
                              :src="require('@/assets/images/author.png')"
                              height="50"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="pl-3 pt-1 pb-1 text-black author-card">
                            <ul class="list-unstyled color-grey-dark2">
                              <li>
                                <img
                                  :src="
                                    require('@/assets/images/account-circle-outline.png')
                                  "
                                  width="24"
                                  height="24"
                                  alt=""
                                />
                                <span class="pl-2">陳冠頴</span>
                              </li>
                              <li class="mt-2">
                                <v-icon> mdi-school-outline </v-icon>
                                <span class="pl-2">
                                  國立臺北教育大學 藝術與造形設計學系</span
                                >
                              </li>
                              <li class="mt-2 instagram">
                                <v-icon> mdi-instagram </v-icon>
                                <span class="pl-2">
                                  <a
                                    class="color-grey-dark2 text-decoration-none"
                                    href="https://instagram.com/teu.3d?igshid=YmMyMTA2M2Y="
                                    target="_blank"
                                    >teu.3d</a
                                  >
                                </span>
                              </li>
                              <li class="mt-2">
                                <v-icon> mdi-email-edit-outline </v-icon>
                                <span class="pl-2"> teu.1033@gmail.com</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row h-75 w-100 m-auto align-items-center justify-content-center artBook d-md-none"
                      >
                        <div class="col-6 text-center">
                          <div
                            class="img-container d-flex justify-content-center pb-3"
                          >
                            <img
                              class="rounded-circle"
                              :src="require('@/assets/images/author.png')"
                              height="50"
                              alt=""
                            />
                          </div>
                          <div class="w-100 text-black author-card--mobile">
                            <ul class="list-unstyled color-grey-dark2 pt-2">
                              <li>
                                <img
                                  :src="
                                    require('@/assets/images/account-circle-outline.png')
                                  "
                                  width="24"
                                  height="24"
                                  alt=""
                                />
                                <span class="pl-2">陳冠頴</span>
                              </li>
                              <li class="mt-2 instagram">
                                <v-icon> mdi-instagram </v-icon>
                                <span class="pl-2">
                                  <a
                                    class="color-grey-dark2 text-decoration-none"
                                    href="https://instagram.com/teu.3d?igshid=YmMyMTA2M2Y="
                                    target="_blank"
                                    >teu.3d</a
                                  >
                                </span>
                              </li>
                              <li class="mt-2">
                                <v-icon> mdi-email-edit-outline </v-icon>
                                <span class="pl-2"> teu.1033@gmail.com</span>
                              </li>
                              <li class="mt-2">
                                <v-icon> mdi-school-outline </v-icon>
                                <span class="pl-2">
                                  國立臺北教育大學<br />藝術與造形設計學系</span
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3 order-1 order-md-2 mt-4 mt-md-0">
            <ul
              class="d-flex flex-md-column justify-content-evenly justify-content-md-center slide-bar p-0 m-0"
              ref="slideBar"
            >
              <li
                class="btn rounded-circle bg-main text-grey-light mb-md-4 mt-md-4 active"
                @click="moveTo('One')"
              >
                <a href="javascript:;" class="d-inline-block text-center"
                  >影片<br />觀賞</a
                >
              </li>
              <li
                class="btn rounded-circle bg-main text-grey-light mb-md-2"
                @click="moveTo('Two')"
              >
                <a href="javascript:;">線上<br />設定集</a>
              </li>
              <li
                class="btn rounded-circle bg-main text-grey-light mt-md-2"
                @click="moveTo('Three')"
              >
                <a href="javascript:;">展期<br />公告</a>
              </li>
              <li
                class="btn rounded-circle bg-main text-grey-light mt-md-4"
                @click="moveTo('Four')"
              >
                <a href="javascript:;">關於<br />我</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="h-100 filterContainer"></div>
      </div>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
// * {
//   outline: 1px solid white;
// }
body {
  width: 100%;
  height: 100%;
  background-color: #000;
}

.bg-main {
  // background-color: #FFF6A6 !important;
  background-color: #707070 !important;
}

.text-grey-light a {
  color: #c5c5c5;
}

.color-grey-dark {
  color: #707070;
}

.color-grey-dark2 {
  color: rgba(49, 49, 49, 1);
}

.color-grey-light {
  color: #c5c5c5;
}

html,
body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  background-color: #000;
  font-family: "微軟正黑體";
}
.section-1 {
  width: 100vw;
  background-color: #000;
  margin: 0;
  padding: 0;
  position: relative;
  max-height: 100vh;
  overflow: hidden;
  &::after {
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.3;
    left: 0;
    top: 0;
    z-index: 100;
  }
}
.scroll-btn {
  opacity: 0.9;
  position: absolute;
  width: 3.25em;
  height: 6.5em;
  border: 0.4em solid #fff;
  left: 50%;
  transform: translate(-50%);
  bottom: 3em;
  z-index: 200;
  color: #fff;
  border-radius: 3em;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    height: 0.7em;
    width: 0.7em;
    background-color: #fff;
    border-radius: 50%;
    animation: move-down 2s infinite;
  }
  &::after {
    content: "SCROLL DOWN";
    position: absolute;
    width: 12em;
    display: block;
    width: 12em;
    text-align: center;
    left: -4.5em;
    bottom: -2.5em;
    font-weight: 600;
  }
}
.videoFade {
  animation: videoPlayer-fade 5s;
}

@keyframes move-down {
  80% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(4em);
    opacity: 0;
  }
}

@keyframes videoPlayer-fade {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
// new
.ls-3 {
  letter-spacing: 1rem;
}
.ls-4 {
  letter-spacing: 1.2rem;
}
.ls-5 {
  letter-spacing: 1.4rem;
}
.ls-lg {
  letter-spacing: 2rem;
}
.w-39 {
  width: 39% !important;
}

.bg-navbar {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 100) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: white !important;
  color: black !important;
  border-color: none !important;
}
.tab-pane {
  background-color: white !important;
}
.nav-pills .nav-link {
  border-radius: 0.25rem 0.25rem 0 0 !important;
}
.filterGrey {
  background-color: black;
  opacity: 1;
  z-index: 50;
}

.h-100 {
  height: 100%;
}

.tabs-menu {
  z-index: 100;
}

.tab-pane.fade > iframe {
  display: none;
}
.tab-pane.fade.show > iframe {
  display: inline-block;
}
.nav-link {
  transition: 0.3s ease-in !important;
  color: grey !important;
}
.nav-link:hover {
  transition: 0.3s ease-in !important;
  color: black !important;
  background-color: rgba(255, 255, 255, 0.8) !important;
}

.slide-bar > ul > li:hover,
.info-1 > ul > li:hover,
ul > li a:hover {
  transition: 0.3s ease-in !important;
  color: rgb(49, 49, 49) !important;
}
.v-main__wrap {
  background: black;
}

.filterContainer {
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  min-height: 768px;
  opacity: 0.7;
  z-index: 0;
  background: black;
}

.introduction {
  height: 600px;
  position: relative;
  z-index: 1;
}

.slide-bar {
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
}

.info-container {
  position: relative;
  width: 100%;
  height: 600px;
  // display: flex;
  // align-items: center;
  overflow: hidden;
}

.info-content {
  display: inline-block;
  width: 400%;
  height: 80%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  position: relative;
  transition: 0.3s ease-in;
  white-space: nowrap;
}

.info {
  width: 25%;
  height: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.info-1,
.info-2,
.info-3,
.info-4 {
  color: black;
}

.bg-filter {
  background-color: #000;
  opacity: 0.8;
}

.l-100m {
  left: -100%;
}

.l-200m {
  left: -200%;
}

.l-300m {
  left: -300%;
}

.l-400m {
  left: -400m;
}
.img-container {
  width: 100%;
  height: 100%;
  text-align: center;
}

.artBook {
  background-color: rgba(255, 255, 255, 0.7);
}

.author-card {
  border-left: 2px rgb(61, 61, 61) solid;
  &--mobile {
    border-top: 2px rgb(61, 61, 61) solid;
  }
}

.info-4 > ul > li a:hover,
.info-4 > ul > span > a:hover {
  transition: 0.3s ease-in;
  color: #c5c5c5;
}

.btn {
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none !important;
  }

  &:hover {
    background-color: #fff6a6 !important;
    color: #c5c5c5 !important;
  }

  &.active {
    background-color: #fff6a6 !important;
  }

  &.active > a {
    color: #313131 !important;
  }
}

.description {
  font-size: 1.25em;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px;
}

.section {
  position: relative;
  font-size: 8px !important;
}

p,
li,
span,
a {
  font-size: 0.75rem;
}

.section-5 {
  position: relative;
  width: 100vw;
  height: 600px;
  background-image: url(@/assets/images/04.jpg);
  background-size: cover;
  overflow: hidden;
}

@media (min-width: 768px) {
  .section-5 {
    overflow: hidden;
  }
  p,
  li,
  span,
  a {
    font-size: 1rem;
  }
  .description {
    font-size: 1.25em;
    background-color: transparent;
    padding: 0px;
  }
}

@media (min-width: 800px) {
  .section {
    font-size: 12px !important;
  }
}

@media (min-width: 1200px) {
  .section {
    font-size: 16px !important;
  }
}
</style>
