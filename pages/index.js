import Head from 'next/head'
import { useState } from 'react';
import {Document,Page, pdfjs} from "react-pdf";
import Header from '../components/header';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const htmlContent = `<!-- Page wrapper for sticky footer -->
<!-- Wraps everything except footer to push footer to the bottom of the page if there is little content -->
<main className="page-wrapper">


  <!-- Navbar -->
  <!-- Remove "fixed-top" class to make navigation bar scrollable with the page -->
  

  <!-- Breadcrumb -->
  <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
    <ol className="breadcrumb mb-0 pt-5">
      <li className="breadcrumb-item">
        <a href="index.html"><i className="bx bx-home-alt fs-lg me-1"></i>Home</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">The Uganda Higher Education Review</li>
    </ol>
  </nav>


  <!-- Page content -->
  <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">

    <!-- Page title + Layout switcher -->
    <div className="d-flex align-items-center justify-content-between mb-4 pb-1 pb-md-3">
      <h1 className="mb-0">Journal of the National Council for Higher Education, Vol. 10, Issue 1, 2022</h1>
      <!-- <div className="d-flex align-items-center ms-sm-4 ms-3">
        <a href="blog-list-with-sidebar.html" className="nav-link me-2 p-0">
          <i className="bx bx-list-ul fs-4"></i>
        </a>
        <a href="blog-grid-with-sidebar.html" className="nav-link p-0 active">
          <i className="bx bx-grid-alt fs-4"></i>
        </a>
      </div>
-->        </div>


    <!-- Blog grid + Sidebar -->
    <div className="row">
      <div className="col-xl-9 col-lg-8">
        <div className="pe-xl-5">
          <div className="masonry-grid row row-cols-sm-2 row-cols-1 g-4">
            
            

            

            

            

            

            
          </div>

          <!-- Load more button -->
          <button className="btn btn-lg btn-outline-primary w-100 mt-4">
            <i className="bx bx-down-arrow-alt fs-xl me-2"></i>
            Download This Issue
          </button>
        </div>
      </div>


      <!-- Sidebar (Offcanvas below lg breakpoint) -->
      <aside className="col-xl-3 col-lg-4">
        <div className="offcanvas-lg offcanvas-end" id="blog-sidebar" tabindex="-1">

          <!-- Header -->
          <div className="offcanvas-header border-bottom">
            <h3 className="offcanvas-title fs-lg">Sidebar</h3>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#blog-sidebar"></button>
          </div>

          <!-- Body -->
          <div className="offcanvas-body">

            <!-- Search form -->
            <form className="input-group mb-4">
              <input type="text" placeholder="Search the journal..." className="form-control rounded pe-5">
              <i className='bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 fs-lg zindex-5'></i>
            </form>

            <!-- Categories -->
            <div className="card card-body mb-4">
              <h3 className="h5">Articles</h3>
              <ul className="nav flex-column fs-sm">
                <!-- <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0 active"> <span className="fw-normal opacity-60 ms-1">(48)</span></a>
                </li> -->
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">Editorial </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">Contents </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">About the Journal </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">Role of Higher Education Growth in Enhancing Economic Growth, Innovation
Advancement and Technological Progress in Uganda (1970–2014) </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">Building Educational Research Capacity: Challenges and Opportunities from the
Perspectives of Faculty Staff of Selected Private Universities in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Research Management and Research Productivity among Lecturers at Kyambogo
University, Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Policy Support and Research Productivity among Lecturers in Ugandan Public
Universities: Case of Kyambogo University </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Enhancing Research Output in Higher Institutions of Learning: A Case Study of
Busitema University Research Model </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">University Sustainable Development and Management of Academic Staff in Higher
Institution of Learning in Central Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Information Communication Technologies and Implementation of Education for
Sustainable Development in Higher Education in Uganda: A case of Busitema
University </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Employee Engagement and Job Performance among Academic Staff in Public
Universities in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Satisfaction with Human Resource Management Practices and Job Performance of
Academic Staff in Public Universities in Uganda: A Case of Kyambogo University </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Talent Management: The Game Changer for Work Engagement of Non-Teaching
Workforce at Kyambogo University, Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">PhD Studentship and Research Supervisors during the COVID-19 Pandemic at a
Premier University in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Using the European Customer Satisfaction Index (ECSI) Model to Examine Student
Satisfaction in the Context of Universities in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Factors Affecting Students’ Performance, Enrolment and Retention in Science Subjects
in Secondary Schools in Uganda: A Case Study of Kigezi Region of Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Overcoming Policy and Practice Fragility and Enhancing Security of Science,
Technology and Innovation Educational Achievement for Females in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">How Internationalised Is Your Curriculum? University Graduate Students Speak Out </a>
                </li>
              </ul>
            </div>

            <!-- Popular posts -->
            <div className="card card-body border-0 position-relative mb-4">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-3"></span>
              <div className="position-relative zindex-2">
                <h3 className="h5">All Issues</h3>
                <ul className="list-unstyled mb-0">
                  <li className="border-bottom pb-3 mb-3">
                    <h4 className="h6 mb-2">
                      <a href="#">Vol. 10, Issue 1, 2022</a>
                    </h4>
                    <div className="d-flex align-items-center text-muted pt-1">
                      <div className="fs-xs border-end pe-3 me-3">December, 2022</div>
                      <!-- <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-base me-1"></i>
                        <span className="fs-xs">8</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-base me-1"></i>
                        <span className="fs-xs">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-base me-1"></i>
                        <span className="fs-xs">2</span>
                      </div> -->
                    </div>
                  </li>
                  <li className="border-bottom pb-3 mb-3">
                    <h4 className="h6 mb-2">
                      <a href="#">Vol. 9, Issue 2, 2021</a>
                    </h4>
                    <div className="d-flex align-items-center text-muted pt-1">
                      <div className="fs-xs border-end pe-3 me-3">December, 2021</div>
                      <!-- <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-base me-1"></i>
                        <span className="fs-xs">8</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-base me-1"></i>
                        <span className="fs-xs">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-base me-1"></i>
                        <span className="fs-xs">2</span>
                      </div> -->
                    </div>
                  </li>
                  <li className="border-bottom pb-3 mb-3">
                    <h4 className="h6 mb-2">
                      <a href="#">Vol. 8, Issue 1, 2020</a>
                    </h4>
                    <div className="d-flex align-items-center text-muted pt-1">
                      <div className="fs-xs border-end pe-3 me-3">December, 2020</div>
                      <!-- <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-base me-1"></i>
                        <span className="fs-xs">8</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-base me-1"></i>
                        <span className="fs-xs">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-base me-1"></i>
                        <span className="fs-xs">2</span>
                      </div> -->
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Tags -->
            <!-- <div className="card card-body mb-4">
              <h3 className="h5">Tags</h3>
              <div className="d-flex flex-wrap">
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#lifestyle</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#ux</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#tech</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#user</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#software</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#it</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#network</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#engineering</a>
              </div>
            </div> -->

            <!-- Follow Us -->
            <!-- <div className="card mb-4">
              <div className="card-body">
                <h5 className="mb-4">Follow Us</h5>
                <a href="#" className="btn btn-icon btn-sm btn-secondary btn-linkedin me-2 mb-2">
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="#" className="btn btn-icon btn-sm btn-secondary btn-facebook me-2 mb-2">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="btn btn-icon btn-sm btn-secondary btn-twitter me-2 mb-2">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="btn btn-icon btn-sm btn-secondary btn-instagram me-2 mb-2">
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div> -->

            <!-- Advertising -->
            <!-- <div className="card border-0 bg-faded-primary bg-repeat-0 bg-size-cover" style="min-height: 25rem; background-image: url(assets/img/blog/banner.png);">
              <div className="card-body">
                <h5 className="h3 mb-4 pb-2 text-center">Ad Banner</h5>
              </div>
            </div> -->
          </div>
        </div>
      </aside>
    </div>
  </section>


  
</main>


<!-- Footer -->
<footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
  <div className="container pt-lg-4">
    <div className="row pb-5">
      <div className="col-lg-4 col-md-6">
        <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
          <!-- <img src="assets/logo.png" width="120" alt="UNCHE"> -->
          Uganda National Council For Higher Education Journal
        </div>
        <!-- <p className="fs-sm text-light opacity-70 pb-lg-3 mb-4">Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.</p>
        <form className="needs-validation" novalidate>
          <label for="subscr-email" className="form-label">Subscribe to our newsletter</label>
          <div className="input-group">
            <input type="email" id="subscr-email" className="form-control rounded-start ps-5" placeholder="Your email" required>
            <i className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"></i>
            <div className="invalid-tooltip position-absolute top-100 start-0">Please provide a valid email address.</div>
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </div>
        </form> -->
      </div>
      <!-- <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
        <div id="footer-links" className="row">
          <div className="col-lg-4">
            <h6 className="mb-2">
              <a href="#useful-links" className="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Useful Links</a>
            </h6>
            <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
              <ul className="nav flex-column pb-lg-1 mb-lg-3">
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Services</a></li>
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Our Works</a></li>
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Blog</a></li>
              </ul>
              <ul className="nav flex-column mb-2 mb-lg-0">
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Terms &amp; Conditions</a></li>
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-3">
            <h6 className="mb-2">
              <a href="#social-links" className="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Socials</a>
            </h6>
            <div id="social-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
              <ul className="nav flex-column mb-2 mb-lg-0">
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Facebook</a></li>
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn</a></li>
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Twitter</a></li>
                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
            <h6 className="mb-2">Contact Us</h6>
            <a href="mailto:email@example.com" className="fw-medium">email@example.com</a>
          </div>
        </div>
      </div> -->
    </div>
    <!-- <p className="nav d-block fs-xs text-center text-md-start pb-5 pb-lg-0 mb-0">
      <span className="text-light opacity-50">&copy; All rights reserved. Made by </span>
      <a className="nav-link d-inline-block p-0" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a>
    </p> -->
  </div>
</footer>


<!-- Offcanvas blog toggler -->
<button type="button" data-bs-toggle="offcanvas" data-bs-target="#blog-sidebar" aria-controls="blog-sidebar" className="btn btn-sm btn-primary fixed-bottom d-lg-none w-100 rounded-0">
  <i className='bx bx-sidebar fs-xl me-2'></i>
  Sidebar
</button>


<!-- Back to top button -->
<a href="#top" className="btn-scroll-top mb-4 mb-lg-0" data-scroll>
  <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
  <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
</a>


<!-- Vendor Scripts -->
<script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
<script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
<script src="assets/vendor/shufflejs/dist/shuffle.min.js"></script>
<script src="assets/vendor/lightgallery/lightgallery.min.js"></script>
<script src="assets/vendor/lightgallery/plugins/video/lg-video.min.js"></script>

<!-- Main Theme Script -->
<script src="assets/js/theme.min.js"></script>`

