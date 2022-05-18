<template>
  <router-view />
</template>

<script>
import Home from "./views/Home/Home.vue";

export default {
  data() {
    return {
      api: null,
    };
  },
  components: { Home },
};

/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Home Slider
4. Init Search
5. Init Menu
6. Init Isotope


******************************/

$(document).ready(() => setTimeout(
	function () {
	"use strict";

	initIsotope();

	function initIsotope() {
		var sortingButtons = $('.product_sorting_btn');
		var sortNums = $('.num_sorting_btn');

		if ($('.product_grid').length) {
			var grid = $('.product_grid').isotope({
				itemSelector: '.product',
				layoutMode: 'fitRows',
				fitRows:
				{
					gutter: 30
				},
				getSortData:
				{
					price: function (itemElement) {
						var priceEle = $(itemElement).find('.product_price').text().replace('$', '');
						return parseFloat(priceEle);
					},
					name: '.product_name',
					stars: function (itemElement) {
						var starsEle = $(itemElement).find('.rating');
						var stars = starsEle.attr("data-rating");
						return stars;
					}
				},
				animationOptions:
				{
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		}
	}

}, 10000));
</script>


<style lang="scss">

</style>
