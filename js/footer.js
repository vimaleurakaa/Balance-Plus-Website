//Whats App
$(document).ready(function () {
  document.getElementById("whatsapp").innerHTML += `<a
    href="https://wa.me/917411692516?text=Hello, I’m interested in a service at your clinic and I’d like more information about it. please send me your brochure, Thanks."
    class="whatsapp-float"
    target="_blank"
  >
    <i class="fab fa-whatsapp whatsapp-ico-float"></i>
  </a>`;
});

//enquiry form
document.getElementById("enquiryNowModalWindow").innerHTML = `
    <div class="modal fade" id="enquireNow" tabindex="-1" role="dialog" aria-labelledby="enquireNowLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-0 row">
              <div class="col-12 col-lg-5 ad p-0">
                <img src="/img/blog/back-1.jpg" width="100%" height="100%" style="object-fit: cover" />
              </div>
              <div class="details col-12 col-lg-7 p-5">
                <div>
                  <h2>Enquire Now!</h2>
                  <p>Let us help you get back to better again!</p>
                </div>

                <form class="form-group mt-3 pt-3 mb-5" id="form" method="POST"
                  action="https://docs.google.com/forms/u/4/d/e/1FAIpQLSftJoP-lqx1iRGnTsGIBvWJYem7Ohnq6kggw3cBPAq96kLQjA/formResponse"
                  target="form-target" onsubmit="return enquiry_form();">
                  <div class="form-group">
                    <label for="yourName">Your Name</label>
                    <input type="text" name="entry.314831830" class="form-control" id="yourName" placeholder="Name"
                      required />
                  </div>
                  <div class="form-group">
                    <label for="emailOrPhone">Contact Information</label>
                    <input type="text" name="entry.1178267781" class="form-control" id="emailOrPhone"
                      placeholder="Email or Phone" required />
                  </div>

                  <button type="submit" class="btn btn-success btn-lg w-100 d-block mt-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

//Footer
$(document).ready(function () {
  document.getElementById("footer").innerHTML += `
<footer>
<div class="container container-custom">
<div class="row">
<div class="col-sm-12 col-md-12 col-lg-4">
<div class="foot-contact-block">
<img class='footer-logo' src="img/logo-white.svg" class="img-fluid" alt="#" ">
<p>
Confused about what Physiotherapy really is? Need a second opinion on your physician’s advice?  Book a consultation with us today and we will provide you with answers to your questions.
</p>
<a href="tel:+917411692516">
<h4><i class="fas fa-phone"></i>+91 74116 92516</h4>
</a>
<a href="mailto:balanceplusinfo@gmail.com">
<h4><i class="far fa-envelope"></i><span style="font-size:14px">balanceplusinfo@gmail.com</span></h4>
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
<a href="about.html"><i class="fas fa-angle-double-right"></i>About Us</a>
</li>
<li>
<a href="appointment.html"><i class="fas fa-angle-double-right"></i>Contact Us</a>
</li>
<li>
<a href="testimonial.html"><i class="fas fa-angle-double-right"></i>Testimonials</a>
</li>
<li>
<a href="blog-post.html"><i class="fas fa-angle-double-right"></i>Blogs</a>
</li>
<li>
<a href="https://wa.me/919019796808?text=Hello, I’m interested in a service at your clinic and I’d like more information about it. please send me your brochure. Thanks"><i class="fas fa-angle-double-right"></i>WhatsApp</a>
</li>
<li>
<a target="_blank" href="https://rzp.io/l/uY1rAktUE"><i class="fas fa-angle-double-right"></i>Payment</a>
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
<a href="services-physiotherapy.html"><i class="fas fa-angle-double-right"></i>Physiotherapy</a>
</li>
<li>
<a href="services-nutrition.html"><i class="fas fa-angle-double-right"></i>Dietitian</a>
</li>
<li>
<a href="services-fitness.html"><i class="fas fa-angle-double-right"></i>Fitness</a>
</li>
<li>
<a href="services-geriatric-rehabilitation.html"><i class="fas fa-angle-double-right"></i>Geriatric</a>
</li>
<li>
<a href="services-corporate.html"><i class="fas fa-angle-double-right"></i>Corporate Service</a>
</li>

</ul>
</div>
</div>
<div class="col-md-4 col-lg-2 offset-lg-1" style="padding-left: 40px;">
<div class="foot-link-box footlink-box_btn">

<ul>
<li>
<a href="https://www.facebook.com/Balance-Plus-115452077033033/" target="_blank"><i class="fab fa-facebook-f"></i></a>
</li>
<li>
<a href="https://instagram.com/balanceplus.in?utm_medium=copy_link" target="_blank"><i class="fab fa-instagram"></i></a>
</li>
<li>
<a href="https://www.linkedin.com/in/balance-plus-7509771ba" target="_blank"><i class="fab fa-linkedin"></i></a>
</li>
</ul>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="copyright">
 <p>© BalancePlus <span id="copyrightYear"></span> Allright Reserved</p>
<a href="#" id="scroll"><i class="fas fa-angle-double-up"></i></a>
</div>
</div>
</div>
</div>
</footer>`;

  const copyrightYear = document.getElementById("copyrightYear");
  copyrightYear.innerHTML = new Date().getFullYear();

  const eFlag = localStorage.getItem("enquiry-flag");

  if (!eFlag) {
    setTimeout(function () {
      $("#enquireNow").modal("show");
    }, 6000);
  }

  //form redirect
  function enquiry_form() {
    const form = document.getElementById("form");
    const origin_URL = window.location.origin;

    form.addEventListener("submit", function (e) {
      window.location.assign(origin_URL + "/thank-you.html");
      localStorage.setItem("enquiry-flag", true);
    });

    return;
  }
  enquiry_form();
});

// $(document).ready(function () {
//   $(".test-menu").addClass("nav-active");
// });
