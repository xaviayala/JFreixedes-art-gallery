import React from 'react';
import moment from 'moment';
import MainHeader from '../components/MainHeader';
import { Link } from 'react-router-dom';
import PageHelmet from '../components/PageHelmet';

const Post = props => {
  const post = props.location.state;
  return (
    <>
      <MainHeader />
      <section className="wrapper">
          <div className="inner">   

          {/*  Adding a SEO helmet to allows us to set the HTML metadata in the header of any given blog post */ }
          <PageHelmet title={post.seo_title} description={post.meta_description} pageImage={post.featured_image} />

            <h1>{post.title}</h1>
            <hr />
            <div className="author">
              <div>
                Published by
                {' '}
                <strong>
                  {post.author.first_name} {post.author.last_name}
                </strong>
                {' '} on {' '}
                {moment(post.published).format("MMMM Do, YYYY")}
              </div>
            </div>
            <hr />
            {/* The prop name dangerouslySetInnerHTML is intentionally chosen to be frightening 
                Improper use of the innerHTML can open you up to a cross-site scripting (XSS) attack. 
                Sanitizing user input for display is notoriously error-prone, and failure to properly
                 sanitize is one of the leading causes of web vulnerabilities on the internet.*/}
            <div dangerouslySetInnerHTML={{__html: post.body}} />
            <hr />
            <Link to="/blog">&larr; Back to the posts list</Link>
          </div>
      </section>   
    </> 
  );

}

export default Post;