import { useContext } from "react";
import Header from "../components/Header";
import { SurveyContext } from "../utils/context";

export default function Results() {
  const { answers } = useContext(SurveyContext);
  console.log(answers);

  return (
    <div>
      <Header />
      <h1>Page de résultats</h1>
    </div>
  );
}
