<script setup>
import NavBar from "../components/NavBar.vue";
import QuickContact from "../components/QuickContact.vue";
import GetInTouch from "../components/GetInTouch.vue";
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
</style>
