<template>
  <div class="col-lg-4 icon_box_col">
    <div class="icon_box">
      <div class="icon_box_image">
        <img :src="imgLink" />
      </div>
      <div class="icon_box_title">{{ item.title }}</div>
      <div class="icon_box_text">
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconBox",
  props: ["item", "template"],
  computed: {
    imgLink() {
      return this.template + this.item.link;
    },
  },
};
</script>

<style>
.icon_box {
  width: 100%;
  text-align: center;
}
.icon_box_image {
  width: 75px;
  height: 75px;
  margin-left: auto;
  margin-right: auto;
}
.icon_box_image img {
  max-width: 100%;
}
.icon_box_title {
  font-size: 18px;
  font-weight: 500;
  color: #1b1b1b;
  margin-top: 33px;
}
.icon_box_text {
  margin-top: 20px;
}
</style>