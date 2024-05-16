<script setup>
import { ref } from "vue";

const showPopup = ref(false);
const videoUrl = "https://www.youtube.com/embed/nfP5N9Yc72A";

const openPopup = () => {
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};
</script>
<template>
     <div v-if="showPopup" class="popup-overlay">
              <div class="btn-container">
                <button @click="closePopup" class="close-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="32"
                    fill="#ffffff"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                    />
                  </svg>
                </button>
                <div class="popup-content">
                  <iframe
                    :src="videoUrl"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
  <section id="story">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mt-3 mb-3">
          <h4 class="font-1 green-color mb-2 mt-5">
            <span class="line"></span>Some Story
          </h4>
          <h1 class="font-3 black-color mb-5">
            We Have 20 Years <br />
            of
            <span style="font-weight: 700">Experience</span>
          </h1>
          <p class="font-2 gray-color2 mb-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium.
          </p>
          <ul class="custom-list">
            <a href="#" class="gray-color font-2">
              <li class="mt-2 mb-2">
                Convallis ligula ligula gravida tristique magna tincidunt.
              </li>
            </a>
            <a href="#" class="gray-color font-2 mt-2">
              <li class="mt-2 mb-2">
                Lobortis massa fringilla odio ultricies tempus.
              </li>
            </a>
            <a href="#" class="gray-color font-2">
              <li class="mt-2 mb-2">Faucibus odio quis eleifend eros risus.</li>
            </a>
          </ul>

          <div
            class="col-12 mt-5 d-flex justify-content-around align-items-center"
          >
            <button class="btn-green">Get Started</button>
            <div class="border-span"></div>

            <button class="play" @click="openPopup">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"
                />
              </svg>
            </button>

            <h6 class="font-4 black-color">Watch Intro Video</h6>

         
          </div>
        </div>

        <div class="col-lg-6 col-12 d-flex justify-content-start">
          <div class="pic-1"></div>
          <div class="pic-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
iframe {
  width: 50vw;
  height: 60vh;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup-content {
  background-color: #fff;
  padding: 10px;
}

.btn-container {
  display: flex;
  justify-content: end;
}

.close-btn {
  margin-top: -20px;
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  background-color: black;
  border: 3px solid white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.play {
  width: 70px;
  height: 70px;
  border: none;
  background-color: #ecf0f6 !important;
  border-radius: 50% !important;
  transition: 0.4s ease-in-out;
}

.play svg {
  width: 40px;
  height: 40px;
  fill: black;
  transition: 0.4s ease-in-out;
}

.play:hover {
  background-color: #47b957 !important;
}

button.play:hover svg {
  fill: white;
}
.border-span {
  height: 30px;

  border-right: 1px solid gray;
}
.row {
  padding-top: 100px;
  padding-bottom: 100px;
}
h1 {
  font-size: clamp(20px, 45px, 3vw) !important;
}

a {
  text-decoration: none;
}
.custom-list {
  list-style: none;
}

.custom-list li::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right: 5px;
}

ul {
  padding: 0;
}
li {
  transition: 0.4s;
}
li:hover {
  color: #47b957;
}

.pic-1 {
  background-image: url(../assets/about.jpg);
  width: 440px;
  height: 500px;
  margin-left: 50px;
  position: relative;
}

.pic-2 {
  background-image: url(../assets/about-2.jpg);
  margin-top: 400px !important;
  width: 300px;
  height: 200px;
  background-size: cover;
  position: absolute;
  z-index: 10;
}
</style>
