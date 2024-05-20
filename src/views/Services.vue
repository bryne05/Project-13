<script setup>
import NavBar from "../components/NavBar.vue";
import OurServicesTwo from "../components/OurServicesTwo.vue";
import KeepRunning from "../components/KeepRunning.vue";
import OurQualification from "../components/OurQualification.vue";
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
          <h1 class="font-3 white-color"><b>Our Services</b></h1>

          <h6>
            <span class="font-4 white-color"
              ><router-link class="link" to="/"><b>home</b></router-link></span
            >
            <span class="font-4 green-color"><b> - Our Services</b></span>
          </h6>
        </div>
      </div>
    </div>
  </section>
  <OurServicesTwo />
  <KeepRunning />
  <OurQualification />
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
</style>
