<template>
  <div class="max-width-screen" id="checkout">
    <h2>Checkout</h2>
    <div class="text-left">
      <router-link :to="{ name: 'exercise-8' }"
        >Back to shopping cart</router-link
      >
    </div>
    <div class="row mt-4">
      <div class="col-8 offset-2">
        <table class="table">
          <thead class="table-info">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in checkOuts" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td class="text-left">
                <img
                  width="60"
                  class="rounded border border-secondary mr-2"
                  :src="item?.imgUrl"
                  :alt="`card-${index}`"
                />{{ item.name }}
              </td>
              <td>{{ item.price }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ sumPrice(item.qty, item.price) }}</td>
            </tr>
            <tr>
              <td class="text-right" colspan="4"><b>Total</b></td>
              <td>
                <b>{{ totalPrice }}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { sumPrice } from "@/utils/general";
import axios from "axios";

export default {
  data() {
    return {
      checkOuts: [],
      loading: false,
    };
  },
  created() {
    this.fetchCheckOuts();
  },
  computed: {
    totalPrice() {
      return this.checkOuts?.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
  },
  methods: {
    sumPrice,
    async fetchCheckOuts() {
      const url = `https://vuejs-stock-trader-aa575.firebaseio.com/checkout.json`;
      this.loading = true;
      try {
        const response = await axios.get(url);
        const data = response?.data;
        this.checkOuts = data;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
