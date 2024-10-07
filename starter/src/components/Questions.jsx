import { Question } from "./Question";

export const Questions = ({ questions, activeId, toggleQuestion }) => {
    return (
        <section className="container">
            <h1>Questions</h1>
            {questions.map((question) => {
                return (
                    <Question
                        key={question.id}
                        {...question}
                        toggleQuestion={toggleQuestion}
                        activeId={activeId}
                    />
                );
            })}
        </section>
    );
};