export default function Home() {
  const [numOfPages,setNumOfPages] = useState(null);
  const [pageNumber,setPageNumber] = useState(1);
  function onDocumentLoadSuccess({pages}){
    setNumOfPages(pages)
  }
  return (
    <>
      <Head>
        <title>Uganda National Council For Higher Education | Journal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page-wrapper">
      <Header/>

  {/* Navbar 
  Remove "fixed-top" class to make navigation bar scrollable with the page  */}
  

  {/* Breadcrumb */}
  <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
    <ol className="breadcrumb mb-0 pt-5">
      <li className="breadcrumb-item">
        <a href="index.html"><i className="bx bx-home-alt fs-lg me-1"></i>Home</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">The Uganda Higher Education Review</li>
    </ol>
  </nav>


  {/* Page content */}
  <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">

    {/* Page title */}
    <div className="d-flex align-items-center justify-content-between mb-4 pb-1 pb-md-3">
      <h1 className="mb-0">Journal of the National Council for Higher Education, Vol. 10, Issue 1, 2022</h1>
       {/* <div className="d-flex align-items-center ms-sm-4 ms-3">
        <a href="blog-list-with-sidebar.html" className="nav-link me-2 p-0">
          <i className="bx bx-list-ul fs-4"></i>
        </a>
        <a href="blog-grid-with-sidebar.html" className="nav-link p-0 active">
          <i className="bx bx-grid-alt fs-4"></i>
        </a>
      </div> */}
        </div>


    {/* Blog grid + Sidebar */}
    <div className="row">
      <div className="col-xl-9 col-lg-8">
        <div className="pe-xl-8">
          
            
            
            <Document file="articles/CoverPage.pdf" onLoadSuccess={onDocumentLoadSuccess} width="100%">
              <Page pageNumber={pageNumber}/>
            </Document>
            
            

            

            

            

            
          

          {/* Load more button */}
          <button className="btn btn-lg btn-outline-primary w-100 mt-4">
            <i className="bx bx-down-arrow-alt fs-xl me-2"></i>
            Download This Issue
          </button>
        </div>
      </div>


      {/* Sidebar (Offcanvas below lg breakpoint) */} 
      <aside className="col-xl-3 col-lg-4">
        <div className="offcanvas-lg offcanvas-end" id="blog-sidebar" tabIndex="-1">

          {/* Header */}
          <div className="offcanvas-header border-bottom">
            <h3 className="offcanvas-title fs-lg">Sidebar</h3>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#blog-sidebar"></button>
          </div>

          {/* Body */}
          <div className="offcanvas-body">

            {/* Search form */}
            <form className="input-group mb-4">
              <input type="text" placeholder="Search the journal..." className="form-control rounded pe-5"/>
              <i className='bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 fs-lg zindex-5'></i>
            </form>

            {/* Article List */}
            <div className="card card-body mb-4">
              <h3 className="h5">Articles</h3>
              <ul className="nav flex-column fs-sm">
                 {/* <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0 active"> <span className="fw-normal opacity-60 ms-1">(48)</span></a>
                </li> */} 
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">Editorial </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">Contents </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">About the Journal </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">Role of Higher Education Growth in Enhancing Economic Growth, Innovation
Advancement and Technological Progress in Uganda (1970–2014) </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link py-1 px-0">Building Educational Research Capacity: Challenges and Opportunities from the
Perspectives of Faculty Staff of Selected Private Universities in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Research Management and Research Productivity among Lecturers at Kyambogo
University, Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Policy Support and Research Productivity among Lecturers in Ugandan Public
Universities: Case of Kyambogo University </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Enhancing Research Output in Higher Institutions of Learning: A Case Study of
Busitema University Research Model </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">University Sustainable Development and Management of Academic Staff in Higher
Institution of Learning in Central Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Information Communication Technologies and Implementation of Education for
Sustainable Development in Higher Education in Uganda: A case of Busitema
University </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Employee Engagement and Job Performance among Academic Staff in Public
Universities in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Satisfaction with Human Resource Management Practices and Job Performance of
Academic Staff in Public Universities in Uganda: A Case of Kyambogo University </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Talent Management: The Game Changer for Work Engagement of Non-Teaching
Workforce at Kyambogo University, Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">PhD Studentship and Research Supervisors during the COVID-19 Pandemic at a
Premier University in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Using the European Customer Satisfaction Index (ECSI) Model to Examine Student
Satisfaction in the Context of Universities in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Factors Affecting Students’ Performance, Enrolment and Retention in Science Subjects
in Secondary Schools in Uganda: A Case Study of Kigezi Region of Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">Overcoming Policy and Practice Fragility and Enhancing Security of Science,
Technology and Innovation Educational Achievement for Females in Uganda </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link py-1 px-0">How Internationalised Is Your Curriculum? University Graduate Students Speak Out </a>
                </li>
              </ul>
            </div>

            {/* Issue List */} 
            <div className="card card-body border-0 position-relative mb-4">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-3"></span>
              <div className="position-relative zindex-2">
                <h3 className="h5">All Issues</h3>
                <ul className="list-unstyled mb-0">
                  <li className="border-bottom pb-3 mb-3">
                    <h4 className="h6 mb-2">
                      <a href="#">Vol. 10, Issue 1, 2022</a>
                    </h4>
                    <div className="d-flex align-items-center text-muted pt-1">
                      <div className="fs-xs border-end pe-3 me-3">December, 2022</div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-base me-1"></i>
                        <span className="fs-xs">8</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-base me-1"></i>
                        <span className="fs-xs">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-base me-1"></i>
                        <span className="fs-xs">2</span>
                      </div>
                    </div>
                  </li>
                  <li className="border-bottom pb-3 mb-3">
                    <h4 className="h6 mb-2">
                      <a href="#">Vol. 9, Issue 2, 2021</a>
                    </h4>
                    <div className="d-flex align-items-center text-muted pt-1">
                      <div className="fs-xs border-end pe-3 me-3">December, 2021</div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-base me-1"></i>
                        <span className="fs-xs">8</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-base me-1"></i>
                        <span className="fs-xs">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-base me-1"></i>
                        <span className="fs-xs">2</span>
                      </div>
                    </div>
                  </li>
                  <li className="border-bottom pb-3 mb-3">
                    <h4 className="h6 mb-2">
                      <a href="#">Vol. 8, Issue 1, 2020</a>
                    </h4>
                    <div className="d-flex align-items-center text-muted pt-1">
                      <div className="fs-xs border-end pe-3 me-3">December, 2020</div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-base me-1"></i>
                        <span className="fs-xs">8</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-base me-1"></i>
                        <span className="fs-xs">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-base me-1"></i>
                        <span className="fs-xs">2</span>
                      </div> 
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tags */}
            <div className="card card-body mb-4">
              <h3 className="h5">Tags</h3>
              <div className="d-flex flex-wrap">
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#lifestyle</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#ux</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#tech</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#user</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#software</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#it</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#network</a>
                <a href="#" className="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#engineering</a>
              </div>
            </div> 

            {/* Follow Us */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="mb-4">Follow Us</h5>
                <a href="#" className="btn btn-icon btn-sm btn-secondary btn-linkedin me-2 mb-2">
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="#" className="btn btn-icon btn-sm btn-secondary btn-facebook me-2 mb-2">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="btn btn-icon btn-sm btn-secondary btn-twitter me-2 mb-2">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="btn btn-icon btn-sm btn-secondary btn-instagram me-2 mb-2">
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div> 

            
            <div className="card border-0 bg-faded-primary bg-repeat-0 bg-size-cover" style={{minHeight:"25rem"}}>
              <div className="card-body">
                <h5 className="h3 mb-4 pb-2 text-center">Ad Banner</h5>
              </div>
            </div> 
          </div>
        </div>
      </aside>
    </div>
  </section>


  
</main>

    </>
  )
}
