import React from 'react';

const NotFoundPage = () => (
    <>
        <div id="notfound">
            <div className="notfound-bg"></div>
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Oops! Page Not Found</h2>
                <p><a className="button" href="/">Back To Homepage</a></p>
            </div>
        </div>
    </>
);

export default NotFoundPage;