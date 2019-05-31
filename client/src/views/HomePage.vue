<template>
  <div class="home">
    <img src="../assets/logo.png">
    <div class="service-text">
      <h1>{{ msg }}</h1>
      <h2>Services all of Dallas area</h2>
      <p>Schedule Service Today: (214) 909-3191</p>
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";

export default {
  name: "HomePage",
  components: {
    Form,
  },
  data() {
    return {
      msg: 'Advance A/C',
    };
  },
};
</script>

<style lang="scss" scoped>
.service-text{
  display: flex;
  flex-direction: column;
  padding: 0 14px;
  background-color:hsl(214, 70%, 60%);
  color:#fff;
  text-shadow: 0 1px 3px rgba(36,180,126,.4);
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  border-radius: 4px;
}
</style>
