<template>
  <div class="bg-gray h-100 w-100 overflow-auto">
    <div class="m-4">
      <div class="d-flex justify-content-between align-items-center my-3">
        <h4 class="fw-bold mb-0">Booking History</h4>
        <div class="fw-bold text-decoration-underline small-font-size">
          Clear History
        </div>
      </div>
      <div>
        <table class="table border-collapse table-borderless w-100">
          <tbody>
            <tr class="bg-white">
              <td class="bg-blue p-2 d-flex flex-column align-items-center">
                <div class="text-white fw-semibold">12</div>
                <div class="small-font-size text-white">Dec</div>
              </td>
              <td class="ps-2">You Booked <span class="fw-bold">Charlie Puth</span> For Event</td>
              <td>Book On: 10/11/2022</td>
              <td><div class="status-bedge accepted-bedge-color">Accepted</div></td>
              <td class="icon-delete1"></td>
            </tr>
            <tr class="bg-white">
              <td class="bg-blue p-2 d-flex flex-column align-items-center">
                <div class="text-white fw-semibold">12</div>
                <div class="small-font-size text-white">Dec</div>
              </td>
              <td class="ps-2">You Booked <span class="fw-bold">Charlie Puth</span> For Event</td>
              <td>Book On: 10/11/2022</td>
              <td><div class="status-bedge rejected-bedge-color">Rejected</div></td>
              <td class="icon-delete1"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BookingHistory",
});
</script>

<style>
</style>