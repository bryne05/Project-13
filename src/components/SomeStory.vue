<template>
  <section id="story">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mt-3 mb-3">
          <h4 class="font-1 green-color mb-2 mt-5">
            <span class="line"></span>Some Story
          </h4>
          <h1 class="font-3 black-color mb-5">
            We Have 20 Years <br />
            of
            <span style="font-weight: 700">Experience</span>
          </h1>
          <p class="font-2 gray-color2 mb-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium.
          </p>
          <ul class="custom-list">
            <a href="#" class="gray-color font-2">
              <li class="mt-2 mb-2">
                Convallis ligula ligula gravida tristique magna tincidunt.
              </li>
            </a>
            <a href="#" class="gray-color font-2 mt-2">
              <li class="mt-2 mb-2">
                Lobortis massa fringilla odio ultricies tempus.
              </li>
            </a>
            <a href="#" class="gray-color font-2">
              <li class="mt-2 mb-2">Faucibus odio quis eleifend eros risus.</li>
            </a>
          </ul>

          <div class="col-12 mt-5">
            <button class="btn-green">Get Started</button>
          </div>
        </div>

        <div class="col-lg-6 col-12 d-flex justify-content-start">
          <div class="pic-1"></div>
          <div class="pic-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.row {
  padding-top: 100px;
  padding-bottom: 100px;
}
h1 {
  font-size: clamp(20px, 45px, 3vw) !important;
}

a {
  text-decoration: none;
}
.custom-list {
  list-style: none;
}

.custom-list li::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right: 5px;
}

ul {
  padding: 0;
}
li {
  transition: 0.4s;
}
li:hover {
  color: #47b957;
}

.pic-1 {
  background-image: url(../assets/about.jpg);
  width: 440px;
  height: 500px;
  margin-left: 50px;
  position: relative;
}

.pic-2 {
  background-image: url(../assets/about-2.jpg);
  margin-top: 400px !important;
  width: 300px;
  height: 200px;
  background-size: cover;
  position: absolute;
  z-index: 10;
}
</style>
