<template>
<div class="bg-light overflow-auto">
  <div class="px-4 pb-4">
    <div class="d-flex justify-content-between py-3">
      <h5 class="mb-0 fw-bold">Explore Studios</h5>
      <a href="#" class="fw-semibold small-font-size text-primary text-decoration-none">SEE ALL</a>
    </div>
    <div class="d-flex">
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/studios.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">Magical Studio</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            style="width: 100%"
            @click="$router.push({name:'Detail'})"
          >
            View Details
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/studios.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">Classic Studio</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            style="width: 100%"
            @click="viewArtistDetail()"
          >
            View Details
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/studios.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">Classic Studio</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            style="width: 100%"
            @click="viewArtistDetail()"
          >
            View Details
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/studios.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">Classic Studio</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            style="width: 100%"
            @click="viewArtistDetail()"
          >
            View Details
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/studios.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">Classic Studio</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            style="width: 100%"
            @click="viewArtistDetail()"
          >
            View Details
          </button>
        </div>
      </div>
      
    </div>
  </div>
  <div class="px-4">
    <div class="d-flex justify-content-between py-3">
      <h5 class="mb-0 fw-bold">Explore Atists</h5>
      <a href="#" class="fw-semibold small-font-size text-primary text-decoration-none">SEE ALL</a>
    </div>
    <div class="d-flex">
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/artist-profile.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">jeanette</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="viewArtistDetail()"
            style="width: 100%"
          >
            View Details
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/artist-profile.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">jeanette</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="viewArtistDetail()"
            style="width: 100%"
          >
            View Details
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/artist-profile.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">jeanette</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="viewArtistDetail()"
            style="width: 100%"
          >
            View Details
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/artist-profile.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">jeanette</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="viewArtistDetail()"
            style="width: 100%"
          >
            View Details
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img
            src="../assets/images/artist-profile.png"
            class="card-img-top"
            alt="..."
          />
          <span class="card-title">jeanette</span>
          <p class="card-text">Some quick example text to build on the card</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="$router.push({name:Detail})"
            style="width: 100%"
          >
            View Details
          </button>
        </div>
      </div>
      
    </div>
  </div>
</div>
<!-- <template v-if="isShowArtistDetail">
  <Detail/>
</template> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Detail from '@/components/detail.vue'
export default defineComponent({
  name: "Home",
  // components:{
  //   Detail
  // },
  data(){
    return{
      isShowArtistDetail:false
    }
  },
  methods:{
    // viewArtistDetail(){
    //   // this.isShowArtistDetail=true
    // }
  }
});
</script>

<style>
</style>