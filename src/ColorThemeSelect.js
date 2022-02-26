import "./ColorThemeSelect.css";
import { UserContext } from "./App.js";
import { useContext } from "react";

const ColorThemeSelect = () => {
    const { theme } = useContext(UserContext);

    return (
        <div className="ColorThemeSelect">
            <div className={ `select-wrapper${` ${theme}-bg`}` }>
                <div className="select-circle"></div>
            </div>
        </div>
    );
}

export default ColorThemeSelect;