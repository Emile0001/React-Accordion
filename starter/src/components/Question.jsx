import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const Question = ({ id, title, info, activeId, toggleQuestion }) => {
    const isActive = id === activeId;
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button
                    className="question-btn"
                    onClick={() => {
                        toggleQuestion(id);
                    }}
                >
                    {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>

            {isActive && <p>{info}</p>}
        </article>
    );
};
