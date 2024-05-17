<script setup>
import NavBar from "../components/NavBar.vue";
import SomeStory from "../components/SomeStory.vue";
import WorkCounter from "../components/WorkCounter.vue";
import SuccessStories from "../components/SuccessStories.vue";
import KeepRunning from "../components/KeepRunning.vue";
import WriteMessage from "../components/WriteMessage.vue";
import Footer from "../components/Footer.vue";
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

        <div class="col-xl-3 col-md-6 col-sm-12 p-3">
          <img src="../assets/team-1.jpg" alt="" />
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3">
          <img src="../assets/team-2.jpg" alt="" />
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3">
          <img src="../assets/team-3.jpg" alt="" />
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3">
          <img src="../assets/team-4.jpg" alt="" />
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3">
          <img src="../assets/team-5.jpg" alt="" />
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3">
          <img src="../assets/team-6.jpg" alt="" />
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3">
          <img src="../assets/team-7.jpg" alt="" />
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12 p-3">
          <img src="../assets/team-8.jpg" alt="" />
        </div>
      </div>
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

#ourteam img {
  width: 100%;
}
</style>
