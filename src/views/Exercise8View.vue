<template>
  <div class="max-width-screen" id="exercise-8">
    <h2>Shopping Cart</h2>
    <div class="row">
      <div class="col-8">
        <div class="row mt-4">
          <div
            v-for="(item, index) in products"
            :key="index"
            class="col-4 mb-4"
          >
            <div class="card">
              <img
                class="card-img-top"
                :src="item?.imgUrl"
                :alt="`card-${index}`"
              />
              <div class="card-body text-left">
                <h5 class="card-title text-capitalize">
                  {{ item.name }}
                  <span
                    class="badge"
                    :class="{
                      'badge-success': item.status === 'new',
                      'badge-danger': item.status === 'hot',
                    }"
                    >{{ item.status }}</span
                  >
                </h5>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <h4 class="text-danger">{{ item.price }}</h4>
                <div class="d-flex flex-column">
                  <p>สร้างเมื่อ</p>
                  <p>{{ formatDate(item.created_at) }}</p>
                </div>
                <button
                  @click="addCart(item)"
                  class="btn btn-primary btn-block mt-4"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <h4 class="my-4">ตะกร้าสินค้า</h4>
        <div v-for="(item, index) in carts" :key="index" class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <img
                  class="card-img-top"
                  :src="item?.imgUrl"
                  :alt="`card-${index}`"
                />
              </div>
              <div class="col-8 text-left">
                <h4>{{ item.name }}</h4>
                <h4 class="text-danger">{{ item.price }}</h4>
                <div class="mt-3">
                  <input class="form-control" v-model="item.qty" type="text" />
                </div>
                <div class="mt-2">
                  <button class="btn btn-danger" @click="removeProduct(index)">
                    ลบ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-right text-capitalize">
          <h5>total :{{ totalPrice }}</h5>
        </div>
        <button
          class="btn btn-success mt-4"
          @click="checkOut"
          :disabled="loadingCheckOut"
        >
          {{ loadingCheckOut ? "Processing..." : "Checkout" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { formatDate } from "@/utils/general";

export default {
  data() {
    return {
      products: [],
      carts: [],
      loading: false,
      loadingCart: false,
      loadingCheckOut: false,
    };
  },
  created() {
    this.myCarts();
    this.fetchProducts();
  },
  computed: {
    totalPrice() {
      return this.carts?.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
  },
  methods: {
    formatDate,
    async fetchProducts() {
      const url = "https://vuejs-stock-trader-aa575.firebaseio.com/data.json";
      this.loading = true;
      try {
        const response = await axios.get(url);
        const data = response?.data;
        this.products = data?.products;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.loading = false;
      }
    },
    async myCarts() {
      const url = `https://vuejs-stock-trader-aa575.firebaseio.com/checkout.json`;
      this.loadingCart = true;
      try {
        const response = await axios.get(url);
        const data = response?.data;
        this.carts = data;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.loadingCart = false;
      }
    },
    async checkOut() {
      const url = `https://vuejs-stock-trader-aa575.firebaseio.com/checkout.json`;
      this.loadingCheckOut = true;

      try {
        const response = await axios.put(url, this.carts);

        if (response && response.status === 200) {
          this.$router.push({ name: "checkout" });
        } else {
          throw new Error("Failed to process checkout. Please try again.");
        }
      } catch (error) {
        console.error("Checkout Error:", error);
      } finally {
        this.loadingCheckOut = false;
      }
    },

    addCart(item) {
      //we can add more filter data here
      // const newValue = {
      //   id: item.id,
      //   name: item.name,
      //   price: item.price,
      //   imgUrl: item.imgUrl,
      //   qty: 1,
      // };

      const existingItem = this.carts.find((cart) => cart.id === item.id);

      if (existingItem) {
        existingItem.qty += 1;
        alert(`Added ${existingItem.name} + 1`);
      } else {
        this.carts.push(item);
        alert(`Added new ${item.name}`);
      }
    },
    removeProduct(index) {
      this.carts.splice(index, 1);
    },
  },
};
</script>
