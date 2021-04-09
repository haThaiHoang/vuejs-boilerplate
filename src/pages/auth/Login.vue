<template>
  <Container>
    <Form @submit="submit" :validation-schema="schema">
      <Field name="email" />
      <ErrorMessage name="email" />
      <Field name="password" type="password" />
      <ErrorMessage name="password" />
      <button>Submit</button>
    </Form>
  </Container>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

import Container from '@/components/Container.vue'

export default {
  name: 'Login',
  components: {
    Container,
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8)
    })

    return {
      schema
    }
  },
  methods: {
    submit(values) {
      console.log(345, values)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
