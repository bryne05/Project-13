<script setup></script>
<template>
  <section id="running">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-lg-7 col-sm-12">
          <h4 class="font-1 green-color">
            <span class="line"></span> Keep Running
          </h4>

          <h1 class="font-3 white-color mb-3">
            <b>Looking for Certified Trainer</b>
          </h1>

          <p class="font-4 gray-color mb-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.sed ut perspiciatis unde
          </p>

          <button class="btn-green">Get Appointment</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#running {
  background-image: url(../assets/parallax.jpg);
  background-size: cover;
  background-color: rgba(23, 27, 39, 0.9);
  background-blend-mode: overlay;
}

h1 {
  font-size: clamp(35px, 50px, 3vw) !important;
}

.col-lg-7 {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
