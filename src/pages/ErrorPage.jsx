import Header from "../components/Header";
import styled from "styled-components";
import colors from "../utils/style/colors";
import errorSVG from "../assets/error404.svg";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
  margin: 30px;
`;

const ErrorTitle = styled.h1`
  font-weight: 300;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`;

const Illustration = styled.img`
  max-width: 800px;
`;

export default function ErrorPage() {
  return (
    <div>
      <Header />
      <ErrorWrapper>
        <ErrorTitle>Oups...</ErrorTitle>
        <Illustration src={errorSVG} />
        <ErrorSubtitle>
          Il semblerait que la page que vous cherchez n’existe pas
        </ErrorSubtitle>
      </ErrorWrapper>
    </div>
  );
}
