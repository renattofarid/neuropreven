/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Milestones
5. Init Testimonials Slider


******************************/

$(document).ready(function () {
  "use strict";

  /* 

	1. Vars and Inits

	*/

  var header = $(".header");
  var ctrl = new ScrollMagic.Controller();

  setHeader();

  $(window).on("resize", function () {
    setHeader();

    setTimeout(function () {
      $(window).trigger("resize.px.parallax");
    }, 375);
  });

  $(document).on("scroll", function () {
    setHeader();
  });

  initMenu();
  initMilestones();

  /* 

	2. Set Header

	*/

  function setHeader() {
    if ($(window).scrollTop() > 91) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  }

  /* 

	3. Init Menu

	*/

  function initMenu() {
    var hamb = $(".hamburger");
    var menu = $(".menu");
    var menuOverlay = $(".menu_overlay");
    var menuClose = $(".menu_close_container");

    hamb.on("click", function () {
      menu.toggleClass("active");
      menuOverlay.toggleClass("active");
    });

    menuOverlay.on("click", function () {
      menuOverlay.toggleClass("active");
      menu.toggleClass("active");
    });

    menuClose.on("click", function () {
      menuOverlay.toggleClass("active");
      menu.toggleClass("active");
    });
  }

  /* 

	4. Init Milestones

	*/

  function initMilestones() {
    if ($(".milestone_counter").length) {
      var milestoneItems = $(".milestone_counter");

      milestoneItems.each(function (i) {
        var ele = $(this);
        var endValue = ele.data("end-value");
        var eleValue = ele.text();

        /* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number */
        var signBefore = "";
        var signAfter = "";

        if (ele.attr("data-sign-before")) {
          signBefore = ele.attr("data-sign-before");
        }

        if (ele.attr("data-sign-after")) {
          signAfter = ele.attr("data-sign-after");
        }

        var milestoneScene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: "onEnter",
          reverse: false,
        })
          .on("start", function () {
            var counter = { value: eleValue };
            var counterTween = TweenMax.to(counter, 4, {
              value: endValue,
              roundProps: "value",
              ease: Circ.easeOut,
              onUpdate: function () {
                document.getElementsByClassName("milestone_counter")[
                  i
                ].innerHTML = signBefore + counter.value + signAfter;
              },
            });
          })
          .addTo(ctrl);
      });
    }
  }

  getStaff().then((team)=>{
		console.log(team)
    let teams = document.querySelector('#teams');
    let template = ``;
    for (const member of team) {
      template += 
      `<div class="col-lg-6 team_col">
        <div class="team_item text-center d-flex flex-column aling-items-center">
          <div class="team_image"><img src="${member.image}" alt=""></div>
          <div class="team_content text-center">
            <div class="team_name"><a href="#">${member.name}</a></div>
            <div class="team_title">${member.profile}<br>
              <p>
                <a class="btn btn-outline-info btn-sm" data-toggle="collapse" href="#no${member.id}" role="button" aria-expanded="false" aria-controls="no${member.id}">
                  <i class="fas fa-angle-down"></i>
                </a>
              </p>
              <div class="collapse" id="no${member.id}">
                <div class="card card-body mt-1">
                ${member.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      teams.innerHTML = template;
    }
	}).catch((err)=>{console.log(err)})

  
});
