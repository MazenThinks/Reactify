import CoreConcept from "./CoreConcepts/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        <CoreConcept
          title={CORE_CONCEPTS[0].title}
          desc={CORE_CONCEPTS[0].description}
          img={CORE_CONCEPTS[0].image}
        />
        <CoreConcept
          title={CORE_CONCEPTS[1].title}
          desc={CORE_CONCEPTS[1].description}
          img={CORE_CONCEPTS[1].image}
        />
        <CoreConcept
          title={CORE_CONCEPTS[2].title}
          desc={CORE_CONCEPTS[2].description}
          img={CORE_CONCEPTS[2].image}
        />
        <CoreConcept
          title={CORE_CONCEPTS[3].title}
          desc={CORE_CONCEPTS[3].description}
          img={CORE_CONCEPTS[3].image}
        />
      </ul>
    </section>
  );
}
