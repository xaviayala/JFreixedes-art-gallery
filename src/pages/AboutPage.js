import React from 'react';
import MainHeader from '../components/MainHeader';
import Facebook from '../components/Facebook';

const pageTitle = "About Me";

const AboutPage = () => (
    <>
    <MainHeader title={pageTitle} />
    <section className="wrapper">
        <div className="inner">
            <header className="align-center">
                <h1>About Me</h1>
                <h3>The about me section content is still under the author's review</h3>
            </header>
            <div className="flex flex-2">
                <div className="col col2">
                    <p>
                    ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
                    Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
                    non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
                    eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
                    sodales purus euismod.
                    </p>
                    <p>
                    Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
                    Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
                    nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
                    sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
                    interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
                    consequat quam. Vivamus accumsan dui in facilisis aliquet.
                    </p>
                </div>
                <div className="col col1 first">
                    <div className="image round fit">
                        <img src={require(`../assets/images/josep-freixedes.jpg`)} alt="Josep Freixedes" />
                    </div>
                </div>
            </div>
            <p>
                    Etiam nec lectus urna. Sed sodales ultrices dapibus. 
                    Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
                    nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
                    sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
                    interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
                    consequat quam. Vivamus accumsan dui in facilisis aliquet.
                </p>
                <p> 
                    Nunc interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
                    consequat quam. Vivamus accumsan dui in facilisis aliquet. nibh elit congue tellus, 
                    ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan tellus quita.
                </p>
                <Facebook />
        </div>
    </section>    
    </>
);

export default AboutPage;