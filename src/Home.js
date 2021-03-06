import { UserContext } from "./App";
import { useContext } from "react";
import "./css/Home.css";
import htmlIconLight from "./images/icons/html-icon-light.svg";
import htmlIconDark from "./images/icons/html-icon-dark.svg";
import cssIconLight from "./images/icons/css-icon-light.svg";
import cssIconDark from "./images/icons/css-icon-dark.svg";
import jsIcon from "./images/icons/js-icon.svg";
import reactIcon from "./images/icons/react-icon.svg";
import nodeIconLight from "./images/icons/node-icon-light.svg";
import nodeIconDark from "./images/icons/node-icon-dark.svg";
import mongoIconLight from "./images/icons/mongo-icon-light.svg";
import mongoIconDark from "./images/icons/mongo-icon-dark.svg";

const Home = () => {
    const { mode, modeStyles } = useContext(UserContext);

    return (
        <div className={ `Home` } style={ modeStyles }>
            <h2>Frontend MERN Stack Developer</h2>
            <div className="description-wrapper">
                <p>I'm a frontend MERN stack developer with many years of experience in object-oriented programming.</p>
                <p>I possess many fundamental web development skills, including: HTML, CSS, TailwindCSS, responsive design, JavaScript, React, Node, and MongoDB.</p>
                <p>I've become familiar with CSS responsive layouts and styling (especially with flexbox layouts), while I'm currently practicing to develop my skills and experience with React: with which I am becoming far more comfortable, and learning to use its many powerful features to develop modern web applications.</p>
                <p>Although I focus on frontend development: I also have knowledge of backend Node.js with Express, including MongoDB and Mongoose to develop client/server CRUD applications which use collections, documents, and schema-based data models.</p>
            </div>
            <div className="tech-icons-wrapper">
                <div className="icon-wrapper">
                    <img src={ mode === `light` ? htmlIconLight : htmlIconDark } alt="tech-icon" />
                    <p>Desktop-first HTML markup including HTML5 semantic tags.</p>
                </div>
                <div className="icon-wrapper">
                    <img src={ mode === `light` ? cssIconLight : cssIconDark } alt="tech-icon" />
                    <p>Mobile-first CSS responsive layouts and styling using flexbox and grid style properties.</p>
                </div>
                <div className="icon-wrapper">
                    <img src={ jsIcon } alt="tech-icon" />
                    <p>Modern ES6/ES7 features including array methods and asynchronous functions. Manipulate the DOM and save data to localStorage to persist web app state.</p>
                </div>
                <div className="icon-wrapper">
                    <img src={ reactIcon } alt="tech-icon" />
                    <p>Functional components with props plus conditional render JSX template and components. Manage web app state and use react hooks including custom hooks.</p>
                </div>
                <div className="icon-wrapper">
                    <img src={ mode === `light` ? nodeIconLight : nodeIconDark } alt="tech-icon" />
                    <p>Host a backend web server using an Express app which handles routes (including request methods) and middleware to facilitate client/server communication and data transfer.</p>
                </div>
                <div className="icon-wrapper">
                    <img src={ mode === `light` ? mongoIconLight : mongoIconDark } alt="tech-icon" />
                    <p>Setup a NoSQL database on the cloud with Atlas which contains collections each containing many documents. Construct schemas and models to manage collections using Mongoose.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;