<template>
  <div id="exercise-2" class="padding-max-screen">
    <h2>Register Form (v-model)</h2>
    <div class="row justify-content-center mt-4" style="padding: 0 10%">
      <div class="col-md-6 d-flex justify-content-center mb-4">
        <div class="card w-100">
          <div class="card-body">
            <FormInput
              v-model="form.fullName"
              type="text"
              title="ชือ"
              id="fullname"
              placeholder="ชือ"
            />
            <FormInput
              v-model="form.tel"
              type="text"
              title="เบอร์โทร"
              id="tel"
              placeholder="เบอร์โทร"
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
              <div>
                <input
                  v-model="form.gender"
                  type="radio"
                  id="men"
                  name="men"
                  value="men"
                />
                <label for="men">ชาย</label><br />
              </div>
              <div>
                <input
                  v-model="form.gender"
                  type="radio"
                  id="women"
                  name="women"
                  value="women"
                />
                <label for="women">หญิง</label><br />
              </div>
            </div>
            <div class="d-flex flex-column align-items-start w-100">
              <select v-model="form.level" id="level" class="form-group w-100">
                <option
                  v-for="(item, index) in levels"
                  :key="index"
                  :value="item.val"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <button class="btn btn-primary mt-3 w-100" @click="submitForm">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center mb-4">
        <div v-if="show" class="card w-100">
          <div class="card-body text-left">
            <p v-if="display?.fullName">ชื่อ: {{ display?.fullName }}</p>
            <p v-if="display?.tel">เบอร์โทร: {{ display?.tel }}</p>
            <p v-if="display?.address">ที่อยู่: {{ display?.address }}</p>
            <p v-if="display?.gender">เพศ: {{ display?.gender }}</p>
            <p v-if="display?.level">ระดับการศีกษา: {{ display?.level }}</p>
            <button
              class="w-100 btn btn-outline-danger btn-block text-capitalize"
              @click="resetForm"
            >
              clear data
            </button>
          </div>
        </div>
        <div v-if="alertMessage" class="col-12">
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Errors : </strong>{{ alertMessage }}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              @click="alertMessage = ''"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/Materials/InputGroup.vue";
export default {
  name: "Exercise2View",
  components: {
    FormInput,
  },
  data() {
    return {
      form: {
        fullName: "",
        tel: "",
        address: "",
        gender: "",
        level: null,
      },
      levels: [
        { name: "เลือกระดับการศึกษา", val: null },
        { name: "ประถมศึกษา", val: "ประถมศึกษา" },
        { name: "มัธยมศึกษา", val: "มัธยมศึกษา" },
        { name: "ปริญญาตรี", val: "ปริญญาตรี" },
        { name: "ปริญญาโท", val: "ปริญญาโท" },
        { name: "ปริญญาเอก", val: "ปริญญาเอก" },
      ],
      display: [],
      alertMessage: "",
      show: false,
    };
  },
  computed: {
    isValid() {
      return (
        this.form.fullName?.trim() &&
        this.form.tel?.trim() &&
        this.form.address?.trim() &&
        this.form.gender?.trim() &&
        this.form.level?.trim()
      );
    },
  },
  methods: {
    submitForm() {
      if (this.isValid) {
        this.alertMessage = "";
        this.show = true;
        this.display = this.form;
      } else {
        this.alertMessage = "Invalid form.";
        this.show = false;
      }
    },
    resetForm() {
      this.display = [];
      this.form = {
        fullName: "",
        tel: "",
        address: "",
        gender: "",
        level: "",
      };
      this.show = false;
    },
  },
};
</script>
