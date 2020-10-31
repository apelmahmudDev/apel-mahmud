import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCalendarAlt, faPlus  } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <div className="container">
            
            <h1>This blog</h1>
            <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg" className="card-img" alt="" height="100%" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus deserunt iusto, praesentium debitis vel rem quisquam ea repudiandae necessitatibus, ratione qui explicabo facilis reprehenderit minus! Aut aspernatur fugiat illum cupiditate?</p>
                </div>
                <div className="d-flex justify-content-between card-footer">
                    <p><FontAwesomeIcon icon={faUserCircle} />
                        <span> By Apel Mahmud</span>
                    </p>
                    <p><FontAwesomeIcon icon={faCalendarAlt} />
                        <span> 11 Aug 2020</span>
                    </p>
                    <strong>
                        <span>Read More </span>
                        <FontAwesomeIcon icon={faPlus} />
                    </strong>
                </div>
                <div className="blog-number bg-success">
                    <h1 className="mt-3 ml-2">01</h1>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;