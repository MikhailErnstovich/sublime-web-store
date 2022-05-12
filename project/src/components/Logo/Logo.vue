<template>
  <div class="logo">
    <router-link :to='"/"'>Sublime.</router-link>
  </div>
</template>

<script>
export default {
    name: 'Logo'
};
</script>

<style>
.logo a {
	font-size: 30px;
	font-weight: 700;
	color: #1b1b1b;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
</style>