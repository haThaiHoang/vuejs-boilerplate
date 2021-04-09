<template>
  <Container>
    <Form>
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

console.log(234234, Field)
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
    submit() {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
