<template>
  <div class="login-form p-5">
    <h5 class="fs-4 fw-bold mb-0 py-2 p-left">Create Your Account</h5>
    <span class="small-font-size fw-semibold p-left">Already have an account?</span>
    <span>
      <button
        class="btn btn-link text-decoration small-font-size fw-bold"
        type="button"
        @click="$router.push({ name: 'Login' })"
      >
        Sign In
      </button>
    </span>
    <div class="py-4 p-left">
      <span class="icon-user position-relative">
      <span class="icon-plus plus-icon-position" @click="addUser()"><span class="path1"></span><span class="path2"></span></span>
      </span>
    </div>
    <form class="container">
      <div class="row">
        <div class="mb-4 d-flex flex-column col">
          <label
            for="exampleInputFirstName"
            class="form-label small-font-size fw-bold mb-1"
            >First Name<span class="text-danger ps-1">*</span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputFirstName"
            aria-describedby="firstname"
          />
        </div>
        <div class="mb-4 d-flex flex-column col">
          <label
            for="exampleInputLastName"
            class="form-label small-font-size fw-bold mb-1"
            >Last Name<span class="text-danger ps-1">*</span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputLastName"
            aria-describedby="lastname"
          />
        </div>
      </div>
      <div class="row">
        <div class="mb-4 d-flex flex-column col">
          <label
            for="exampleInputEmail1"
            class="form-label small-font-size fw-bold mb-1"
            >Email ID<span class="text-danger ps-1">*</span></label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-4 d-flex flex-column col">
          <label
            for="exampleInputPassword1"
            class="form-label small-font-size fw-bold mb-1"
            >Password<span class="text-danger ps-1">*</span></label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </div>
      <div class="row">
        <div class="mb-4 d-flex flex-column col">
          <label
            for="phonenumber"
            class="form-label small-font-size fw-bold mb-1"
            >Phone Number<span class="text-danger ps-1">*</span></label
          >
          <input
            type="number"
            class="form-control"
            id="phonenumber"
          />
        </div>
        <div class="mb-4 d-flex flex-column col">
          <label
            for="usertype"
            class="form-label small-font-size fw-bold mb-1"
            >Select User Type<span class="text-danger ps-1">*</span></label
          >
          <div class="drpdwn-arrow">
            <select id="usertype" class="form-select" aria-label="Default select example">
              <option selected  value="1">Select User Type</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mb-4 d-flex flex-column col-6">
          <label
            for="country"
            class="form-label small-font-size fw-bold mb-1"
            >Select Country<span class="text-danger ps-1">*</span></label
          >
          <div class="drpdwn-arrow">
            <select id="country" class="form-select" aria-label="Default select example">
              <option selected  value="1">India</option>
            </select>
          </div>
        </div>
        <div class="mb-4 d-flex flex-column col-3">
          <label
            for="city"
            class="form-label small-font-size fw-bold mb-1"
            >Select City<span class="text-danger ps-1">*</span></label
          >
          <div class="drpdwn-arrow">
            <select id="city" class="form-select" aria-label="Default select example">
              <option selected  value="1">Valsad</option>
            </select>
          </div>
        </div>
        <div class="mb-4 d-flex flex-column col-3">
          <label
            for="state"
            class="form-label small-font-size fw-bold mb-1"
            >Select State<span class="text-danger ps-1">*</span></label
          >
          <div class="drpdwn-arrow">
            <select id="state" class="form-select" aria-label="Default select example">
              <option selected  value="1">Gujarat</option>
            </select>
          </div>
        </div>
      </div>
      <div class="small-font-size mb-3">
        <span class="fw-bold">Note:</span>
        <span>Please add your studio information in manage studio section from your profile.</span>
      </div>
      <button type="submit" class="btn btn-color btn-primary px-5" @click="$router.push({ name: 'Login' })">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Registration",
  methods:{
    addUser(){
      console.log('clicked')
    }
  }
});
</script>

<style>
</style>