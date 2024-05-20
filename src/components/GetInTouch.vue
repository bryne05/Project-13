<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const validateForm = (event) => {
  const form = event.target;
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-5 col-md-12 px-0">
        <iframe
          loading="lazy"
          class="maps overflow-hidden w-100"
          style="height: 750px"
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
          title="London Eye, London, United Kingdom"
          aria-label="London Eye, London, United Kingdom"
        ></iframe>
      </div>
      <div
        class="col-xl-6 col-md-12 d-flex flex-column justify-content-center p-5 shadow-sm"
      >
        <h4 class="font-1 green-color">
          <span class="line"></span> Write Message
        </h4>

        <h1 class="font-3 black-color">Get In <b>Touch</b></h1>
        <form
          class="needs-validation"
          novalidate
          @submit.prevent="validateForm"
        >
          <div class="form-row">
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Your Name"
                v-model="name"
                required
              />
              <div class="valid-feedback">Please enter your name.</div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="input-graoup">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                placeholder="Your Email"
                aria-describedby="inputGroupPrepend"
                v-model="email"
                required
              />
              <div class="invalid-feedback">Please enter your email.</div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="input-graoup">
              <textarea
                type="text"
                class="form-control custom-focus"
                id="validationCustomMessage"
                placeholder="Your Message"
                aria-describedby="inputGroupPrepend"
                v-model="message"
                required
              >
              </textarea>

              <div class="invalid-feedback">Please enter your message.</div>
            </div>
          </div>
          <button class="btn-green mt-3" type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container{
  padding-top: 50px;
  padding-bottom: 80px;
}
input {
  padding: 20px !important;
  border: none;
  background-color: #edf0f3;
}

textarea {
  padding-bottom: 70px;
  border: none;
  background-color: #edf0f3;
}

input:focus {
  border: 1px solid green;
  box-shadow: none;
  background-color: #edf0f3;
}

textarea:focus {
  border: 1px solid green;
  box-shadow: none;
  background-color: #edf0f3;
}
button{
  margin-left: 10px;
}
.col-md-10 {
  padding: 10px !important;
}
</style>
