<script setup>
import NavBar from "../components/NavBar.vue";
import SomeStory from "../components/SomeStory.vue";
import WorkCounter from "../components/WorkCounter.vue";
import SuccessStories from "../components/SuccessStories.vue";
import KeepRunning from "../components/KeepRunning.vue";
import WriteMessage from "../components/WriteMessage.vue";
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
          <h1 class="font-3 white-color"><b>About Us</b></h1>

          <h6>
            <span class="font-4 white-color"
              ><router-link class="link" to="/"><b>home</b></router-link></span
            >
            <span class="font-4 green-color"><b> - About Us</b></span>
          </h6>
        </div>
      </div>
    </div>
  </section>

  <SomeStory />
  <WorkCounter />
  <SuccessStories />
  <KeepRunning />

  <section id="ourteam">
    <div class="container">
      <div class="row">
        <div
          class="col-12 d-flex justify-content-center align-items-center flex-column mb-3"
        >
          <h4 class="font-1 green-color">
            <span class="line" style="margin-right: 20px"></span>
            Our Team
            <span class="line" style="margin-left: 20px"></span>
          </h4>

          <h1 class="font-3 black-color">Excellent <b>Trainer</b></h1>
        </div>

        <div class="col-xl-3 col-md-6 col-sm-12 p-3 rel">
          <img src="../assets/team-1.jpg" alt="" />
          <div
            class="img-hover d-flex justify-content-center align-items-center flex-row"
          >
            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-vimeo"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                  />
                </svg></div
            ></a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3 rel">
          <img src="../assets/team-2.jpg" alt="" />
          <div
            class="img-hover d-flex justify-content-center align-items-center flex-row"
          >
            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-vimeo"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                  />
                </svg></div
            ></a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3 rel">
          <img src="../assets/team-3.jpg" alt="" />
          <div
            class="img-hover d-flex justify-content-center align-items-center flex-row"
          >
            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-vimeo"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                  />
                </svg></div
            ></a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3 rel">
          <img src="../assets/team-4.jpg" alt="" />
          <div
            class="img-hover d-flex justify-content-center align-items-center flex-row"
          >
            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-vimeo"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                  />
                </svg></div
            ></a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3 rel">
          <img src="../assets/team-5.jpg" alt="" />
          <div
            class="img-hover d-flex justify-content-center align-items-center flex-row"
          >
            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-vimeo"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                  />
                </svg></div
            ></a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3 rel">
          <img src="../assets/team-6.jpg" alt="" />
          <div
            class="img-hover d-flex justify-content-center align-items-center flex-row"
          >
            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-vimeo"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                  />
                </svg></div
            ></a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3 rel">
          <img src="../assets/team-7.jpg" alt="" />
          <div
            class="img-hover d-flex justify-content-center align-items-center flex-row"
          >
            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-vimeo"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                  />
                </svg></div
            ></a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3 rel">
          <img src="../assets/team-8.jpg" alt="" />
          <div
            class="img-hover d-flex justify-content-center align-items-center flex-row"
          >
            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
              </div>
            </a>

            <a href="#">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bi bi-vimeo"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                  />
                </svg></div
            ></a>
          </div>
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

  <WriteMessage />
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

#ourteam {
  padding-top: 60px;
  padding-bottom: 60px;
}
#ourteam .rel {
  position: relative !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

#ourteam img {
  width: 100%;
  height: 100%;
}

#ourteam .img-hover {
  position: absolute;
  width: 92%;
  height: 92%;
  transform: scale(0);
  transition: transform 0.8s ease-in-out;
}

#ourteam .rel:hover .img-hover {
  background-color: rgba(64, 59, 59, 0.5);
  transform: scale(1);
  animation: scaling-hover 0.8s forwards;
}

#ourteam .rel:hover .icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: white;
  transition: all 0.4s ease-in-out;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}

#ourteam .rel:hover .icon:hover {
  background-color: #57b957;
}

#ourteam .rel:hover .icon:hover svg {
  fill: white;
}

@keyframes scaling-hover {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
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

@media (max-width: 770px) {
  #ourteam .img-hover {
    width: 95%;
    height: 95%;
  }
}
</style>
