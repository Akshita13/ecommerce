<template>
  <div class="px-3 overflow-auto">
    <h5 class="fw-bold py-3 mb-0">Manage Studio Profile</h5>
    <div class="row">
      <div class="col-4">
        <div class="border px-3">
          <h6 class="fw-bold py-3">Add Studio Images</h6>
          <div
            class="upload-image-container d-flex flex-column align-items-center"
          >
            <div>
              <span class="small-font-size text-primary fw-semibold"
                >Upload Images
              </span>
              <span class="small-font-size text-secondary fw-semibold"
                >or just drag and drop</span
              >
            </div>
            <div class="small-font-size text-secondary">+Add 5 Images</div>
          </div>
          <div class="row g-2">
            <figure class="col-4">
              <img
                class="img-fluid img-prop"
                src="../assets/images/singer2.png"
                alt=""
              />
            </figure>
            <figure class="col-4">
              <img
                class="img-fluid img-prop"
                src="../assets/images/singer2.png"
                alt=""
              />
            </figure>
            <figure class="col-4">
              <img
                class="img-fluid img-prop"
                src="../assets/images/singer2.png"
                alt=""
              />
            </figure>
            <figure class="col-4">
              <img
                class="img-fluid img-prop"
                src="../assets/images/singer2.png"
                alt=""
              />
            </figure>
            <figure class="col-4">
              <img
                class="img-fluid img-prop"
                src="../assets/images/singer2.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="border px-3">
          <h6 class="fw-bold py-3">Studio Details</h6>
          <div class="row">
            <div class="mb-3 col-6">
              <label
                for="exampleFormControlInput1"
                class="form-label fw-semibold form-text-size"
                >Studio Name <span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control form-text-size"
                id="exampleFormControlInput1"
                placeholder="Studio Name"
              />
            </div>
            <div class="mb-3 col-6">
              <label
                for="exampleFormControlInput1"
                class="form-label fw-semibold form-text-size"
                >Address <span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control form-text-size"
                id="exampleFormControlInput1"
                placeholder="Address"
              />
            </div>
            <div class="mb-3 col-6">
              <label
                for="exampleFormControlTextarea1"
                class="form-label fw-semibold form-text-size"
                >Studio Description <span class="text-danger">*</span></label
              >
              <textarea
                class="form-control form-text-size"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Studio Description"
              ></textarea>
            </div>
            <div class="mb-3 col-6">
              <label
                for="exampleFormControlTextarea1"
                class="form-label fw-semibold form-text-size"
                >Hardware & Equipments<span class="text-danger">*</span></label
              >
              <textarea
                class="form-control form-text-size"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Hardware & Equipments"
              ></textarea>
            </div>
            <div class="mb-3 col-6">
              <label
                for="exampleFormControlInput1"
                class="form-label fw-semibold form-text-size"
                >Select Country</label
              >
              <select
                class="form-select form-text-size"
                aria-label="Default select example"
              >
                <option selected>India</option>
                <option value="1">India</option>
                <option value="2">Bolivia</option>
              </select>
            </div>
            <div class="mb-3 col-3">
              <label
                for="exampleFormControlInput1"
                class="form-label fw-semibold form-text-size"
                >Select City <span class="text-danger">*</span></label
              >
              <select
                class="form-select form-text-size"
                aria-label="Default select example"
              >
                <option value="" selected>Select City</option>
                <option value="1">Surat</option>
                <option value="2">Ahmedabad</option>
              </select>
            </div>
            <div class="mb-3 col-3">
              <label
                for="exampleFormControlInput1"
                class="form-label fw-semibold form-text-size"
                >Select State<span class="text-danger">*</span></label
              >
              <select
                class="form-select form-text-size"
                aria-label="Default select example"
              >
                <option value="" selected>Select State</option>
                <option value="1">Gujarat</option>
                <option value="2">Rajasthan</option>
              </select>
            </div>

            <div class="mb-3 col-6">
              <div class="row">
                <div class="col-12">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label fw-semibold form-text-size"
                    >Select Studio Days
                    <span class="text-danger">*</span></label
                  >
                </div>
                <div class="mb-3 col-6">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label fw-semibold form-text-size"
                    >From<span class="text-danger">*</span></label
                  >
                  <select
                    class="form-select form-text-size"
                    aria-label="Default select example"
                  >
                    <option value="" selected>From</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label fw-semibold form-text-size"
                    >To<span class="text-danger">*</span></label
                  >
                  <select
                    class="form-select form-text-size"
                    aria-label="Default select example"
                  >
                    <option value="" selected>To</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mb-3 col-6">
              <div class="row">
                <div class="col-12">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label fw-semibold form-text-size"
                    >Select Studio Hrs <span class="text-danger">*</span></label
                  >
                </div>
                <div class="mb-3 col-6">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label fw-semibold form-text-size"
                    >From<span class="text-danger">*</span></label
                  >
                  <select
                    class="form-select form-text-size"
                    aria-label="Default select example"
                  >
                    <option value="" selected>From</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label fw-semibold form-text-size"
                    >To<span class="text-danger">*</span></label
                  >
                  <select
                    class="form-select form-text-size"
                    aria-label="Default select example"
                  >
                    <option value="" selected>To</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mb-3 col-6">
              <label
                for="exampleFormControlInput1"
                class="form-label fw-semibold form-text-size"
                >Select Sudio Services<span class="text-danger">*</span></label
              >
              <select
                class="form-select form-text-size"
                aria-label="Default select example"
              >
                <option value="" selected>Select Sudio Services</option>
                <option value="1">Recording Room</option>
                <option value="2">Jamming</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "StudioDetail",
});
</script>

<style>
</style>