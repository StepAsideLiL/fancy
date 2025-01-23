import DesignWithTheseTech from "./_parts/DesignWithTheseTech";
import Hero from "./_parts/Hero";
import ProfileAndPortfolio from "./_parts/ProfileAndPortfolio";
import TechnologiesDescription from "./_parts/TechnologiesDescription";
import WhyUseTheseTechnologies from "./_parts/WhyUseTheseTechnologies";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />

      <TechnologiesDescription />

      <DesignWithTheseTech />

      <WhyUseTheseTechnologies />

      <ProfileAndPortfolio />

      {/* ToDo: Design 3 */}

      {/* ToDo: Design 4 */}

      {/* ToDo: Design 5 */}
    </main>
  );
}
