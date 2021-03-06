import "./css/Resume.css";
import { UserContext } from "./App.js";
import { useContext } from "react";
import resumeProfileImg from "./images/resumeprofile.jpg";
import ghIconLight from "./images/icons/gh-icon-light.svg";
import ghIconDark from "./images/icons/gh-icon-dark.svg";

const Resume = () => {
    const { theme, mode, modeStyles, colorStyles } = useContext(UserContext);

    return (
        <div className={ `Resume` }>
            <div className="profile-column" style={ modeStyles }>
                <img src={ resumeProfileImg } alt="resume-profile-img" />
                <div className="profile-title-wrapper">
                    <h2>Ryan-D-P</h2>
                    <a href="http://github.com/Ryan-D-P" target="_blank" rel="noopener noreferrer"><img src={ mode === `light` ? ghIconLight : ghIconDark } alt="gh-profile-icon" /></a>
                </div>
                <div className="profile-details">
                    <p>ryandp@mailfence.com</p>
                    <p>04 1165 7805</p>
                    <p>Southport, QLD 4215</p>
                </div>
            </div>
            <div className="sections-column">
                <section className={ `resume-section education-section` } style={ {...colorStyles, color: `var(--dark)`} }>
                    <h2 style={ {color: `var(--${theme}-theme-color)`} }>Education</h2>
                    <div className="education">
                        <h3>Diploma of Software Development (TAFE Queensland)</h3>
                    </div>
                </section>
                <section className={ `resume-section experience-section` } style={ {...colorStyles, color: `var(--dark)`} }>
                    <h2 style={ {color: `var(--${theme}-theme-color)`} }>Experience</h2>
                    <div className="experience">
                        <h3>Rest API Countries (<a href="https://github.com/Ryan-D-P/rest-countries" target="_blank" rel="noopener noreferrer">https://github.com/Ryan-D-P/rest-countries</a>)</h3>
                        <p>A React app using the Rest Countries API which displays all countries on the homepage with their information; the user can filter countries by name as well as by region, while each country links to a details page which displays more in-depth information for that specific country and includes links to those bordering it.</p>
                    </div>
                    <div className="experience">
                        <h3>Interactive Comments (<a href="http://github.com/Ryan-D-P/interactive-comments-section" target="_blank" rel="noopener noreferrer">https://github.com/Ryan-D-P/interactive-comments-section</a>)</h3>
                        <p>A React project which displays a list of user comments from a local JSON file; the app also provides CRUD-like operations to interact with the comments, such as posting a new comment, replying to a comment, upvoting/downvoting a comment, deleting comments posted by the current user, and editing previously posted comments/replies of the current user.</p>
                    </div>
                    <div className="experience">
                        <h3>Product Page (<a href="https://github.com/Ryan-D-P/product-page" target="_blank" rel="noopener noreferrer">https://github.com/Ryan-D-P/product-page</a>)</h3>
                        <p>An e-commerce product page using React which includes an image gallery (with a lightbox), a button to add an item to the cart, and a cart menu which uses state to track the number of items in the cart and to display items in the cart according to their quantity and price.</p>
                    </div>
                    <div className="experience">
                        <h3>IP Tracker with LeafletJS Map (<a href="https://github.com/Ryan-D-P/ip-address-tracker" target="_blank" rel="noopener noreferrer">https://github.com/Ryan-D-P/ip-address-tracker</a>)</h3>
                        <p>A React app which takes an IP as input and uses the geo.ipify API to get location, time, and ISP data; the data is then used to display the location using a LeafletJS map (React Leaflet).</p>
                    </div>
                    <div className="experience">
                        <h3>Job Listings (<a href="https://github.com/Ryan-D-P/job-listings" target="_blank" rel="noopener noreferrer">https://github.com/Ryan-D-P/job-listings</a>)</h3>
                        <p>A React app which displays job listings, including tags from a local JSON file; filter tags may be selected (and un-selected) by the user to filter the displayed job listings according to their own tags.</p>
                    </div>
                </section>
                <section className={ `resume-section skills-section` } style={ {...colorStyles, color: `var(--dark)`} }>
                    <h2 style={ {color: `var(--${theme}-theme-color)`} }>Skills</h2>
                    <div className="skills">
                        <ul className="skills-list">
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript ES6/ES7</li>
                            <li>ReactJS</li>
                            <li>Node.js</li>
                            <li>Node Express</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Resume;