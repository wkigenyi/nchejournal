import Layout from "../../layouts/layout";
import { articles,publications } from "../../articleList";
import Link from "next/link";

export default function PublicationList(){
    const publicationsToShow = publications.map(a =>({...a,articles: articles.filter(b => b.publicationId == a.id)}))
    return (
        <Layout>
            {/* Breadcrumb */}
      <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 pt-5">
          <li className="breadcrumb-item">
            <Link href="/"><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Vol 10,Issue 1</li>
        </ol>
      </nav>


      {/* Page content */}
      <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">

        {/* Page title + Layout switcher + Search form */}
        <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
          <div className="col-lg-5 col-md-4">
            <h1 className="mb-2 mb-md-0">Publications</h1>
          </div>
          <div className="col-lg-7 col-md-8">
            <form className="row gy-2">
              <div className="col-lg-5 col-sm-6">
                {/* <div className="d-flex align-items-center">
                <select className="form-select">
                    
                  </select>
                </div> */}
              </div>
              <div className="col-lg-7 col-sm-6">
                <div className="input-group">
                  <input type="text" className="form-control pe-5 rounded" placeholder="Search the journal..."/>
                  <i className="bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg"></i>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Article Grid */}
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
          {/* Article */}
          {publicationsToShow.map((a,i) => <div key={i} className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <Link href={a.articles.length? `/publications/${a.slug}/articles`:"#"} className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                {/* <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later">
                  <i className="bx bx-bookmark"></i>
                </a> */}
                <img src="articles/cover2.jpg" className="card-img-top" alt="Image"/> 
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span key={i} className="badge bg-faded-primary text-primary fs-base">Research</span> 
                  
                  <span className="fs-sm text-muted">{a.date}</span> 
                </div>
                <h3 className="h5 mb-0">
                  <Link href={a.articles.length? `/publications/${a.slug}/articles`:"#"}>{a.title}</Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                <a href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  {/* <img src="assets/img/avatar/02.jpg" className="rounded-circle me-3" width="48" alt="Avatar"/> */}
                  {`${a.articles.length} Articles`}
                </a>
              </div>
            </article>
          </div>)}
          
        </div>

        {/* Pagination not active at the moment */}
        {/* <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center pt-md-4 pt-2">
            <li className="page-item">
              <a href="#" className="page-link">
                <i className="bx bx-chevron-left mx-n1"></i>
              </a>
            </li>
            <li className="page-item disabled d-sm-none">
              <span className="page-link text-body">2 / 4</span>
            </li>
            <li className="page-item d-none d-sm-block">
              <a href="#" className="page-link">1</a>
            </li>
            <li className="page-item active d-none d-sm-block" aria-current="page">
              <span className="page-link">
                2
                <span className="visually-hidden">(current)</span>
              </span>
            </li>
            <li className="page-item d-none d-sm-block">
              <a href="#" className="page-link">3</a>
            </li>
            <li className="page-item d-none d-sm-block">
              <a href="#" className="page-link">4</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                <i className="bx bx-chevron-right mx-n1"></i>
              </a>
            </li>
          </ul>
        </nav> */}
      </section>
        </Layout>
    );
}