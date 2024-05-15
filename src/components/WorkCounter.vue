<template>
  <section id="work-counter">
    <div id="counterSection" class="container">
      <div class="row justify-content-center">
        <div
          v-for="(fact, index) in facts"
          :key="index"
          class="col-md-2 p-3 text-center"
        >
          <img :src="fact.icon" alt="Icon" />

          <div>
            <b class="work-count font-3 white-color">
              <h1>{{ fact.count }}</h1></b
            >
          </div>
          <p class="work-title gray-color font-2">{{ fact.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import barbelImage from "../assets/barbel.png";
import coffeeImage from "../assets/coffee.svg";
import smileImage from "../assets/smile.svg";
import heartImage from "../assets/heart.png";
import { onMounted, ref } from "vue";

const facts = ref([
  {
    count: 0,
    title: "Work Session",
    target: 642,
    icon: barbelImage,
  },
  {
    count: 0,
    title: "Happy Customers",
    target: 746,
    icon: smileImage,
  },
  { count: 0, title: "Coffee Cups", target: 3456, icon: coffeeImage },
  {
    count: 0,
    title: "Days of Programs",
    target: 431,
    icon: heartImage,
  },
]);

const speed = 200;

const startCounter = (target, index) => {
  let increment = target / speed;
  let count = 0;

  const updateCounter = setInterval(() => {
    count += increment;
    facts.value[index].count = Math.floor(count);

    if (count >= target) {
      clearInterval(updateCounter);
      facts.value[index].count = target;
    }
  }, 1);
};

const checkCounterInView = () => {
  const counterSection = document.getElementById("counterSection");
  const sectionPosition = counterSection.getBoundingClientRect().top;

  if (sectionPosition < window.innerHeight) {
    facts.value.forEach((fact, index) => {
      startCounter(fact.target, index);
    });
    window.removeEventListener("scroll", checkCounterInView);
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkCounterInView);
});
</script>

<style scoped>
img {
  width: 45px;
  height: 45px;
}
#work-counter {
  background-image: url(../assets/parallax-1.jpg);
  background-size: cover;
  background-color: rgba(23, 27, 39, 1);
  background-blend-mode: overlay;
  padding-top: 100px;
  padding-bottom: 100px;
}

.work-count h1 {
  font-size: clamp(45px, 60px, 3vw) !important;
}
</style>
