import DesignWithTheseTech from "./_parts/DesignWithTheseTech";
import Hero from "./_parts/Hero";
import TechnologiesDescription from "./_parts/TechnologiesDescription";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />

      <TechnologiesDescription />

      <DesignWithTheseTech />
    </main>
  );
}
