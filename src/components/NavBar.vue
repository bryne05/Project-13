<template>
  <div class="container">
    <div class="row">
      <nav
        :class="{ scrolled: isScrolled }"
        class="navbar navbar-expand-lg navbar-light w-100"
      >
        <div class="col-lg-3 col-sm-12 d-flex justify-content-center">
          <router-link class="navbar-brand" to="/">
            <img src="../assets/logo.png" alt="logo" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="button-nav-1">
          <div class="col-xl-6 col-sm-12 d-flex justify-content-center">
            <div class="collapse-layout">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link
                      :class="getActiveClass('/')"
                      class="nav-link"
                      to="/"
                      >Home</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :class="getActiveClass('/about')"
                      class="nav-link"
                      to="/about"
                      >About</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :class="getActiveClass('/services')"
                      class="nav-link"
                      to="/services"
                      >Services</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :class="getActiveClass('/contact')"
                      class="nav-link"
                      to="/contact"
                      >Contact Us</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-12">
          <div
            class="button-cart d-flex justify-content-center align-items-center"
          >
            <div class="shop-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-basket"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </div>
            <div class="divider"></div>
            <button class="btn-green">(0121) 268 3610</button>
          </div>

          <div class="button-nav">
            <div class="collapse-layout">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link
                      :class="getActiveClass('/')"
                      class="nav-link"
                      to="/"
                      >Home</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :class="getActiveClass('/about')"
                      class="nav-link"
                      to="/about"
                      >About</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :class="getActiveClass('/services')"
                      class="nav-link"
                      to="/services"
                      >Services</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :class="getActiveClass('/contact')"
                      class="nav-link"
                      to="/contact"
                      >Contact Us</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

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

// Get the current route
const route = useRoute();

// Method to get the active class dynamically
const getActiveClass = (path) => {
  return route.path === path ? "nav-link act" : "nav-link";
};
</script>

<style scoped>
.act {
  color: #57b957 !important;
}
.nav-item {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  font-size: 17px !important;
  font-weight: 600 !important;
}

.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  color: transparent;
}
.nav-link:hover {
  color: #57b957;
}
.nav-link {
  width: 160px;
  transition: 0.4s;
}

@media (max-width: 1200px) {
  .nav-link {
    width: 100px;
  }
}

.shop-icon {
  background-color: #ecf0f6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  transition: 0.5s ease-in-out;
  margin: 5px;
}

.shop-icon svg {
  fill: black !important;
  transition: 0.5s;
}

.divider {
  height: 35px;
  width: 1px;
  background-color: rgba(128, 128, 128, 0.472);
  margin-left: 30px;
  margin-right: 30px;
}

.shop-icon:hover {
  background-color: #57b957;
}

.shop-icon:hover svg {
  fill: white !important;
}

.shop-icon svg {
  width: 25px;
  height: 25px;
  fill: #b2b3ba;
}
a {
  color: #182345;
}
.navbar-collapse {
  padding: 0;
  margin: 0;
}
.collapse-layout {
  display: flex;
  justify-content: center;
}

.button-nav-1 {
  display: visible;
  width: 100%;
  display: flex;
  justify-content: center;
}

.button-nav-1 .nav-item {
  margin: 0 !important;
}
.button-cart {
  display: inline-flex !important;
}

.button-nav {
  display: none;
}
@media (max-width: 992px) {
  .collapse-layout {
    display: hidden;
    justify-content: start;
  }
}
.navbar {
  /* transition: 0.3s ease; */
  opacity: 0.9;
}

.navbar.scrolled {
  position: fixed;
  width: 100% !important;
  background-color: white !important;
  /* transition: opacity 0.5s ease-in, background-color 0.5s ease-in; */
  box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  left: 0;
  opacity: 1;
  padding: 0;
  box-shadow: rgba(65, 65, 65, 0.472);
}

.navbar.scrolled .button-cart {
  display: none !important;
}

.navbar.scrolled .button-nav {
  width: 1300px;
  display: flex;
  justify-content: end;
}

.navbar.scrolled .nav-item {
  padding: 0;
  margin: 0;
  height: 90px;
  color: white !important;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;
}

.navbar.scrolled .nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar.scrolled .nav-item:hover {
  background-color: #57b957;
}

.navbar.scrolled .nav-item:hover .nav-link {
  color: white;
}
.navbar.scrolled .nav-item:hover .act {
  color: black !important;
}

@media (max-width: 1670px) {
  .navbar.scrolled .button-nav {
    width: 1100px;
  }
}

@media (max-width: 1400px) {
  .navbar.scrolled .button-nav {
    width: 900px;
  }
}
@media (max-width: 1150px) {
  .navbar.scrolled .button-nav {
    width: 700px;
    left: 0;
  }
}

@media (max-width: 992px) {
  .navbar.scrolled {
    display: none;
  }
}

.navbar.scrolled .button-nav-1 {
  display: none;
}
</style>
