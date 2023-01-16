<template>
  <div class="conainer w-100 h-100 overflow-auto px-4 y-3">
    <div class="row">
      <div class="col-4">
        <div class="row g-2">
          <div class="col-12">
            <img class="w-100" src="../assets/images/singer1.png" alt="" />
          </div>
          <figure class="col mb-0">
            <img
              class="img-fluid img-prop"
              src="../assets/images/singer2.png"
              alt=""
            />
          </figure>
          <figure class="col mb-0">
            <img
              class="img-fluid img-prop"
              src="../assets/images/singer3.png"
              alt=""
            />
          </figure>
          <figure class="col mb-0">
            <img
              class="img-fluid img-prop"
              src="../assets/images/singer4.png"
              alt=""
            />
          </figure>
          <figure class="col mb-0">
            <img
              class="img-fluid img-prop"
              src="../assets/images/singer3.png"
              alt=""
            />
          </figure>
          <figure class="col mb-0">
            <img
              class="img-fluid img-prop"
              src="../assets/images/singer2.png"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <h5 class="fw-bold m-0">ENNA MICHALLE SINGER</h5>
          <div class="fs-6 fst-italic text-secondary py-2">
            Available For Events And Music Classes
          </div>
          <div class="small-font-size">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consequatur error iusto perferendis libero, distinctio modi
            doloremque perspiciatis architecto corporis tempora. Labore cumque
            porro vero nihil veniam ipsa ab eveniet?
          </div>
          <div class="d-flex py-3">
            <div class="col-6 pe-3">
              <!-- should not use table or col because this scenario will not much responsive 
              and when we change size of window it will impact in padding and everything  -->
              <!-- <table>
              <tr>
                <td rowspan="2"><img src="../assets/images/mike.png" alt=""></td>
                <th class="small-font-size text-secondary">PERFORMANCE TYPE</th>
              </tr>
              <tr>
                <td class="small-font-size fw-bold">Solo Performer</td>
              </tr>
            </table> -->
              <!-- <div class="row py-2">
                <div class="col-2">
                  <img src="../assets/images/mike.png" alt="" />
                </div>
                <div class="col px-0">
                  <div class="small-font-size text-secondary">
                    PERFORMANCE TYPE
                  </div>
                  <div class="small-font-size fw-bold">Solo Performer</div>
                </div>
              </div> -->
              <div class="d-flex py-2 border px-2">
                <figure>
                  <img src="../assets/images/mike.png" alt="" />
                </figure>
                <div class="px-3">
                  <div class="small-font-size text-secondary">
                    PERFORMANCE TYPE
                  </div>
                  <div class="small-font-size fw-bold">Solo Performer</div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex py-2 border px-2">
                <figure>
                  <img src="../assets/images/mike.png" alt="" />
                </figure>
                <div class="px-3">
                  <div class="small-font-size text-secondary">
                    EVENT AVAILABLE FROM
                  </div>
                  <div class="small-font-size fw-bold">Monday - Saturday</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex py-2 border px-2">
              <figure>
                <img src="../assets/images/mike.png" alt="" />
              </figure>
              <div class="px-3">
                <div class="small-font-size text-secondary">PRICES</div>
                <div class="d-flex">
                  <div class="small-font-size fw-bold mt-1 me-2">
                    Solo Performer:
                  </div>
                  <div class="bedge">15000 Rs/Event</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 py-3">
            <div class="d-flex py-2 border px-2">
              <figure>
                <img src="../assets/images/mike.png" alt="" />
              </figure>
              <div class="px-3">
                <div class="d-flex">
                  <div class="small-font-size text-secondary mt-1 me-2">
                    MUSIC CLASSES
                  </div>
                  <div class="bedge me-2">4pm - 6pm</div>
                  <div class="bedge">Monday - Saturday</div>
                </div>
                <div class="d-flex mt-2">
                  <div class="d-flex">
                    <div class="small-font-size fw-bold mt-1 me-2">
                      Bass Guitar:
                    </div>
                    <div class="bedge">15000 Rs/Event</div>
                  </div>
                  <div class="d-flex ms-3">
                    <div class="small-font-size fw-bold mt-1 me-2">
                      Bass Guitar:
                    </div>
                    <div class="bedge">15000 Rs/Event</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 py-3">
            <div class="d-flex py-2 border px-2">
              <figure>
                <img src="../assets/images/mike.png" alt="" />
              </figure>
              <div class="px-3">
                <div class="small-font-size text-secondary">MUSIC CLASS ADDRESS</div>
                <div class="d-flex">
                  <div class="small-font-size fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-color btn-primary px-5" @click="openBookingForm()">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <template v-if="isShowOverlay">
    <booking-detail @closeOverlay="closeOverlay"></booking-detail>
  </template>

</template>

<script>
import { defineComponent } from "vue";
import BookingDetail from '@/components/booking-detail.vue'
export default defineComponent({
  name: "Detail",
  components:{
    BookingDetail
  },
  data(){
    return{
      isShowOverlay:false
    }
  },
  methods:{
    openBookingForm(){
      this.isShowOverlay=true
    },
    closeOverlay(){
      this.isShowOverlay=false
    }
  }
});
</script>
