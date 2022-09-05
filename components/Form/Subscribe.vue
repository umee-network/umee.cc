<template>
  <form accept-charset="UTF-8" v-on:submit.prevent="onSubmit()" method="POST">
    <input
      class="text-navy"
      type="email"
      v-model="email"
      placeholder="Email address"
    />
    <button type="submit">Submit</button>

    <div v-show="message" class="">
      {{ message }}
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({ message: false }),
  name: 'Contact',
  props: {
    msg: String,
  },
  data() {
    return {
      loading: true,
      name: '',
      email: '',
      message: '',
      isSuccess: false,
    }
  },
  methods: {
    onSubmit() {
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
                'Please check your email to cofirm your subscription'
            } else {
              this.message = "You have been added to Umee's mailing list"
            }
          },
          (response) => {
            this.message = 'There was a problem adding you to the mailing list.'
          }
        )
    },
  },
}
</script>
