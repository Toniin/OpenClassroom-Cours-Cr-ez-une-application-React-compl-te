import styled from "styled-components";
import DarkLogo from "../assets/dark-logo.png";
import { StyledLink } from '../utils/style/Atoms'

const HomeLogo = styled.img`
  height: 70px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  return (
    <NavContainer>
      <HomeLogo src={DarkLogo} alt="Logo shiny" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Questionnaire
        </StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/results">Résultats</StyledLink>
      </nav>
    </NavContainer>
  );
}
