import "./css/ColorThemeSelect.css";
import { UserContext } from "./App.js";
import { useContext, useState } from "react";

const ColorThemeSelect = () => {
    const { theme, setTheme } = useContext(UserContext);

    // State manages where selector circle is positioned in color theme selector
    const [selectorPosition, setSelectorPosition] = useState(`flex-start`);

    const changeColorTheme = () => {
        const themes = [`orange`, `green`, `blue`], positions = [`flex-start`, `center`, `flex-end`];

        if (theme === `blue`) {
            setTheme(`orange`);
            setSelectorPosition(`left`);
            return;
        }
        setTheme(themes[themes.indexOf(theme) + 1]);
        setSelectorPosition(positions[positions.indexOf(selectorPosition) + 1]);
    };

    // Define the current selector styles
    const selectorStyle = {
        backgroundColor: `var(--${theme}-theme-color)`,
        justifyContent: selectorPosition,
    };

    return (
        <div className="ColorThemeSelect">
            <div className={ `select-wrapper` } onClick={ changeColorTheme } style={ selectorStyle }>
                <div className="select-circle"></div>
            </div>
        </div>
    );
}

export default ColorThemeSelect;