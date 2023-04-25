import * as React from "react";
import { Link } from 'react-router-dom'
 
export default function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="survey">Questionnaire</Link>
            <Link to="results">Resultats</Link>
            <Link to="freelances">Freelances</Link>
            <Link to="test-error">Test erreur</Link>
        </nav>
    )
}
