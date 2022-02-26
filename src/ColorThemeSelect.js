import "./ColorThemeSelect.css";

const ColorThemeSelect = () => {
    return (
        <div className="ColorThemeSelect">
            <div className={ `select-wrapper${" orange-bg"}` }>
                <div className="select-circle"></div>
            </div>
        </div>
    );
}

export default ColorThemeSelect;