<template>
  <div>
    <template v-if="show">
      <label>姓名</label>
      <input placeholder="输入姓名">
    </template>
    <template v-else>
      <label>邮箱</label>
      <input placeholder="输入邮箱">
    </template>

    <button @click="$router.push('/home')">切换</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show:true,
    }
  },
}
</script>

