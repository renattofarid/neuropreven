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

	getPosts() .then((result) => {
		let blogpost = document.querySelector('#blogpost');
		let template = ``;
		const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
		for (let i = 0; i < result.length; i++) {
			let date = new Date(result[i].date)
			let dia = date.getDay()
			let mes = date.getMonth()
			let ano = date.getFullYear()
			template += 
			`<div class="blog_post">
				<div class="blog_post_image"><img src="${result[i].image}" alt=""></div>
				<div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
					<div class="date_day">${dia}</div>
					<div class="date_month">${meses[mes]}</div>
					<div class="date_year">${ano}</div>
				</div>
				<div class="blog_post_title"><a href="#">${result[i].title}</a></div>
				<div class="blog_post_info">
					<ul class="d-flex flex-row align-items-center justify-content-center">
					</ul>
				</div>
				<div class="blog_post_text text-center">
					<p>${result[i].intro}</p>
				</div>
				<div class="collapse" id="post${i}">
					<div class="blog_post_text text-center">
						<p>
						${result[i].content}
						</p>
					</div>
				</div>
				<div class="blog_post_button text-center">
					<div class="button button_1 ml-auto mr-auto">
						<a data-toggle="collapse" href="#post${i}" role="button" aria-expanded="false" aria-controls="post${i}" id="btnPost${i}" onclick="changeText('btnPost${i}')">
							leer mas
						</a>
					</div>
				</div>
			</div>
			`;
		};
		blogpost.innerHTML = template;
	});
});