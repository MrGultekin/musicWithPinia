<template>
  <!-- Auth Modal -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    id="modal"
    :class="store.hiddenClass"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div
              class="modal-close cursor-pointer z-50"
              @click="store.toggleAuthModal"
            >
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                @click.prevent="tab = 'login'"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'login',
                  'hover:text-blue-600': tab === 'register',
                }"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                @click.prevent="tab = 'register'"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'register',
                  'hover:text-blue-600': tab === 'login',
                }"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <LoginForm v-if="tab === 'login'" />
          <RegisterForm v-else />
          <!-- Registration Form just above -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModelStore } from "@/stores/modalStore";
import { ref } from "vue";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";

const store = useModelStore();
const tab = ref("login");

// const tab = ref("login");
// const schema = ref({
//   name: "required|min:3|max:100|alpha_spaces",
//   email: "required|min:3|max:100|email",
//   age: "required|max_value:100|min_value:18",
//   password: "required|min:9|max:100|excluded:password",
//   confirm_password: "passwords_mismatch:@password",
//   country: "required|country_excluded:Antarctica,Mantarctica",
//   tos: "tos",
// });
// const userData = ref({
//   country: "USA",
// });

// const reg_in_submission = ref(false);
// const reg_show_alert = ref(false);
// const reg_alert_variant = ref("bg-blue-500");
// const reg_alert_msg = ref("Please wait! Your registration is in progress.");
//
// function register(values) {
//   reg_show_alert.value = true;
//   reg_in_submission.value = true;
//   reg_alert_variant.value = "bg-blue-500";
//   reg_alert_msg.value = "Please wait! Your registration is in progress.";
//
//   reg_alert_variant.value = "bg-green-500";
//   reg_alert_msg.value = "Registration successful!";
//   console.log(values);
// }

// 4 Login
// const loginSchema = ref({
//   email: "required|min:3|max:100|email",
//   password: "required|min:9|max:100|excluded:password",
// });

// function login(values) {
//   console.log(values);
// }
</script>

<style scoped></style>
