<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Clickable'
}
</script>

<style lang="less" scoped>
  div {
    cursor: pointer;
    user-select: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.7;
    }
  }
</style>
