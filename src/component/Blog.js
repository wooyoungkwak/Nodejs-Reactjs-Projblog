function Blog() {
    return (
        <>
            {/* <!-- Page content--> */}
            <div className="container">
                <div className="row">

                    {/* <!-- Blog entries--> */}
                    <div className="col-lg-8">

                        {/* <!-- Featured blog post--> */}
                        <div className="card mb-4">
                            <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>

                            <div className="card-body" index="1">
                                <div className="small text-muted">January 1, 2022</div>
                                <h2 className="card-title">Featured Post Title</h2>
                                <p className="card-text" id="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita
                                    corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                                <a href="#!" className="btn btn-primary register">Registry →</a>
                            </div>
                        </div>

                        {/* <!-- Nested row for non-featured blog posts--> */}
                        <div className="row">
                            <div className="col-lg-6" >

                                {/* <!-- Blog post--> */}
                                <div className="card mb-4">
                                    <a href="#!"><img className="card-img-top"
                                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                    <div className="card-body" index="2">
                                        <div className="small text-muted">January 1, 2022</div>
                                        <h2 className="card-title h4">Post Title</h2>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Reiciendis aliquid atque, nulla.</p>
                                        <a href="#!" className="btn btn-primary register">Registry →</a>
                                    </div>
                                </div>

                                {/* <!-- Blog post--> */}
                                <div className="card mb-4">
                                    <a href="#!"><img className="card-img-top"
                                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                    <div className="card-body" index="3">
                                        <div className="small text-muted">January 1, 2022</div>
                                        <h2 className="card-title h4">Post Title</h2>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Reiciendis aliquid atque, nulla.</p>
                                        <a href="#!" className="btn btn-primary register">Registry →</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                {/* <!-- Blog post--> */}
                                <div className="card mb-4">
                                    <a href="#!"><img className="card-img-top"
                                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                    <div className="card-body" index="4">
                                        <div className="small text-muted">January 1, 2022</div>
                                        <h2 className="card-title h4">Post Title</h2>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Reiciendis aliquid atque, nulla.</p>
                                        <a href="#!" className="btn btn-primary register">Registry →</a>
                                    </div>
                                </div>

                                {/* <!-- Blog post--> */}
                                <div className="card mb-4">
                                    <a href="#!"><img className="card-img-top"
                                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                    <div className="card-body" index="5">
                                        <div className="small text-muted">January 1, 2022</div>
                                        <h2 className="card-title h4">Post Title</h2>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
                                        <a href="#!" className="btn btn-primary register">Registry →</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Pagination--> */}
                        <nav aria-label="Pagination">
                            <hr className="my-0" />
                            <ul className="pagination justify-content-center my-4" id="pageControl"></ul>
                        </nav>
                    </div>

                    {/* <!-- Side widgets--> */}
                    <div className="col-lg-4">

                        {/* <!-- Search widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Search</div>
                            <div className="card-body">
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Enter search term..."
                                        aria-label="Enter search term..." aria-describedby="button-search" />
                                    <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Categories widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Categories</div>
                            <div className="card-body">
                                <div className="row" id="link">
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="#!">Web Design</a></li>
                                            <li><a href="#!">HTML</a></li>
                                            <li><a href="#!">Freebies</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="#!">JavaScript</a></li>
                                            <li><a href="#!">CSS</a></li>
                                            <li><a href="#!">Tutorials</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Side widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Side Widget</div>
                            <div className="card-body">You can put anything you want inside of these side widgets. They are easy
                                to use, and feature the Bootstrap 5 card component!
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;