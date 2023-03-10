
import { useState } from 'react';
import {Document,Page, pdfjs} from "react-pdf";
import NextLink from 'next/link';
import Layout from '../layouts/layout';
import {articles} from "../articleList";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function Home() {
  
  const [numOfPages,setNumOfPages] = useState(null);
  const [pageNumber,setPageNumber] = useState(1);
  function onDocumentLoadSuccess({pages}){
    setNumOfPages(pages)
  }
  return (
    <Layout>
      <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 pt-5">
          <li className="breadcrumb-item">
            <NextLink href={"/"}><i className="bx bx-home-alt fs-lg me-1"></i>Home</NextLink>
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
          <a className="btn btn-lg btn-outline-primary w-100 mt-4" href="articles/CoverPage.pdf">
            <i className="bx bx-down-arrow-alt fs-xl me-2"></i>
            Download This Issue
          </a>
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
                {articles.map(a =><li className="nav-item mb-1" key={a.id}>
                  <NextLink href={`/articles/${a.id}`} className="nav-link py-1 px-0">{a.title} </NextLink>
                </li>)}
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
            {/* <div className="card card-body mb-4">
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
            </div> */} 

            {/* Follow Us */}
            {/* <div className="card mb-4">
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
            </div> */} 

            
            {/* <div className="card border-0 bg-faded-primary bg-repeat-0 bg-size-cover" style={{minHeight:"25rem"}}>
              <div className="card-body">
                <h5 className="h3 mb-4 pb-2 text-center">Ad Banner</h5>
              </div>
            </div> */} 
          </div>
        </div>
      </aside>
    </div>
  </section>

    </Layout>
  )
}
