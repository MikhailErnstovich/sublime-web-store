<template>
  <div class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></div>
</template>

<script>
export default {
    name: 'Hamburger'
}
</script>

<style>
.hamburger {
	display: none;
	margin-left: 30px;
	cursor: pointer;
	margin-right: 4px;
	-webkit-transform: translateY(2px);
	-moz-transform: translateY(2px);
	-ms-transform: translateY(2px);
	-o-transform: translateY(2px);
	transform: translateY(2px);
}
.hamburger i {
	font-size: 18px;
	color: #1b1b1b;
}
</style>