import { Question } from "./Question";

export const Questions = ({ questions }) => {
    return (
        <article>
            <h1>Questions</h1>
            {questions.map((question) => {
                return <Question key={question.id} {...question} />;
            })}
        </article>
    );
};
