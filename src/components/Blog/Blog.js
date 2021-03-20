import React from 'react';
import blogImg from '../../images/blogImg.jpg'
const Blog = () => {
    return (
        <div className="container">
            <div className="card col-lg-10 col-md-8 col-sm-12 mx-auto">
                <img src={blogImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Why You Should Choose Us</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, doloremque quos a est quibusdam repudiandae. Molestiae blanditiis beatae modi molestias dolor optio corporis neque voluptatum debitis est ipsa et eligendi dolores, impedit sequi, animi quae nihil? Dicta molestiae asperiores delectus, dolorum odit fugit voluptates. Cumque, quod similique! Perferendis aliquam quo inventore aperiam. Fuga ipsa quis nobis deleniti dolore consequuntur, veniam fugit sequi laboriosam ea ratione sapiente voluptatibus similique facere nam quidem exercitationem natus amet tenetur architecto maxime! Ut maiores dolores enim, atque minus pariatur dolorum, iure quas eveniet accusamus odit veritatis! Nisi non fugit ullam exercitationem odio ipsa quos repudiandae.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;