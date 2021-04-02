<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
div {
  max-width: 1140px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;

  @include lessThan('XL') {
    max-width: 960px;
  }

  @include lessThan('LG') {
    max-width: 720px;
  }

  @include lessThan('MD') {
    max-width: 540px;
  }

  @include lessThan('SM') {
    max-width: initial;
  }
}
</style>
