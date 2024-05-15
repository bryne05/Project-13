<script setup></script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-12">
        <h4 class="font-1 green-color">
          <span class="line"></span>Our Qualification
        </h4>
        <h1 class="font-3 black-color mb-5">
          Why People <br />
          <span style="font-weight: 700"> Choose Danbury</span>
        </h1>
        <p class="font-4 gray-color2">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium.doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore

          <br />
          <br />
          Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni.
        </p>
      </div>

      <div
        class="col-lg-6 col-12 d-flex justify-content-center position-relative"
      >
        <div class="choose-us-pic"></div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="bi bi-play-btn"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"
            />
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="row d-flex align-items-center" style="margin-top: 100px">
      <div class="col-xxl-4 col-xl-6 col-12">
        <div class="details d-flex">
          <div class="icon"></div>

          <div class="content pt-2 pb-2">
            <h5 class="font-3 black-color"><b>Nutrition Strategies</b></h5>
            <p class="font-4 gray-color">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            </p>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-xl-6 col-12">
        <div class="details d-flex">
          <div class="icon"></div>

          <div class="content pt-2 pb-2">
            <h5 class="font-3 black-color"><b>Individual Coaching</b></h5>
            <p class="font-4 gray-color">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            </p>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-xl-6 col-12">
        <div class="details d-flex">
          <div class="icon"></div>

          <div class="content pt-2 pb-2">
            <h5 class="font-3 black-color"><b>Certified Company</b></h5>
            <p class="font-4 gray-color">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding-top: 100px;
  padding-bottom: 100px;
}
.choose-us-pic {
  background-image: url(../assets/shoose-us-1.jpg);
  background-size: cover;
  width: 560px;
  height: 400px;
}

h5 {
  transition: 0.5s;
}
h5:hover {
  color: #57b957;
}
button {
  position: absolute;
  background-color: #57b957;
  border: none;
  z-index: 10;
  padding: 20px 40px 20px 40px;
  transition: 0.5s;
  margin-left: 370px;
  margin-top: 350px !important;
}

button:hover {
  opacity: 0.6;
}

button svg {
  width: 50px;
  height: 50px;
  fill: white;
}
.details {
  width: 400px;
  transition: 0.5s;
}
.icon {
  background-color: #e6f5e6;
  width: 180px !important;
  height: auto;
  transition: 0.5s;
}
.content {
  padding-left: 5px;
  transform: translateX(13px) translateY(-10px);
  transition: 0.5s;
}

.details:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.details:hover .icon {
  background-color: #57b957;
}

.details:hover .content {
  transform: translateX(0px) translateY(0px);
}

.col-xxl-4 {
  margin-top: 10px;
  margin-bottom: 10px;
}

@media (max-width: 800px) {
  .choose-us-pic {
    width: 700px !important;
    height: 400px;
  }
}

@media (max-width: 550px) {
  button {
    margin-left: 270px;
  }
}
</style>
