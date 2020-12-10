<template>
  <div class="menu">
    <menu-header></menu-header>
  </div>
    
</template>
<script>
import MenuHeader from './pages/Header'
export default {
  components: { 
      MenuHeader
    },
    
}
</script>
<style scoped>
.menu {
  overflow: visible;
}
</style>