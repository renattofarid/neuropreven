class HeaderElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const homeActive = this.getAttribute("home");
    const nosotrosActive = this.getAttribute("nosotros");
    const serviciosActive = this.getAttribute("servicios");
    const blogActive = this.getAttribute("blog");
    const contactoActive = this.getAttribute("contacto");
    this.innerHTML = `<header class="header trans_400">
                <div class="header_content d-flex flex-row align-items-center jusity-content-start trans_400">

                <!-- Logo -->
                <div class="logo">
                    <a href="index.html">
                        <img src="img/logo.png" width="240">
                        
                    </a>
                </div>
            
                <!-- Main Navigation -->
                <nav class="main_nav">
                    <ul class="d-flex flex-row align-items-center justify-content-start">
                        <li class="${homeActive}"><a href="index.html">Inicio</a></li>
                        <li class="${nosotrosActive}"><a href="about.html">Nosotros</a></li>
                        <li class="${serviciosActive}"><a href="services.html">Servicios</a></li>
                        <li class="${blogActive}"><a href="blog.html">Blog</a></li>
                        <li class="${contactoActive}"><a href="contact.html">Contacto</a></li>
                    </ul>
                </nav>
                <div class="header_extra d-flex flex-row align-items-center justify-content-end ml-auto">
                    
                    <!-- Work Hourse -->
                    <div class="work_hours">Lun a Sáb: 8:00am - 8:00pm</div>
            
                    <!-- Header Phone -->
                    <div class="header_phone">+51 924 688 174</div>
            
                    <!-- Appointment Button -->
                    <div class="header_phone">
                        <a href="https://api.whatsapp.com/send?phone=51924688174&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Neuropreven"ç
                            class="text-white">
                            Separa una Cita
                        </a></div>
                    <!-- Header Social -->
                    <div class="social header_social">
                        <ul class="d-flex flex-row align-items-center justify-content-start">
                            <li><a href="https://www.instagram.com/neuropreven/"target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.facebook.com/Neuropreven-103701488876722"target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/neuropreven-peru/"target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </div>
            
                    <!-- Hamburger -->
                    <div class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></div>
                </div>
            </div>
        </header>`;
  }
}

class MenuElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<div class="menu_overlay trans_400"></div>
        <div class="menu trans_400">
            <div class="menu_close_container"><div class="menu_close"><div></div><div></div></div></div>
            <nav class="menu_nav">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="about.html">Nosotros</a></li>
                    <li><a href="services.html">Servicios</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contacto</a></li>
                </ul>
            </nav>
            <div class="menu_extra">
                <div class="menu_link">Lun a Sáb: 8:00am - 9:00pm</div>
                <div class="menu_link">+51 924 688 174</div>
                <div class="menu_link"><a href="https://api.whatsapp.com/send?phone=51924688174&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Neuropreven">Sacar una Cita</a></div>
            </div>
            <div class="social menu_social">
                <ul class="d-flex flex-row align-items-center justify-content-start">
                    <li><a href="https://www.facebook.com/Neuropreven-103701488876722"target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.facebook.com/Neuropreven-103701488876722"target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.facebook.com/Neuropreven-103701488876722"target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>`;
  }
}

class StartSection extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const dataSource = this.getAttribute("data-src");
    const homeTitle = this.getAttribute("home-title");
    const homeText = this.getAttribute("home-text");
    this.innerHTML = `<div class="home d-flex flex-column align-items-start justify-content-end">
            <div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="${dataSource}" data-speed="0.8"></div>
            <div class="home_overlay"><img src="images/home_overlay.png" alt=""></div>
            <div class="home_container">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="home_content">
                                <div class="home_title">${homeTitle}</div>
                                <div class="home_text">
                                ${homeText}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  }
}

class FooterElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="btn">
            <a href="https://api.whatsapp.com/send?phone=51924688174&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Neuropreven" class="btn-wsp" target="_blank">
            <i class="fa fa-whatsapp icono"></i></a>
        </div>
        <!-- Newsletter -->

        <div class="newsletter">
            <div class="parallax_background parallax-window"  data-image-src="images/newsletter.jpg" data-parallax="scroll" data-image-src="" data-speed="0.8"></div>
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="newsletter_title">Suscríbete</div>
                    </div>
                </div>
                <div class="row newsletter_row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="newsletter_form_container">
                            <form id="newsleter_form" class="newsletter_form">
                                <input id="emailSubscription" type="email" class="newsletter_input" placeholder="E-mail" required="required">
                                <button type="submit" class="newsletter_button">suscríbete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->

        <footer class="footer">
            <div class="footer_content">
                <div class="container">
                    <div class="row">

                        <!-- Footer About -->
                        <div class="col-lg-3 footer_col">
                            <div class="footer_about">
                                <div class="footer_logo">
                                    <img src="img/footer.png" width="220">
                                    </a>
                                </div>
                                <div class="footer_about_text">
                                    <p>Nuestro objetivo es realizar prevención, diagnóstico, tratamiento y recuperación de enfermedades neurológicas.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Footer Contact Info -->
                        <div class="col-lg-3 footer_col">
                            <div class="footer_contact">
                                <div class="footer_title">Contacto</div>
                                <ul class="contact_list">
                                    <li>01 765 0413  <br> 924 688 174</li>
                                    <li>informes@neuropreven.com</li>
                                    
                                </ul>
                            </div>
                        </div>

                        <!-- Footer Locations -->
                        <div class="col-lg-5 footer_col">
                            <div class="footer_location">
                                <div class="footer_title">Nuestros Locales</div>
                                <ul class="locations_list">
                                    <li>
                                        <div class="location_text">Edificio Smart Boutique</div>
                                        <div class="location_text">Avenida De La Roca De Vergallo 493 Oficina 509.</div>
                                        <div class="location_text">Magdalena del Mar</div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <!-- Footer Opening Hours -->
                        <!-- <div class="col-lg-3 footer_col">
                            <div class="opening_hours">
                                <div class="footer_title">Consulta Previa Cita</div>
                            </div>
                        </div> -->

                    </div>
                </div>
            </div>
            <div class="footer_bar">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="footer_bar_content  d-flex flex-md-row flex-column align-items-md-center justify-content-start">
                                <div class="copyright">
                                <div class="row">
                                    <div class="col-10">
                                    Copyright &copy 2022 Todos los derechos reservados | Esta web fue desarrollada por <a href="https://teagile.com/" target="_blank">teagile</a>
                                    </div>
                                </div>
                                
                                </div>
                                <nav class="footer_nav ml-md-auto">
                                    <ul class="d-flex flex-row align-items-center justify-content-start">
                                        <li><a href="index.html">Inicio</a></li>
                                        <li><a href="about.html">Nosotros</a></li>
                                        <li><a href="services.html">Servicios</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="contact.html">Contacto</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>			
            </div>
        </footer>
        `;

    document
      .querySelector("#newsleter_form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.querySelector("#emailSubscription").value;
        postSubscription({ email }).then((rpta) => {
          Swal.fire("Recibido!", "Nos contactaremos contigo pronto", "success");
          document.querySelector("#emailSubscription").value = "";
        });
      });
  }
}

class AppointmentForm extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        speciality: document.querySelector("#speciality").value,
        doctor: document.querySelector("#doctor").value,
      };

      postAppointment(data)
        .then((data) => {
          document.querySelector("#btnSubmitForm").disabled = true;
          Swal.fire({
            title: "Cita registrada!",
            text: "Nos pondremos en contacto contigo en breve",
            icon: "success",
          });

          document.querySelector("#name").value = "";
          document.querySelector("#email").value = "";
          document.querySelector("#phone").value = "";
          document.querySelector("#speciality").value = "";
          document.querySelector("#doctor").value = "";
        })
        .finally(() => {
          document.querySelector("#btnSubmitForm").disabled = false;
        });
    });
  }

  connectedCallback() {
    this.innerHTML = `
  
      <form class="intro_form" id="appointmentForm">
          <div class="d-flex flex-row align-items-start justify-content-between flex-wrap">
              <input id="name" type="text" class="intro_input" placeholder="Nombre" required="required">
              <input id="email" type="email" class="intro_input" placeholder="E-mail" required="required">
              <input id="phone" type="tel" class="intro_input" placeholder="Movil" required="required">
              <select id="speciality" class="intro_select intro_input" required id="specialtiesSelect">
                  
              </select>
              <select id="doctor" class="intro_select intro_input" required="required" id="staffSelect">
                      
                  </select>
              <!--<input type="text" id="datepicker" class="intro_input datepicker" placeholder="Día" required="required">-->
          </div>
          <button id="btnSubmitForm" type="submit" class="button button_1 intro_button trans_200">Separa tu Cita</button>
      </form> 
  
      `;

    const loadForm = async () => {
      const sp = await getStrings("specialties");
      let template = `<option disabled selected value>Especialidad</option>`;
      sp.forEach((element) => {
        template += `
              <option value="${element.content}">${element.content}</option>
              `;
      });
      document.querySelector("#speciality").innerHTML = template;

      const staff = await getStaff();
      let template2 = `<option disabled selected value>Doctor</option>`;
      staff.forEach((element) => {
        template2 += `
              <option value="${element.name}">${element.name}</option>
              `;
      });
      document.querySelector("#doctor").innerHTML = template2;
    };

    loadForm();
  }
}

window.customElements.define("header-element", HeaderElement);
window.customElements.define("menu-element", MenuElement);
window.customElements.define("start-section", StartSection);
window.customElements.define("footer-element", FooterElement);
window.customElements.define("appointment-form", AppointmentForm);
