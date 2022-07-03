/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu


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

	getServices().then((servicios)=>{
		let rowServices = document.querySelector('#rowServices');
		let template = ``;
		for (const service of servicios) {
			template += 
			`<div class="col-xl-4 col-md-6 service_col">
				<div class="service text-center">
					<div class="service">
						<div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
							<div class="icon"><img src="${service.image}"></div>
						</div>
						<div class="service_title">${service.title}</div>
						<div class="service_text">
							<p>${service.content}</p>
						</div>
					</div>
				</div>
			</div>`
		}
		rowServices.innerHTML = template;
	}).catch((err)=>{console.log(err)});
	

});