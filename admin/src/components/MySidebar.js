export class MySidebar extends HTMLElement {
  // (1)

  connectedCallback() {
    this.innerHTML = `
      
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">NeuroPrevent</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Home</span>
          </a>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item" href="/admin/strings.html?type=slider">Textos de Sliders</a>
            <a class="collapse-item" href="/admin/images.html?type=slider">Imágenes de Sliders</a>
            <a class="collapse-item" href="/admin/strings.html?type=welcome">Welcome</a>
            <a class="collapse-item" href="/admin/testimonios.html">Testimonios</a>
            <a class="collapse-item" href="/admin/home-servicios.html">Servicios</a>
          </div>
        </li> 
      
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Nosotros</span>
          </a>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="/admin/strings.html?type=about">Textos</a>
              <a class="collapse-item" href="/admin/images.html?type=client">Clientes</a>
              <a class="collapse-item" href="/admin/staff.html">Staff</a>
            </div>
          </div>
        </li> 

      <!-- Nav Item - Charts -->
      <li class="nav-item">
      <a class="nav-link" href="/admin/servicios.html">
      <i class="fas fa-fw fa-cog"></i>
      <span>Servicios</span></a
      >
      </li>
     
      <li class="nav-item">
        <a class="nav-link" href="/admin/posts.html">
          <i class="fas fa-fw fa-cog"></i>
          <span>Posts</span></a
        >
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="/admin/strings.html?type=contact">
          <i class="fas fa-fw fa-cog"></i>
          <span>Contacto</span></a
        >
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
    <!-- End of Sidebar -->

      `;
  }
}

// (2)
