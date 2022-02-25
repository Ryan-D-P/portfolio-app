import "./Resume.css";

const Resume = () => {
    return (
        <div className="Resume">
            <div className="profile-column">
                <h2>Ryan-D-P</h2>
                <a href="http://github.com/Ryan-D-P" target="_blank" rel="noopener noreferrer">https://github.com/Ryan-D-P</a>
            </div>
            <div className="sections-column">
                <section className="resume-section education-section">
                    <h2>Education</h2>
                    <div className="education">
                        <h3>Bachelor of Computer Science (in progress).</h3>
                    </div>
                    <div className="education">
                        <h3>Diploma of Software Development (2018-2019).</h3>
                    </div>
                </section>
                <section className="resume-section experience-section">
                    <h2>Experience</h2>
                    <div className="experience">
                        <h3>Interactive Comments Section. (<a href="http://github.com/Ryan-D-P/interactive-comments-section" target="_blank" rel="noopener noreferrer">https://github.com/Ryan-D-P/interactive-comments-section</a>)</h3>
                        <p>A React project which displays a list of user comments from a local JSON file; the app also provide CRUD-like operations to interact with the comments, such as posting a new comment, replying to a comment, upvoting/downvoting a comment, deleting comments posted by the current user, and editing previously posted comments/replies of the current user.</p>
                    </div>
                    <div className="experience">
                        <h3>Product Page. (<a href="https://github.com/Ryan-D-P/product-page" target="_blank" rel="noopener noreferrer">https://github.com/Ryan-D-P/product-page</a>)</h3>
                        <p>An e-commerce product page using React which includes an image gallery (with a lightbox), a button to add an item to the cart, and a cart menu which uses state to track the number of items in the cart and to display items in the cart according to their quantity and price.</p>
                    </div>
                </section>
                <section className="resume-section skills-section">
                    <h2>Skills</h2>
                    <div className="skills">
                        <ul className="skills-list">
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>Javascript</li>
                            <li>ES6/ES7</li>
                            <li>ReactJS</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Resume;