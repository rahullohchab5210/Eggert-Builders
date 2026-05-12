import Address from "@/components/Address";
import Carpanters from "@/components/Carpanters";
import Chicagolands from "@/components/Chicagolands";
import Experience from "@/components/Experience";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Status from "@/components/Status";

export default function Home() {
  return (
    <>
      <Hero />
      <Status />
      <Chicagolands />
      <Carpanters />
      <Services />
      <Projects />
      <HowWorks />
      <Experience />
      <Address />
      <Form />
    </>
  );
}
