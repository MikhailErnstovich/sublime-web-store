<template>
   <div class="owl-item home_slider_item">
      <div class="home_slider_background"
        style="background-image: url('https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/home_slider_1.jpg');">
      </div>
      <div class="home_slider_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div
                class="home_slider_content"
                data-animation-in="fadeIn"
                data-animation-out="animate-out fadeOut"
              >
                <div class="home_slider_title">{{ item.title }}</div>
                <div class="home_slider_subtitle">{{ item.subtitle }}</div>
                <div class="button button_light home_button">
                  <a href="#">{{ item.linkText }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'SliderItem',
    props: ['item','template']
}
</script>

<style>
.home_slider_background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.home_slider_content_container {
	position: absolute;
	left: 0;
	top: 32.3%;
	width: 100%;
}
.home_slider_content {
	max-width: 580px;
}
.home_slider_title {
	font-size: 60px;
	font-weight: 600;
	color: #FFFFFF;
	line-height: 1.2;
}
.home_slider_subtitle {
	font-size: 14px;
	font-weight: 400;
	color: #FFFFFF;
	line-height: 2.14;
	margin-top: 22px;
}
.home_button {
	margin-top: 40px;
}
@media only screen and (max-width: 991px) {
	.home_slider_title	{
		font-size: 48px;
	}
}
@media only screen and (max-width: 767px){
	.home_slider_content {
		max-width: 100%;
	}
}
@media only screen and (max-width: 575px) {
	.home_slider_title {
		font-size: 24px;
	}
	.home_slider_subtitle {
		font-size: 13px;
		margin-top: 15px;
	}
	.button {
		width: 148px;
		height: 41px;
	}
	.button a {
		font-size: 13px;
		line-height: 37px;
	}
	.home_button {
		margin-top: 32px;
	}
}
</style>