<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const testimonials = ref([
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.ut labore etex dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat duis aute irure dolor in reprehenderit.",
    role: "CEO / Founder",
    author: "Adam Gilchrist",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.ut labore etex dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat duis aute irure dolor in reprehenderit.",
    role: "CEO & Co-Founder",
    author: "Darly Dixon",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.ut labore etex dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat duis aute irure dolor in reprehenderit.",
    role: "CEO & Co-Founder",
    author: "Zowwran Von Ranzow",
  },
]);
const currentIndex = ref(0);

const currentTestimonial = computed(
  () => testimonials.value[currentIndex.value]
);

const prevTestimonial = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.value.length) %
    testimonials.value.length;
};

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

onMounted(() => {
  const interval = setInterval(nextTestimonial, 5000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>
<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-6 col-12 d-flex justify-content-center align-items-center"
      >
        <div class="play"></div>

        <div class="profile"></div>

        <div class="quote-pic"></div>
      </div>

      <div
        class="col-lg-5 col-12 d-flex justify-content-center align-items-start flex-column"
        style="margin-left: 30px"
      >
        <h4 class="font-1 green-color">
          <span class="line"></span>Success Stories
        </h4>

        <h1 class="font-3 mb-5">
          What Our <br />
          <span style="font-weight: 700"> Clients Are Saying</span>
        </h1>

        <p class="font-4 gray-color mb-5">
          {{ currentTestimonial.text }}
        </p>

        <h6 class="font-3">
          <b>{{ currentTestimonial.author }}</b>
        </h6>
        <p class="font-4 gray-color test">{{ currentTestimonial.role }}</p>

        <div class="buttons">
          <button @click="prevTestimonial">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </button>
          <button @click="nextTestimonial">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buttons button {
  margin: 5px;
  border: none;
  background-color: transparent;
  fill: #97a2a6;
}
.test {
  transition: all 0.3s;
}
.container {
  padding-top: 50px;
  padding-bottom: 50px;
}
p {
  font-size: clamp(10px, 19px, 3vw);
}
.play {
  background-image: url(../assets/play-button-arrowhead.png);
  width: 500px;
  height: 500px;
  background-size: cover;
  opacity: 0.2;
  margin-left: -80px;
}

.profile {
  background-image: url(../assets/testimonial-1.png);
  height: 300px;
  width: 300px;
  background-size: cover;
  position: absolute;
  z-index: 10;
  margin-left: 100px;
}

.quote-pic {
  background-image: url(../assets/testimonial-3.png);
  height: 80px;
  width: 100px;
  background-size: cover;
  position: absolute;
  margin-left: 600px;
}

@media (max-width: 800px) {
  .quote-pic {
    display: none;
  }
  .play {
    width: 400px;
    height: 400px;
  }
}

@media (max-width:650px) {
  .col-lg-5{
    width: 400px;
  }

  
}
</style>
