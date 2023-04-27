import Header from "../components/Header";
import Card from "../components/Card";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    // picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    // picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    // picture: DefaultPicture,
  },
];

export default function Freelances() {
  return (
    <div>
      <Header />
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  );
}
