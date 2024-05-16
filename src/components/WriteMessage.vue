<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const username = ref("");
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
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-5 col-sm-12 px-0">
        <img class="w-100" src="../assets/appointment.jpg" alt="" />
      </div>

      <div
        class="col-md-6 col-sm-12 forms d-flex justify-content-center flex-column"
      >
        <h4 class="font-1 green-color">
          <span class="line"></span>Write Message
        </h4>

        <h1 class="font-3 black-color">
          Make An <br />
          <b>Appointment</b>
        </h1>
        <form
          class="needs-validation"
          novalidate
          @submit.prevent="validateForm"
        >
          <div class="form-row">
            <div class="col-md-6 col-12">
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="First name"
                v-model="firstName"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-6 col-12">
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder="Last name"
                v-model="lastName"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="input-graoup">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                v-model="username"
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="col-md-12">
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

              <div class="invalid-feedback">Please send us a message.</div>
            </div>
          </div>
          <button class="btn-green mt-3" type="submit">Submit form</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  background-color: #edf0f3;
}

input {
  height: 60px;
  width: 100%;
  border: none;
}

input:focus {
  border: 1px solid green;
  box-shadow: none;
}

textarea:focus {
  border: 1px solid green;
  box-shadow: none;
}
textarea {
  height: 160px;
  border: none;
}
.form-row {
  display: flex;
  justify-content: space-between;
}

.form-row .col-md-6 {
  margin: 10px 10px 3px 0px !important;
}

.col-md-12 {
  margin: 10px 10px 10px 0px !important;
  width: 101%;
}

.forms {
  padding-left: 100px;
}

@media (max-width: 1150px) {
  .forms {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
@media (max-width: 768px) {
  .form-row {
    display: block;
    justify-content: space-between;
  }
  .forms {
    padding-left: 10px;
  }
}
</style>
