class HeaderElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = 
        `<div class="header_content d-flex flex-row align-items-center jusity-content-start trans_400">

            <!-- Logo -->
            <div class="logo">
                <a href="index.html">
                    <img src="img/logo.png" width="240">
                    
                </a>
            </div>
        
            <!-- Main Navigation -->
            <nav class="main_nav">
                <ul class="d-flex flex-row align-items-center justify-content-start">
                    <li><a href="index.html">Inicio</a></li>
                    <li class="active"><a href="about.html">Nosotros</a></li>
                    <li><a href="services.html">Servicios</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contacto</a></li>
                </ul>
            </nav>
            <div class="header_extra d-flex flex-row align-items-center justify-content-end ml-auto">
                
                <!-- Work Hourse -->
                <div class="work_hours">Lun a Sáb: 8:00am - 9:00pm</div>
        
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
        </div>`
    }
}

class MenuElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML =
        `<div class="menu_overlay trans_400"></div>
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
        </div>`
    }
}

class StartSection extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback(){
        this.innerHTML = 
        `<div class="home d-flex flex-column align-items-start justify-content-end">
            <div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/about.jpg" data-speed="0.8"></div>
            <div class="home_overlay"><img src="images/home_overlay.png" alt=""></div>
            <div class="home_container">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="home_content">
                                <div class="home_title">Nosotros</div>
                                <div class="home_text">
                                Somos un centro de atención integral y especializado en enfermedades neurológicas.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

window.customElements.define('header-element',HeaderElement);
window.customElements.define('menu-element',MenuElement);