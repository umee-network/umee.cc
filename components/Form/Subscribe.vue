<template>
  <div class="max-w-[22.75rem] mx-auto">
    <div class="gradient-border">
      <form
        accept-charset="UTF-8"
        v-on:submit.prevent="onSubmit()"
        method="POST"
        class="flex justify-between gap-x-6"
      >
        <input
          class="text-midGreyOnNaby bg-transparent text-lg grow-0 w-full"
          type="email"
          v-model="email"
          placeholder="Email address"
        />

        <button
          v-if="!loading"
          type="submit"
          class="uppercase text-white text-xs shrink-0 py-1 px-2"
        >
          Submit
        </button>
        <FormLoader v-if="loading" class="w-[7ch] px-2 text-center" />
      </form>
    </div>
    <div v-show="message" class="mt-1.5">
      {{ message }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  props: {
    msg: String,
  },
  data() {
    return {
      loading: false,
      name: '',
      email: '',
      message: '',
      isSuccess: false,
    }
  },
  methods: {
    onSubmit() {
      this.loading = true
      let data = {
        email: this.email,
      }
      axios
        .post('/.netlify/functions/subscribe', data, {
          headers: {
            Accept: 'application/json',
          },
        })
        .then(
          (response) => {
            this.isSuccess = response.data.success ? true : false
            if (response.data.subscription_status === 'pending') {
              this.message =
                'Please check your email to confirm your subscription'
            } else {
              this.message = "You have been added to Umee's mailing list"
            }
            this.loading = false
          },
          (response) => {
            this.message = 'There was a problem adding you to the mailing list.'
            this.loading = false
          }
        )
    },
  },
}
</script>
