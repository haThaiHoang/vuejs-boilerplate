<template>
  <div class="clickable" @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Clickable',
  methods: {
    onClick() {
    }
  }
}
</script>

<style lang="scss" scoped>
.clickable {
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
