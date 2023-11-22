import NavBar from "./components/navBarComponent.jsx";
import HeroSection from "./components/heroSectionComponent.jsx";
import Footer from "./components/footerComponent.jsx";
import MainDetailList from "./components/mainDetailListComponent.jsx";
import HorizontalRule from "./components/horizontalRuleComponent.jsx";
import "./App.styles.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <HorizontalRule />
      <MainDetailList />
      <Footer />
    </div>
  );
}

export default App;
