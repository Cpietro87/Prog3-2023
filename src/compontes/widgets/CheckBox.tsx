import React,{ useState } from "react";

interface CheckBoxProps {
    label: string
};

const CheckBox: React.FC<CheckBoxProps> = ({label}) => {
    const [ isChecked, setIsChecked] = useState(false);

    const handleCheckBox = () => {
        setIsChecked(!isChecked);
    };

    return(
        <label>
            <input type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckBox} />

        {label}
        </label>
    );
};

export default CheckBox;