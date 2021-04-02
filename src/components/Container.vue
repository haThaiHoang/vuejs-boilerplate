<template>

</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped>
div {
  max-width: 1140px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;

  ${Media.lessThan(Media.SIZE.XL)} {
    max-width: 960px;
  }

  ${Media.lessThan(Media.SIZE.LG)} {
    max-width: 720px;
  }

  ${Media.lessThan(Media.SIZE.MD)} {
    max-width: 540px;
  }

  ${Media.lessThan(Media.SIZE.SM)} {
    max-width: initial;
  }
}
</style>
