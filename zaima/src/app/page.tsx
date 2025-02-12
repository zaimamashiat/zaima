import Navbar from "./component/navbar";
import PortfolioCard from "./component/about";
import ProjectCard from "./component/project";
import Footer from "./component/footer";
import FindMeOn from "./component/socials";

export default function Home() {
  return (
    <>
      <Navbar />
      <PortfolioCard/>
      <ProjectCard/>
      <FindMeOn/>
      <Footer/>
    </>
  );
}
