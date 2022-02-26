import "./ColorThemeSelect.css";
import { UserContext } from "./App.js";
import { useContext } from "react";

const ColorThemeSelect = () => {
    const { theme, setTheme, selectorPosition, setSelectorPosition } = useContext(UserContext);

    const changeColorTheme = () => {
        const themes = [`orange`, `green`, `blue`], positions = [`left`, `center`, `right`];

        if (theme === `blue`) {
            setTheme(`orange`);
            setSelectorPosition(`left`);
            return;
        }
        setTheme(themes[themes.indexOf(theme) + 1]);
        setSelectorPosition(positions[positions.indexOf(selectorPosition) + 1]);
    };

    return (
        <div className="ColorThemeSelect">
            <div className={ `select-wrapper ${theme}-bg ${selectorPosition}` } onClick={ changeColorTheme }>
                <div className="select-circle"></div>
            </div>
        </div>
    );
}

export default ColorThemeSelect;