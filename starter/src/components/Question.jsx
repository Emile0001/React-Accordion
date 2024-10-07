import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const Question = ({ title, info }) => {
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
            </header>

            <p>{info}</p>
        </article>
    );
};
