<template>
<div>
<auth id="auth"></auth>
</div>
</template>

<script>
import Auth from '@/components/Auth'
export default {
  name: 'Hello',
  components: {
    'auth': Auth
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
