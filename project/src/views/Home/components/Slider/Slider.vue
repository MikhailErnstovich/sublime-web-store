<template>
  <div class="home">
    <div class="home_slider_container">
      <div class="owl-carousel owl-theme home_slider">
        <SliderItem
          v-for="item in items"
          :key="item"
          :template="URLtemplate"
          :item="item"
        />
      </div>
      <SliderDots :items="items" />
    </div>
  </div>
</template>

<script>
import SliderDots from "./SliderDots.vue";
import SliderItem from "./SliderItem.vue";

export default {
  name: "Slider",
  components: { SliderDots, SliderItem },
  data: function () {
    return {
      URLtemplate:
        "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/",
      items: [
        {
          title: " A new Online Shop experience.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
          linkText: "Shop Now",
          imgLink: "/home_slider_1.jpg",
          num: "1",
          isActive: true,
        },
        {
          title: " A new Online Shop experience.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
          linkText: "Shop Now",
          imgLink: "/home_slider_2.jpg",
          num: "2",
          isActive: false,
        },
        {
          title: " A new Online Shop experience.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
          linkText: "Shop Now",
          imgLink: "/home_slider_3.jpg",
          num: "3",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style>

.home {
	width: 100%;
	height: 950px;
	background: #FFFFFF;
	z-index: 2;
}
.home_slider_container {
	width: 100%;
	height: 100%;
	/* padding-top: 130px; */
	/* padding-left: 60px;
	padding-right: 60px; */
	padding-bottom: 30px;
}

.owl-theme .owl-dots {
	display: none;
}
.fadeIn {
	animation-delay: 1000ms;
}
@media only screen and (max-width: 991px) {
	.home_slider_container	{
		padding-left: 30px;
		padding-right: 30px;
	}
}
@media only screen and (max-width: 767px){
	.home_slider_container {
		padding-left: 0px;
		padding-right: 0px;
	}
}

@media only screen and (max-width: 575px) {
	.home {
		height: 100vh;
	}
	.home_slider_container {
		padding-left: 0px;
		padding-right: 0px;
		padding-top: 0;
		padding-bottom: 0;
	}
}
</style>