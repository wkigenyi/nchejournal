import Image from "next/image"
export default function Header(){
    return <header className="header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none fixed-top">
    <div className="container px-3">
      <a href="index.html" className="navbar-brand pe-3">
        <Image src="/logo.png" width="120" height={43} alt="UNCHE" />
        UNCHE
      </a>
      <div id="navbarNav" className="offcanvas offcanvas-end">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <a href="#" className="nav-link" data-bs-toggle="dropdown">Editorial Board</a>
              {/* <div className="dropdown-menu">
                <div className="d-lg-flex pt-lg-3">
                  <div className="mega-dropdown-column">
                    <h6 className="px-3 mb-2">About</h6>
                    <ul className="list-unstyled mb-3">
                      <li><a href="about-v1.html" className="dropdown-item py-1">About v.1</a></li>
                      <li><a href="about-v2.html" className="dropdown-item py-1">About v.2</a></li>
                    </ul>
                    <h6 className="px-3 mb-2">Blog</h6>
                    <ul className="list-unstyled mb-3">
                      <li><a href="blog-list-with-sidebar.html" className="dropdown-item py-1">List View with Sidebar</a></li>
                      <li><a href="blog-grid-with-sidebar.html" className="dropdown-item py-1">Grid View with Sidebar</a></li>
                      <li><a href="blog-list-no-sidebar.html" className="dropdown-item py-1">List View no Sidebar</a></li>
                      <li><a href="blog-grid-no-sidebar.html" className="dropdown-item py-1">Grid View no Sidebar</a></li>
                      <li><a href="blog-simple-feed.html" className="dropdown-item py-1">Simple Feed</a></li>
                      <li><a href="blog-single.html" className="dropdown-item py-1">Single Post</a></li>
                      <li><a href="blog-podcast.html" className="dropdown-item py-1">Podcast</a></li>
                    </ul>
                  </div>
                  <div className="mega-dropdown-column">
                    <h6 className="px-3 mb-2">Portfolio</h6>
                    <ul className="list-unstyled mb-3">
                      <li><a href="portfolio-grid.html" className="dropdown-item py-1">Grid View</a></li>
                      <li><a href="portfolio-list.html" className="dropdown-item py-1">List View</a></li>
                      <li><a href="portfolio-slider.html" className="dropdown-item py-1">Slider View</a></li>
                      <li><a href="portfolio-courses.html" className="dropdown-item py-1">Courses</a></li>
                      <li><a href="portfolio-single-project.html" className="dropdown-item py-1">Single Project</a></li>
                      <li><a href="portfolio-single-course.html" className="dropdown-item py-1">Single Course</a></li>
                    </ul>
                    <h6 className="px-3 mb-2">Services</h6>
                    <ul className="list-unstyled mb-3">
                      <li><a href="services-v1.html" className="dropdown-item py-1">Services v.1</a></li>
                      <li><a href="services-v2.html" className="dropdown-item py-1">Services v.2</a></li>
                      <li><a href="services-single-v1.html" className="dropdown-item py-1">Service Details v.1</a></li>
                      <li><a href="services-single-v2.html" className="dropdown-item py-1">Service Details v.2</a></li>
                    </ul>
                  </div>
                  <div className="mega-dropdown-column">
                    <h6 className="px-3 mb-2">Pricing</h6>
                    <ul className="list-unstyled mb-3">
                      <li><a href="pricing.html" className="dropdown-item py-1">Pricing Page</a></li>
                    </ul>
                    <h6 className="px-3 mb-2">Contacts</h6>
                    <ul className="list-unstyled mb-3">
                      <li><a href="contacts-v1.html" className="dropdown-item py-1">Contacts v.1</a></li>
                      <li><a href="contacts-v2.html" className="dropdown-item py-1">Contacts v.2</a></li>
                      <li><a href="contacts-v3.html" className="dropdown-item py-1">Contacts v.3</a></li>
                    </ul>
                    <h6 className="px-3 mb-2">Specialty</h6>
                    <ul className="list-unstyled">
                      <li><a href="404-v1.html" className="dropdown-item py-1">404 Error v.1</a></li>
                      <li><a href="404-v2.html" className="dropdown-item py-1">404 Error v.2</a></li>
                    </ul>
                  </div>
                </div>
              </div> */} 
            </li>
            <li className="nav-item ">
              <a href="#" className="nav-link" data-bs-toggle="dropdown" aria-current="page">Editorial Board</a>
              {/* <ul className="dropdown-menu">
                <li><a href="account-details.html" className="dropdown-item">Account Details</a></li>
                <li><a href="account-security.html" className="dropdown-item">Security</a></li>
                <li><a href="account-notifications.html" className="dropdown-item">Notifications</a></li>
                <li><a href="account-messages.html" className="dropdown-item">Messages</a></li>
                <li><a href="account-saved-items.html" className="dropdown-item">Saved Items</a></li>
                <li><a href="account-collections.html" className="dropdown-item">My Collections</a></li>
                <li><a href="account-payment.html" className="dropdown-item">Payment Details</a></li>
                <li><a href="account-signin.html" className="dropdown-item">Sign In</a></li>
                <li><a href="account-signup.html" className="dropdown-item">Sign Up</a></li>
              </ul> */} 
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Archives</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Indexing</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Submission</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="offcanvas-header border-top">
          <a href="#" className="btn btn-primary w-100">
            
            &nbsp;Numbers Here
          </a>
        </div>      
      </div>
      
      <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a href="#" className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
        
        &nbsp;Numbers Here
      </a>
    </div>
    </header>
    
}