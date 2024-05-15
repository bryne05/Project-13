<script setup></script>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor incididunt.ut labore etex dolore magna aliqua. Ut enim ad minim
          veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo
          consequat duis aute irure dolor in reprehenderit.
        </p>

        <h6 class="font-3"><b>Adam Gilchrist</b></h6>
        <p class="font-4 gray-color">CEO/Founder</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 50px;
  padding-bottom: 50px;
}
p {
  font-size: clamp(14px, 19px, 3vw);
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
</style>
