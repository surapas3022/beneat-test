<template>
  <div class="max-width-screen" id="exercise-7">
    <h2>Regsiter Form (API)</h2>
    <div class="row mt-4">
      <div class="col-6 offset-3 text-left">
        <div class="card" v-if="!loading">
          <form @submit.prevent="handleSubmit()" class="card-body">
            <FormInput
              v-model="form.name"
              type="text"
              title="ชือ"
              id="fullname"
              placeholder="ชือ"
            />
            <FormInput
              v-model="form.national"
              type="text"
              title="สัญชาติ"
              id="national"
              placeholder="สัญชาติ"
            />
            <FormInput
              v-model="form.email"
              type="text"
              title="อีเมล"
              id="email"
              placeholder="อีเมล"
            />
            <FormInput
              v-model="form.age"
              type="text"
              title="อายุ"
              id="age"
              placeholder="อายุ"
            />
            <div class="d-flex flex-column align-items-start">
              <label for="address">ที่อยู่</label>
              <textarea
                class="form-group w-100"
                v-model="form.address"
                id="address"
              ></textarea>
            </div>
            <div class="d-flex flex-column align-items-start w-100">
              <label for="gender">เพศ</label>
              <div class="d-flex justify-content-center aligh-content-center">
                <input
                  v-model="form.gender"
                  type="radio"
                  id="male"
                  name="male"
                  value="male"
                />
                <label class="mb-0 pl-2" for="male">ชาย</label>
              </div>
              <div>
                <input
                  v-model="form.gender"
                  type="radio"
                  id="female"
                  name="female"
                  value="female"
                />
                <label class="mb-0 pl-2" for="female">หญิง</label>
              </div>
            </div>
            <div class="d-flex flex-column align-items-start w-100">
              <select
                v-model="form.education"
                id="level"
                class="form-group w-100"
                style="padding: 0.375rem 0.75rem"
              >
                <option
                  v-for="(item, index) in levels"
                  :key="index"
                  :value="item.val"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  type="checkbox"
                  id="newsletter"
                  v-model="form.newsletter"
                  class="form-check-input"
                />
                <label for="newsletter" class="form-check-label">
                  คุณต้องการรับข่าวสารใช่หรือไม่
                </label>
              </div>
            </div>
            <div>
              <button
                class="btn btn-primary btn-block text-capitalize"
                :disabled="loading"
              >
                {{ loading ? "Saving..." : "Submit" }}
              </button>
            </div>
          </form>
        </div>
        <div v-else>
          <p>...loading</p>
        </div>
      </div>
    </div>
    <ModalAlert
      v-if="isAlert"
      :show="isAlert"
      message="Saved data success"
      @close="handleModalClose"
      @confirm="handleModalConfirm"
    />
  </div>
</template>
<script>
import axios from "axios";

import FormInput from "@/components/Materials/InputGroup.vue";
import ModalAlert from "@/components/Materials/ModalAlert.vue";

export default {
  components: {
    FormInput,
    ModalAlert,
  },
  data() {
    return {
      form: [],
      levels: [
        { name: "เลือกระดับการศึกษา", val: null },
        { name: "ประถมศึกษา", val: "ประถมศึกษา" },
        { name: "มัธยมศึกษา", val: "มัธยมศึกษา" },
        { name: "ปริญญาตรี", val: "ปริญญาตรี" },
        { name: "ปริญญาโท", val: "ปริญญาโท" },
        { name: "ปริญญาเอก", val: "ปริญญาเอก" },
      ],
      loading: false,
      isAlert: false,
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      this.loading = true;
      try {
        const url =
          "https://vuejs-stock-trader-aa575.firebaseio.com/userFormData.json";
        const response = await axios.get(url);
        this.form = response.data;
        console.log("Fetched Data:", this.form);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    async handleSubmit() {
      this.loading = true;
      try {
        const url = `https://vuejs-stock-trader-aa575.firebaseio.com/userFormData.json`;

        const response = await axios.put(url, this.form, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.isAlert = true;
        console.log("Data Saved Successfully:", response.data);
      } catch (error) {
        this.isAlert = false;
        console.error("Error save data:", error);
      } finally {
        this.loading = false;
      }
    },
    handleModalClose() {
      this.isAlert = false;
    },
    handleModalConfirm() {
      this.isAlert = false;
    },
  },
};
</script>
