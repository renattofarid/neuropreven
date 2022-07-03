/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Date Picker
6. Init Select
7. Init Milestones


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	// initHomeSlider();
	initDatePicker();
	initSelect();
	initMilestones();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		var hamb = $('.hamburger');
		var menu = $('.menu');
		var menuOverlay = $('.menu_overlay');
		var menuClose = $('.menu_close_container');

		hamb.on('click', function()
		{
			menu.toggleClass('active');
			menuOverlay.toggleClass('active');
		});

		menuOverlay.on('click', function()
		{
			menuOverlay.toggleClass('active');
			menu.toggleClass('active');
		});

		menuClose.on('click', function()
		{
			menuOverlay.toggleClass('active');
			menu.toggleClass('active');
		});
	}

	/* 

	4. Init Home Slider

	*/

	

	/* 

	5. Init Date Picker

	*/

	function initDatePicker()
	{
		var dp = $('#datepicker');
		dp.datepicker();
	}

	/* 

	6. Init Select

	*/

	function initSelect()
	{
		if($('.intro_select').length)
		{
			var select = $('.intro_select');
			select.each(function()
			{
				var selected = $(this);
				selected.change(function()
				{
					selected.addClass('selected');
				});
			});
		}
	}

	/* 

	7. Init Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

	/* 

	8. Init Testimonials Slider

	*/
	/**
		getStrings ->  about,contact,slider,welcome
		getImages -> slider, client
	 */
	getStrings('slider',true).then((result2) => {
		let sliderDescription = result2.sliderDescription.content;
		let sliderSubtitle = result2.sliderSubtitle.content;
		let sliderTitle = result2.sliderTitle.content;
		return {sliderDescription, sliderSubtitle, sliderTitle};
	}).then(({sliderDescription, sliderSubtitle, sliderTitle})=>{
		getImages('slider').then( (result1) => {
			let homeSliderOwl = document.querySelector('#homeSliderOwl');
			let template = ``;
			for (const res1 of result1) {
				template += 
				`<div class="owl-item">
				<div class="background_image" style="background-image:url(${res1.image})"></div>
				<div class="home_container">
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="home_content">
									<div class="home_subtitle">${sliderTitle}</div>
									<div class="home_title">${sliderSubtitle}</div>
									<div class="home_text">
										<p>${sliderDescription}</p>
									</div>
									<div class="home_buttons d-flex flex-row align-items-center justify-content-start">
										<div class="button button_1 trans_200"><a href="#">+info</a></div>
										<div class="button button_2 trans_200 separa-cita"><a href="https://api.whatsapp.com/send?phone=51924688174&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Neuropreven">Separa tu Cita</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`;
			};
			homeSliderOwl.innerHTML = template;
			function initHomeSlider()
			{
				if($('.home_slider').length)
				{
					var homeSlider = $('.home_slider');
					homeSlider.owlCarousel(
					{
						items:1,
						autoplay:true,
						loop:true,
						nav:false,
						smartSpeed:1200,
						mouseDrag:false,
						dotsContainer:'home_slider_custom_dots'
					});

					/* Custom dots events */
					if($('.home_slider_custom_dot').length)
					{
						$('.home_slider_custom_dot').on('click', function()
						{
							$('.home_slider_custom_dot').removeClass('active');
							$(this).addClass('active');
							homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
						});
					}

					/* Change active class for dots when slide changes by nav or touch */
					homeSlider.on('changed.owl.carousel', function(event)
					{
						$('.home_slider_custom_dot').removeClass('active');
						$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
					});
				}
			};
			initHomeSlider();
		})
	});
	

	getTestimonials().then((result) => {
		let testSlider = document.querySelector('#testSlider');
		let template = ``;
		for (const test of result) {
			template += 
			`<div class="owl-item">
				<div class="test_item text-center">
					<div class="test_text">
						<p>“${test.content}”.</p>
					</div>
					<div class="test_info d-flex flex-row align-items-center justify-content-center">
						<div class="test_text">${test.author}, <span>${test.type}</span></div>
					</div>
				</div>
			</div>`;
		}
		testSlider.innerHTML = template;
		function initTestSlider() {
		if ($(".test_slider").length) {
		  var testSlider = $(".test_slider");
		  testSlider.owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			dots: true,
			smartSpeed: 1200,
		  });
		}
	  }
	  initTestSlider();
	}).catch((err) => {
		console.log(err);
	});
	getHomeServices().then((result)=>{
		let servicesrow = document.querySelector('#servicesrow');
		let template = ``;
		for (const home of result) {
			template += 
			`<div class="col-xl-4 col-md-6 service_col">
				<div class="service text-center">
					<div  class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
						<div class="icon"><img src="${home.image}"></div>
					</div>
					<div class="service_title">${home.title} </div>
					<div class="service_text">
						<p>${home.content}</p>
					</div>
				</div>
			</div>`;
		};
		servicesrow.innerHTML = template;
		
	}).catch((err)=>{console.log(err)});
	

});