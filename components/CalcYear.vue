<template>
  <span>{{ calcYear() }}</span>
</template>

<script>
export default {
  methods: {
    calcYear() {
      const dateNow = new Date()
      const dateEst = new Date(1978, 4, 7)
      let diff = (dateNow - dateEst) / 1000
      diff /= 60 * 60 * 24
      return Math.abs(Math.round(diff / 365.25))
    }
  }
}
</script>
