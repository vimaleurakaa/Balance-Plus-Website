$(document).ready(function () {
  `
  <!-- Navigation Menu -->
  <div class="container nav-container">
     <div class="row">
     <div class="col-md-12">
     
     <nav class="navbar navbar-expand-lg navbar-light">
     <a class="navbar-brand" href="index.html"><img class="logo-size" src="images/Balance-Plus-Logo.png" alt="#"></a>
     <button class="navbar-toggler nav-custome1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle
                                     navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav ml-auto">
     <li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
     Home 
     </a>
 
     </li>
     <li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle"  id="navbarDropdown1" role="button" href="services.html" aria-haspopup="true" aria-expanded="false">
     Services 
     <i class="fas fa-angle-down"></i>
     </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
         <a class="dropdown-item" href="services-detail.html#physio">Physiotherapy</a>
         <a class="dropdown-item" href="services-detail.html#fitness">Fitness & Training</a>
         <a class="dropdown-item" href="services-detail.html#nutrition">Dietitian & Nutrition</a>
         <a class="dropdown-item" href="services-detail.html#corporate">Corporate Service</a>
     </div>
     </li>
     
     <li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle nav-active" href="about.html" aria-haspopup="true" aria-expanded="false">
     About Us
     </a>
     </li>
     
     <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="blog-post-1.html" id="navbarDropdown3" role="button"  aria-haspopup="true" aria-expanded="false"> Blog
     <div class="dropdown-menu dropdown-left" aria-labelledby="navbarDropdown" style="display: none";>
     <a class="dropdown-item" href="blog-standard.html" "></a>
     
     </div>
     </li>
     <li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" href="testimonial.html" id="navbarDropdown4" role="button" aria-haspopup="true" aria-expanded="false">
     Testimonials
     </a>
     <div class="dropdown-menu dropdown-left" aria-labelledby="navbarDropdown" style="display: none;"">
     <a class="dropdown-item" href="about.html">About</a>
     </div>
     </li>
     <li class="nav-item">
         <a class="nav-link btn btn-outline-primary appointment-btn-top" href="appointment.html">Appointment</a>
         </li>
     </ul>
     </div>
     </nav>
     </div>
     </div>
 </div>
 <!-- Navigation Menu End -->`;
});

$(document).ready(function () {
  document.getElementById("whatsapp").innerHTML += `<a
    href="https://wa.me/917411692516?text=Hello, I’m interested in a service at your clinic and I’d like more information about it. please send me your brochure. Thnaks"
    class="whatsapp-float"
    target="_blank"
  >
    <i class="fab fa-whatsapp whatsapp-ico-float"></i>
  </a>`;
});

$(document).ready(function () {
  document.getElementById("footer").innerHTML += `
<footer>
<div class="container container-custom">
<div class="row">
<div class="col-sm-12 col-md-12 col-lg-4">
<div class="foot-contact-block">
<img class='footer-logo' src="img/logo-white.svg" class="img-fluid" alt="#" ">
<p>
Lorem ipsum dolor sit amet, consect <br> etur adipisicing elit, sed do eius mod <br>
tempor incididunt ut labore et dolore<br> magna aliqua. Ut enim ad minim
</p>
<a href="tel:91 123456789">
<h4><i class="fas fa-phone"></i>+91 123456789</h4>
</a>
<a href="">
<h4><i class="far fa-envelope"></i><span>info@balanceplus.in</span></h4>
</a>
</div>
</div>
<div class="col-sm-6 col-md-4 col-lg-2 offset-lg-1" style="
width: 50%;
padding-left: 40px;
">
<div class="foot-link-box">
<h4>Quick Links</h4>
<ul>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>About Us</a>
</li>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>Contact Us</a>
</li>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>Testimonials</a>
</li>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>Blogs</a>
</li>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>WhatsApp</a>
</li>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>Payment</a>
</li>
</ul>
</div>
</div>
<div class="col-sm-6 col-md-4 col-lg-2" style="
width: 50%;">
<div class="foot-link-box">
<h4>Our Services</h4>
<ul>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>Physiotherapy</a>
</li>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>Dietitian</a>
</li>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>Fitness</a>
</li>
<li>
<a href="#"><i class="fas fa-angle-double-right"></i>Corporate Service</a>
</li>

</ul>
</div>
</div>
<div class="col-md-4 col-lg-2 offset-lg-1" style="padding-left: 40px;">
<div class="foot-link-box footlink-box_btn">
<!-- <a href="#" class="btn btn-outline-success">Find a Doctor</a>
<a href="#" class="btn btn-outline-success">Career</a>
<a href="#" class="btn btn-outline-success">Newsletter</a> -->
<ul>
<li>
<a href="#"><i class="fab fa-facebook-f"></i></a>
</li>
<li>
<a href="#"><i class="fab fa-twitter"></i></a>
</li>
<li>
<a href="#"><i class="fab fa-instagram"></i></a>
</li>
<li>
<a href="#"><i class="fab fa-linkedin"></i></a>
</li>
</ul>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="copyright">
 <p>© BalancePlus 2020 Allright Reserved</p>
<a href="#" id="scroll"><i class="fas fa-angle-double-up"></i></a>
</div>
</div>
</div>
</div>
</footer>`;
});

// $(document).ready(function () {
//   $(".test-menu").addClass("nav-active");
// });
