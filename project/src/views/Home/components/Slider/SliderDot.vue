<template>
    <li class="home_slider_custom_dot" :class="{ active: active }">{{ dotNum }}</li>
</template>

<script>
export default {
    name: 'SliderDot',
    props: ['num', 'active'],
    computed: {
        dotNum() {
            return '0' + this.num + '.'
        }
    }
}
</script>

<style>
.home_slider_custom_dot {
	display: inline-block;
	position: relative;
	color: #FFFFFF;
	cursor: pointer;
	font-size: 14px;
	font-weight: 600;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.home_slider_custom_dot:hover {
	color: #e95a5a;
}
.home_slider_custom_dot.active {
	color: #e95a5a;
}
</style>