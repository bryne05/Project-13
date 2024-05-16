<script setup>
import SomeStory from "../components/SomeStory.vue";
import OurServices from "../components/ourServices.vue";
import SuccessStories from "../components/SuccessStories.vue";
import KeepRunning from "../components/KeepRunning.vue";
import OurQualification from "../components/OurQualification.vue";
import WorkCounter from "../components/WorkCounter.vue";
import OurBlog from "../components/OurBlog.vue";
import WriteMessage from "../components/WriteMessage.vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <NavBar />
  <section id="hero">
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel slide"
      data-bs-touch="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="bg-1"></div>

          <div class="text d-flex justify-content-center flex-column">
            <h3 class="font-1 green-color">We are Experienced</h3>
            <h1 class="font-3 white-color">
              Keep Refresh <br />
              <span style="font-weight: 700">& Strong Your Mind</span>
            </h1>
            <p class="font-2 gray-color2">
              Lorem ipsum dolor sir amet consectetur adipisicing elit sed do
              eismod
            </p>
            <button class="btn-green">Get Appointment</button>
          </div>
        </div>
        <div class="carousel-item">
          <div class="bg-2"></div>
          <div class="text d-flex justify-content-center flex-column">
            <h3 class="font-1 green-color">We are Experienced</h3>
            <h1 class="font-3 white-color">
              Keep Refresh <br />
              <span style="font-weight: 700">& Strong Your Mind</span>
            </h1>
            <p class="font-2 gray-color2">
              Lorem ipsum dolor sir amet consectetur adipisicing elit sed do
              eismod
            </p>
            <button class="btn-green">Get Appointment</button>
          </div>
        </div>
        <div class="carousel-item">
          <div class="bg-3"></div>
          <div class="text d-flex justify-content-center flex-column">
            <h3 class="font-1 green-color">We are Experienced</h3>
            <h1 class="font-3 white-color">
              Keep Refresh <br />
              <span style="font-weight: 700">& Strong Your Mind</span>
            </h1>
            <p class="font-2 gray-color2">
              Lorem ipsum dolor sir amet consectetur adipisicing elit sed do
              eismod
            </p>
            <button class="btn-green">Get Appointment</button>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="go-up">
      <a href="#hero"
        ><button class="btn-green-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#ffffff"
            class="bi bi-arrow-up-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
            />
          </svg></button
      ></a>
    </div>
  </section>

  <SomeStory />
  <OurServices />
  <SuccessStories />
  <KeepRunning />
  <OurQualification />
  <WorkCounter />
  <OurBlog />
  <WriteMessage />
  <Footer />
</template>

<style scoped>
#hero .carousel-item {
  position: relative;
  height: 100% !important;
}

#hero .bg-1 {
  height: 70vh !important;
  background-image: url(../assets/image-1.jpg) !important;
  background-size: cover;
  background-position: 50% !important;
}

#hero .bg-2 {
  height: 70vh !important;
  background-image: url(../assets/image-2.jpg) !important;
  background-size: cover;
  background-position: 50% !important;
}
#hero .bg-3 {
  height: 70vh !important;
  background-image: url(../assets/image-3.jpg) !important;
  background-size: cover;
  background-position: 50% !important;
}

#hero .carousel-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 27, 39, 0.65);
  z-index: 1;
}

#hero .text {
  top: 0;
  left: 160px;
  padding-left: 100px;
  z-index: 2;
  position: absolute;
  width: 70%;
  height: 100%;
}

#hero h1 {
  font-size: clamp(30px, 80px, 3vw) !important;
}

@media (max-width: 992px) {
  #hero .text {
    left: 80px;
    padding-left: 70px;
  }
}

@media (max-width: 650px) {
  #hero .carousel-item {
    height: 60vh !important;
    background-image: url(../assets/about-2.jpg);
  }
  #hero .bg-1 {
    background-position: 60% !important;
  }
  #hero .bg-2 {
    background-position: 60% !important;
  }
  #hero .bg-3 {
    background-position: 60% !important;
  }
  #hero .text {
    left: 50px;
    padding-left: 40px;
  }
}

.btn-green-up {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #57b957;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  animation: scale 2.5s infinite;
}

@keyframes scale {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}
.go-up {
  display: absolute;
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: 999;
}
</style>
