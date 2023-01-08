import Layout from '../layouts/layout';
import Link from 'next/link';
export default function Index(){
    return (
        <Layout>
            {/* Hero */}
      <section className=" position-relative jarallax pb-xl-3" data-jarallax data-speed="0.4">

        

        {/* Overlay bg */}
        <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70 zindex-1"></span>

        {/* Overlay content */}
        <div className="container position-relative pb-5 zindex-5">

          {/* Breadcrumb */}
          <nav className="py-4" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 py-3">
              <li className="breadcrumb-item">
                <Link href={"/"}><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Journal of the National Council For Higher Education</li>
            </ol>
          </nav>

          {/* Featured article */}
          <div className="row mb-xxl-5 py-md-4 py-lg-5">
            <div className="col-lg-6 col-md-7 pb-3 pb-md-0 mb-4 mb-md-5">
              
              <h1 className="display-5 pb-md-3">The Uganda Higher Education Review</h1>
              <div className="d-flex flex-wrap mb-md-5 mb-4 pb-md-2 text-white">
                <div className="border-end border-light h-100 mb-2 pe-3 me-3">
                  <span className="badge bg-faded-light fs-base">Education</span>
                </div>
                <div className="border-end border-light mb-2 pe-3 me-3 opacity-70">December 2022</div>
                <div className="d-flex align-items-center mb-2 text-nowrap">
                  <div className="d-flex align-items-center me-3 opacity-70">
                    <i className="bx bx-download fs-lg me-1"></i>
                    <span className="fs-sm">0</span>
                  </div>
                  <div className="d-flex align-items-center me-3 opacity-70">
                    <i className="bx bx-comment fs-lg me-1"></i>
                    <span className="fs-sm">0</span>
                  </div>
                </div>
              </div>
              <Link href={"/journal"} className="btn btn-lg btn-primary">
                Read article
                <i className="bx bx-right-arrow-alt ms-2 me-n1 lead"></i>
              </Link>
            </div>

            {/* Articles slider */}
            <div className="col-lg-4 offset-lg-2 col-md-5">
              <div className="swiper overflow-hidden w-100 ms-n2 ms-md-0 pe-3 pe-sm-4" style={{maxHeight:405}} data-swiper-options='{
                "direction": "vertical",
                "slidesPerView": "auto",
                "freeMode": true,
                "scrollbar": {
                  "el": ".swiper-scrollbar"
                },
                "mousewheel": true
              }'>
                <div className="swiper-wrapper pe-md-2">
                  <div className="swiper-slide h-auto px-2">

                    <div className="row row-cols-md-1 row-cols-sm-2 row-cols-1 g-md-4 g-3">

                      {/* Article */}
                      <div className="col">
                        <article className="card h-100 border-0 shadow-sm card-hover-primary">
                          <div className="card-body pb-0">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <a href="#" className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2">Education</a>
                              <span className="fs-sm text-muted">Dec 2022</span>
                            </div>
                            <h3 className="h5 mb-0">
                              <Link href={"/journal"} className="stretched-link">Journal of the National Council for Higher Education, Vol. 10 Issue 1, December 2022</Link>
                            </h3>
                          </div>
                          <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                            <div className="d-flex align-items-center me-3">
                              <i className="bx bx-download fs-lg me-1"></i>
                              <span className="fs-sm">0</span>
                            </div>
                            <div className="d-flex align-items-center me-3">
                              <i className="bx bx-comment fs-lg me-1"></i>
                              <span className="fs-sm">0</span>
                            </div>
                            
                          </div>
                        </article>
                      </div>

                      

                      

                    

                      
                      
                    </div>
                  </div>
                </div>
                <div className="swiper-scrollbar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </Layout>
    );
}