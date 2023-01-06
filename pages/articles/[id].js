import { useRouter } from 'next/router';
import Layout from '../../layouts/layout';
import {articles} from '../../articleList';
import Link from 'next/link';
export default function Article(){
  const {id} = useRouter().query
  const article = articles.find(a => a.id.valueOf() == id);
  if(!article){
    return null
  }
  return (
    <Layout>
      <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link href="/"><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/">Uganda Higher Education Review</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Article</li>
        </ol> 
      </nav>


      {/* Article title + Meta */}
      <section className="container mt-4 pt-lg-2 pb-3">
        <h1 className="pb-3" style={{maxWidth:970}}>{article.title}</h1>
        <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-3">
          
          {article.authors.map((a,i) =><div className="d-flex align-items-center position-relative ps-md-3 pe-lg-5 mb-2" key={i} >
            {/* <img src="assets/img/avatar/39.jpg" className="rounded-circle" width="60" alt="Avatar"/> */}
            <div className="ps-3">
              <h6 className="mb-1">Author</h6>
              <a href="#" className="fw-semibold stretched-link">{a}</a>
            </div>
          </div>)}
          
          
        </div>
      </section>


      


      {/* Post content + Sharing */}
      <section className="container mb-5 pt-4 pb-2 py-mg-4">
        <div className="row gy-4">

          {/* Content */}
          <div className="col-lg-9">
            
            <h2 className="h4">Abstract</h2>
            <p className="mb-4 pb-2">{article.abstract}</p>

          </div>

          {/* Sharing */}
          <div className="col-lg-3 position-relative">
            <div className="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4" style={{top:"105px !important"}}>
              <button className="btn btn-lg btn-outline-secondary">
                <i className="bx bx-download me-2 lead"></i>
                Download
                <span className="badge bg-primary shadow-primary mt-n1 ms-3">0</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      

      {/* Comment form + Subscription */}
      <section className="container mb-4 pb-2 mb-md-5 pb-lg-5">
        <div className="row gy-5">

          {/* Comment form */}
          <div className="col-lg-9">
            
          </div>

          {/* Subscription form + Sharing */}
          <div className="col-lg-3 position-relative">
            <div className="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4" style={{top:"70px !important"}}>
              <div className="row gy-lg-5 gy-4 justify-content-center text-lg-start text-center">

                {/* Subscription form */}
                <div className="col-lg-12 col-sm-7 col-11">
                  <h6 className="fs-lg">Enjoyed this article? Join our newsletter</h6>
                  <form className="needs-validation" noValidate>
                    <div className="input-group mb-3">
                      <i className="bx bx-envelope position-absolute start-0 top-50 translate-middle-y zindex-5 ms-3 text-muted d-lg-inline-block d-none"></i>
                      <input type="email" placeholder="Your Email" className="form-control ps-lg-5 rounded text-lg-start text-center" required/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Subscribe</button>
                  </form>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Related articles (Slider below lg breakpoint) */}
      <section className="container mb-5 pt-md-4">
        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3">
          <h2 className="h1 mb-sm-0">Related Articles</h2>
          <Link href="/" className="btn btn-lg btn-outline-primary ms-4">
            All Articles
            <i className="bx bx-right-arrow-alt ms-1 me-n1 lh-1 lead"></i>
          </Link>
        </div>

        
      </section>
    </Layout>
  );
}