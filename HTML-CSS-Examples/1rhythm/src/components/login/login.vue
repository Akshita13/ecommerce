<template>
    <div class="login-form p-5">
      <span class="small-font-size fw-bold">WELCOME</span>
      <h5 class="fs-4 fw-bold mb-0 py-2">Login to Your Account</h5>
      <span class="small-font-size fw-semibold">Create an Account?</span>
      <span>
        <button
          class="btn btn-link text-decoration small-font-size fw-bold"
          type="button"
          @click="$router.push({ name: 'Registration' })"
        >
          Sign Up
        </button>
      </span>
      <form class="mt-5">
        <div class="mb-4 d-flex flex-column">
          <label for="exampleInputEmail1" class="form-label small-font-size fw-bold mb-1">Email ID<span class="text-danger ps-1">*</span></label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-5 d-flex flex-column">
          <label for="exampleInputPassword1" class="form-label small-font-size fw-bold mb-1"
            >Password<span class="text-danger ps-1">*</span></label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-color btn-primary px-5"
        @click="signIn()">Sign In</button>
      </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  methods:{
    signIn(){
      this.$router.push('/home');
    }
  }
});
</script>


