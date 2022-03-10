import { UserContext } from "./App";
import { useContext } from "react";
import "./css/Home.css";
import htmlIconLight from "./images/icons/html-icon-light.svg";
import htmlIconDark from "./images/icons/html-icon-dark.svg";
import cssIconLight from "./images/icons/css-icon-light.svg";
import cssIconDark from "./images/icons/css-icon-dark.svg";
import jsIcon from "./images/icons/js-icon.svg";
import reactIcon from "./images/icons/react-icon.svg";

const Home = () => {
    const { mode } = useContext(UserContext);

    return (
        <div className={ `Home ${mode}` }>
            <h2>Front-end React Developer</h2>
            <div className="description-wrapper">
                <p>I'm a front-end React developer; I have many years of experience with object-oriented programming, and I have subsequently focused on front-end React web development.</p>
                <p>I possess many fundamental web development skills, including: HTML5, CSS, Sass, responsive web design, Javascript (ES6/ES7), ReactJS, Git+Github, and source code debugging.</p>
                <p>I've become familiar with CSS responsive layouts and styling (especially with flexbox layouts), while I'm currently learning many new things with React: with which I am becoming far more comfortable, and learning to use its many powerful features to develop web applications.</p>
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
            </div>
        </div>
    );
}

export default Home;