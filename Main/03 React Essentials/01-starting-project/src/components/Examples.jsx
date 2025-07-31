import { useState } from "react";
import Example from "./Examples/Example.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function onSelect(selected) {
    setSelectedTopic(selected);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        button={
          <>
            <Example
              onSelect={() => onSelect("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </Example>
            <Example
              onSelect={() => onSelect("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </Example>
            <Example
              onSelect={() => onSelect("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </Example>
            <Example
              onSelect={() => onSelect("state")}
              isSelected={selectedTopic === "state"}
            >
              State
            </Example>
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please select a Topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
