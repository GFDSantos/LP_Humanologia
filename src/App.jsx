// ======================================================
// APP PRINCIPAL
// Landing Page - Humanologia Brasileira
// ======================================================

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BlocoAcolhimento from "./components/BlocoAcolhimento/BlocoAcolhimento";
import PrimeiraLeitura from "./components/PrimeiraLeitura/PrimeiraLeitura";
import ComoFunciona from "./components/ComoFunciona/ComoFunciona";
import OndeJornada from "./components/OndeJornada/OndeJornada";
import Travessia from "./components/Travessia/Travessia";
import Filosofia from "./components/Filosofia/Filosofia";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import CTAFinal from "./components/CTAFinal/CTAFinal";
import JornadaHumanologia from "./components/JornadaHumanologia/JornadaHumanologia";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <BlocoAcolhimento />
      <PrimeiraLeitura />
      <ComoFunciona />
      <OndeJornada />
      <Travessia />
      <Filosofia />
      <QuemSomos />
      <Depoimentos />
      <JornadaHumanologia />
      <CTAFinal />
      <Footer />
    </>
  );
}

export default App;