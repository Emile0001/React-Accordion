import { Questions } from "./components/Questions";
import data from "./data";
import { useState } from "react";

const App = () => {
    const [questions, setQuestions] = useState(data);
    const [activeId, setActiveId] = useState(null);

    const toggleQuestion = (id) => {
        const newActiveId = id === activeId ? null : id;
        setActiveId(newActiveId);
    };
    return (
        <main>
            <Questions
                questions={questions}
                toggleQuestion={toggleQuestion}
                activeId={activeId}
            />
        </main>
    );
};
export default App;
