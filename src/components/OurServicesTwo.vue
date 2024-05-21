<template>
  <section class="">
    <div class="container-fluid">
      <div class="row row-one justify-content-center">
        <div class="col-lg-6 text-center">
          <h4 class="font-1 green-color">
            <span class="line"></span> What We Do <span class="line"></span>
          </h4>
          <h1 class="font-3 black-color">
            Our <span style="font-weight: 700">Services</span>
          </h1>
          <p class="font-2 gray-color">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium. doloremque
            laudantium.
          </p>
        </div>
      </div>
      <div class="row row-two justify-content-center">
        <div
          class="col-3 service-card text-center shadow-lg d-flex flex-column justify-content-center align-items-center"
        >
          <div class="content">
            <img src="../assets/barbel.png" alt="barbel" width="70px" />
            <h5 class="font-4 black-color mt-1 mb-4">
              <b>Exersize Program</b>
            </h5>
          </div>

          <button class="btn-green btn-hover">Read More</button>
        </div>

        <div
          class="col-3 service-card text-center d-flex flex-column justify-content-center align-items-center"
        >
          <div class="content">
            <img src="../assets/yoga-pose.png" alt="yoga" width="70px" />
            <h5 class="font-4 black-color mt-1 mb-4">
              <b>Balance Body Mind</b>
            </h5>
          </div>

          <button class="btn-green btn-hover">Read More</button>
        </div>
        <div
          class="col-3 service-card text-center d-flex flex-column justify-content-center align-items-center"
        >
          <div class="content">
            <img src="../assets/sneakers.png" alt="sneakers" width="70px" />
            <h5 class="font-4 black-color mt-1 mb-4">
              <b>Physical Activity</b>
            </h5>
          </div>

          <button class="btn-green btn-hover">Read More</button>
        </div>
        <div
          class="col-3 service-card text-center d-flex flex-column justify-content-center align-items-center"
        >
          <div class="content">
            <img src="../assets/fitness.png" alt="fitness" width="70px" />
            <h5 class="font-4 black-color mt-1 mb-4">
              <b>Support & Motivation</b>
            </h5>
          </div>

          <button class="btn-green btn-hover">Read More</button>
        </div>

        <div class="row justify-content-center">
          <div
            class="col-3 service-card text-center d-flex flex-column justify-content-center align-items-center"
          >
            <div class="content">
              <img src="../assets/heart.png" alt="fitness" width="70px" />
              <h5 class="font-4 black-color mt-1 mb-4">
                <b>Improving Health</b>
              </h5>
            </div>

            <button class="btn-green btn-hover">Read More</button>
          </div>
          <div
            class="col-3 service-card text-center d-flex flex-column justify-content-center align-items-center"
          >
            <div class="content">
              <img
                src="../assets/stationary-bike.png"
                alt="fitness"
                width="70px"
              />
              <h5 class="font-4 black-color mt-1 mb-4">
                <b>Personal Fitness</b>
              </h5>
            </div>

            <button class="btn-green btn-hover">Read More</button>
          </div>
          <div
            class="col-3 service-card text-center d-flex flex-column justify-content-center align-items-center"
          >
            <div class="content">
              <img src="../assets/supplement.png" alt="fitness" width="70px" />
              <h5 class="font-4 black-color mt-1 mb-4">
                <b>Healthy Daily Life</b>
              </h5>
            </div>

            <button class="btn-green btn-hover">Read More</button>
          </div>
          <div
            class="col-3 service-card text-center d-flex flex-column justify-content-center align-items-center"
          >
            <div class="content">
              <img src="../assets/chat-box.png" alt="fitness" width="70px" />
              <h5 class="font-4 black-color mt-1 mb-4">
                <b>First Hand Advice</b>
              </h5>
            </div>

            <button class="btn-green btn-hover">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.row-one {
  padding-top: 100px;
  padding-bottom: 100px;
}

.row-two {
  padding-bottom: 100px;
}
.service-card {
  background-color: #57b95745;
  width: 270px;
  height: 270px;
  margin: 20px;
  position: relative;
}

.content {
  transform: translateY(33px);
  transition: 0.5s ease;
}
button {
  opacity: 0;
  transform: translateY(33px);
  transition: 0.5s ease;
}

.service-card::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #57b957;
  transition: width 0.5s ease;
}

.service-card:hover::before {
  width: 100%;
}

.service-card:hover button {
  opacity: 1;
  transform: translateY(0);
}
.service-card:hover .content {
  transform: translateY(0);
}
</style>
