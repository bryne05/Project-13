<script setup>
import SomeStory from "../components/SomeStory.vue";
import OurServices from "../components/OurServices.vue";
</script>

<template>
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
  </section>

  <SomeStory />
  <OurServices />
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
</style>
