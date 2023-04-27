import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

export default function Survey() {
  let { questionNumber } = useParams()

  if (!questionNumber) {
    questionNumber = 1
  }

  let questionNumberInt = parseInt(questionNumber)
  let prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  let nextQuestionNumber = questionNumberInt + 1

  return (
    <div>
      <Header />
      <h1>Questionnaire 🧮</h1>
      <h2>Question { questionNumber }</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  );
}
