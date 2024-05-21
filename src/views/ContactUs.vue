<script setup>
import NavBar from "../components/NavBar.vue";
import QuickContact from "../components/QuickContact.vue";
import GetInTouch from "../components/GetInTouch.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <NavBar />
  <section id="hero">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-12 d-flex justify-content-center align-items-center flex-column"
        >
          <h1 class="font-3 white-color"><b>Contact Us</b></h1>

          <h6>
            <span class="font-4 white-color"
              ><router-link class="link" to="/"><b>home</b></router-link></span
            >
            <span class="font-4 green-color"><b> - Contact Us</b></span>
          </h6>
        </div>
      </div>
    </div>
      <div class="go-up">
      <a href="#hero">
        <button :class="{ scrolled: isScrolled }" class="btn-green-up">
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
  <QuickContact />
  <GetInTouch />
  <Footer />
</template>
<style scoped>
#hero .row {
  background-image: url(../assets/parallax-2.jpg);
  padding-top: 170px;
  padding-bottom: 170px;
}
.link {
  color: white;
  text-decoration: none;
  transition: 0.5 ease-in-out !important;
}

.link:hover {
  color: #57b957;
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
.btn-green-up {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #57b957;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  animation: scale 2.5s infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.scrolled.btn-green-up {
  opacity: 1;
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
</style>
