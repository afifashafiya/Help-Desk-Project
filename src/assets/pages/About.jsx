import Abhead from "../../components/Abhead";
import Abjt from "../../components/Abjt";
import Abexplore from "../../components/Abexplore";
import Abcon from "../../components/Abcon";
function About() {
  return (
    <section className="py-5">
      <div className="container">
        {/* header */}
        <Abhead />
        {/* Journey and Tech Stack */}
        <Abjt />
        {/* Explore Project Section */}
        <Abexplore />
        {/* Let's Connect Section */}
        <Abcon />
      </div>
    </section>
  );
}
export default About;
