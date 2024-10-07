import { Questions } from "./components/Questions";
import questions from "./data";

const App = () => {
    return (
        <main>
            <section>
                <Questions questions={questions} />
            </section>
        </main>
    );
};
export default App;
