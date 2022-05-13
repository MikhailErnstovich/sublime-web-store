<template>
  <div class="home_slider_dots_container">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="home_slider_dots">
            <ul id="home_slider_custom_dots" class="home_slider_custom_dots">
              <SliderDot v-for='dot in dots'
                :key='dot'
                :num='dot.num'
                :active='dot.isActive'
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderDot from "./SliderDot.vue";

export default {
  name: "SliderDots",
  props: ["items"],
  components: { SliderDot },
  data: function () {
    return {
      dots: this.items,
    };
  },
};
</script>

<style>

.home_slider_dots_container {
	display: inline-block;
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 10;
	width: 100%;
	padding-left: 60px;
	padding-right: 60px;
}
.home_slider_dots {
	position: absolute;
	left: 15px;
	bottom: 56px;
}
@media only screen and (max-width: 991px) {
	.home_slider_dots_container	{
		padding-left: 30px;
		padding-right: 30px;
	}
}
@media only screen and (max-width: 767px){
	.home_slider_dots_container {
		display: none;
	}
}
</style>