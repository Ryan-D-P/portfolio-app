import "./ColorThemeSelect.css";
import { UserContext } from "./App.js";
import { useContext } from "react";

const ColorThemeSelect = () => {
    const { theme, setTheme } = useContext(UserContext);

    const changeColorTheme = () => {
        const themes = [`orange`, `green`, `blue`];
        if (theme === `blue`) {
            setTheme(`orange`);
            return;
        }
        setTheme(themes[themes.indexOf(theme) + 1]);
    };

    return (
        <div className="ColorThemeSelect">
            <div className={ `select-wrapper${` ${theme}-bg`}` } onClick={ () => changeColorTheme() }>
                <div className="select-circle"></div>
            </div>
        </div>
    );
}

export default ColorThemeSelect;