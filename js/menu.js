$(document).ready(function () {
  // Menu item
  document.getElementById("menu_item").innerHTML += `
    <!-- Navigation Menu -->
    <div class="container  nav-container">
        <div class="row">
            <div class="col-md-12">

                <nav class="navbar  navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="index.html">
                        <img class="logo-size" src="img/logo.svg" alt="balanceplus"></a>
                    <button class="navbar-toggler nav-custome1" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle test-menu" id="test" href="index.html" id="navbarDropdown"
                                    role="button" aria-haspopup="true" aria-expanded="false">
                                    Home
                                </a>

                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
                                    <i class="fas fa-angle-down"></i>
                                </a>
                                <div class="dropdown-menu"  aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item physio" href="services-physiotherapy.html">Physiotherapy</a>
                                    <a class="dropdown-item fitness" href="services-fitness.html">Clinical Fitness</a>
                                    <a class="dropdown-item nutri" href="services-nutrition.html">Diet &
                                        Nutrition</a>
                                    <a class="dropdown-item corp" href="services-geriatric-rehabilitation.html">Geriatric rehabilitation</a>
                                    <a class="dropdown-item corp" href="services-corporate.html">Corporate Service</a>
                                </div>
                            </li>
                         
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="about.html" aria-haspopup="true"
                                    aria-expanded="false">
                                    About Us
                                </a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="blog-post.html" id="navbarDropdown3"
                                    role="button" aria-haspopup="true" aria-expanded="false"> Blog
                                    <div class="dropdown-menu dropdown-left" aria-labelledby="navbarDropdown"
                                        style="display: none;">
                                        <a class="dropdown-item" href="#" "></a>
        
                            </div>
                            </li>
                            <li class=" nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="testimonial.html"
                                                id="navbarDropdown4" role="button" aria-haspopup="true"
                                                aria-expanded="false">
                                                Testimonials
                                            </a>
                                            <div class="dropdown-menu dropdown-left" aria-labelledby="navbarDropdown"
                                                style="display: none;">
                                                <a class="dropdown-item" href="about.html">About</a>
                                            </div>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" target="_blank" href="https://rzp.io/l/uY1rAktUE" aria-haspopup="true"
                                aria-expanded="false">
                                Pay Online
                            </a>
                            </li>
                            <li class="nav-item ">
                                <a id="appoint-mob-id" class="nav-link btn btn-outline-primary appointment-btn-top nav-appoint-size"
                                    href="appointment.html">Appointment</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- Navigation Menu End -->
    `;

  // Get current URL path
  let pathname = window.location.pathname;
  pathname = pathname[0] == "/" ? pathname.substr(1) : pathname;

  let menu_item = $('ul > li > a[href="' + pathname + '"]');
  menu_item.addClass("nav-active");

  // Get current URL Hash path
  let hash = window.location.hash;
  let services_url = pathname + hash;

  if (services_url == "services-detail.html#physio") {
    $(".physio").addClass("nav-active");
  } else if (services_url == "services-detail.html#fitness") {
    $(".fitness").addClass("nav-active");
  } else if (services_url == "services-detail.html#nutrition") {
    $(".nutri").addClass("nav-active");
  } else if (services_url == "services-detail.html#corporate") {
    $(".corp").addClass("nav-active");
  }
});
