import Layout from "./components/Layout";
import QuizContent from "./components/QuizContent";
import { QuizProvider } from "./context/QuizContext";

export default function App() {
    return (
        <QuizProvider>
            <Layout>
                <QuizContent />
            </Layout>
        </QuizProvider>
    );
}
