import React, { useEffect, useState } from 'react';
import './category-item.css';

export const CategoryItem = ({ id, category }) => {
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        if (isChecked) {
            console.log("Hello, World!");
        }
    }, [isChecked]);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    }

    return (
        <div className="checkbox-wrapper-46" style={{
            opacity: isChecked ? 1 : 0.8,
            backgroundSize: isChecked ? "150% 100%" : "250% 100%",
        }}>
            <input
                className="inp-cbx"
                id={id}
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            <label className="cbx" htmlFor={id}>
                <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <span>{category}</span>
            </label>
        </div>
    );
};