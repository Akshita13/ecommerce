<template>
  <nav class="navbar navbar-expand-lg overfow-hidden">
    <div class="container-fluid px-4 py-2">
      <div class="navbar-brand d-flex">
        <img src="../../assets/images/music.png" alt="Bootstrap" height="34" />
        <div>1Rhythm</div>
      </div>
      <div
        class="collapse navbar-collapse d-flex flex-grow-1"
        id="navbarSupportedContent"
      >
        <ul
          class="
            navbar-nav
            mb-2 mb-lg-0
            d-flex
            flex-grow-1
            justify-content-center
          "
        >
          <li
            class="nav-item d-flex align-items-center pe-3"
            v-for="(route, index) in routeList"
            :key="index"
            :id="route.id"
          >
            <div class="d-flex" @click="redirectScreen(route.id, route.routeName)">
              <div :class="route.iconClass"></div>
              <div class="nav-link py-0">{{ route.name }}</div>
            </div>
          </li>
        </ul>
        <div>
          <div class="dropdown">
            <img
              src="../../assets/images/profile.png"
              class="btn border border-0 dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              alt="profile"
            />


            <ul class="dropdown-menu dropdown-menu-end">
              <li class="dropdown-link-item">
                <figure>
                  <img src="../../assets/images/mike.png" alt="" />
                </figure>
                <a class="dropdown-item" href="#">Available</a>
              </li>
              <li class="dropdown-link-item">
                <figure>
                  <img src="../../assets/images/mike.png" alt="" />
                </figure>
                <a class="dropdown-item" href="#">Manage Profile</a>
              </li>
              <li class="dropdown-link-item">
                <figure>
                  <img src="../../assets/images/mike.png" alt="" />
                </figure>
                <a class="dropdown-item" href="#">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TopBar",
  data() {
    return {
      routeList: [
        { id: 0, iconClass: "icon-home", routeName: "Home", name: "Home" },
        {
          id: 1,
          iconClass: "icon-artist",
          routeName: "Studio",
          name: "Studio",
        },
        {
          id: 3,
          iconClass: "icon-booking",
          routeName: "BookingHistory",
          name: "Booking History",
        },
      ],
    };
  },
  methods: {
    redirectScreen(id, routeName) {
      let all = document.getElementsByClassName("nav-item");
      this.$router.push({ name: routeName });
      for (var i = 0; i < all.length; i++) {
        all[i].classList.remove("activeLinkColor");
        document.getElementsByClassName("nav-link")[i].classList.remove('activeLinkColor')
        if (id == all[i].id) {
          document.getElementsByClassName("nav-link")[i].classList.add('activeLinkColor')
          all[i].classList.add("activeLinkColor");
        }
      }
    },
  },
});
</script>

<style>
</style>