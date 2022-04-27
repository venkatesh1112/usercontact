import { useState } from "react";
import "./Tabs.css";
import ContactCard from "./ContactCard";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="block__tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          A
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          B
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          C
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          D
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          E
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          F
        </button>
        <button
          className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(7)}
        >
          G
        </button>
        <button
          className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(8)}
        >
          H
        </button>
        <button
          className={toggleState === 9 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(9)}
        >
          I
        </button>
        <button
          className={toggleState === 10 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(10)}
        >
          J
        </button>
        <button
          className={toggleState === 11 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(11)}
        >
          K
        </button>
        <button
          className={toggleState === 12 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(12)}
        >
          L
        </button>
        <button
          className={toggleState === 13 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(13)}
        >
          M
        </button>
        <button
          className={toggleState === 14 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(14)}
        >
          N
        </button>
        <button
          className={toggleState === 15 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(15)}
        >
          O
        </button>
        <button
          className={toggleState === 16 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(16)}
        >
          P
        </button>
        <button
          className={toggleState === 17 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(17)}
        >
          Q
        </button>
        <button
          className={toggleState === 18 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(18)}
        >
          R
        </button>
        <button
          className={toggleState === 19 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(19)}
        >
          S
        </button>
        <button
          className={toggleState === 20 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(20)}
        >
          T
        </button>
        <button
          className={toggleState === 21 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(21)}
        >
          U
        </button>
        <button
          className={toggleState === 22 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(22)}
        >
          V
        </button>
        <button
          className={toggleState === 23 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(23)}
        >
          W
        </button>
        <button
          className={toggleState === 24 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(24)}
        >
          X
        </button>
        <button
          className={toggleState === 25 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(25)}
        >
          Y
        </button>
        <button
          className={toggleState === 26 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(26)}
        >
          Z
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"A"}></ContactCard>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"B"}></ContactCard>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"C"}></ContactCard>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"D"}></ContactCard>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"E"}></ContactCard>
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"F"}></ContactCard>
        </div>
        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"G"}></ContactCard>
        </div>
        <div
          className={toggleState === 8 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"H"}></ContactCard>
        </div>
        <div
          className={toggleState === 9 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"I"}></ContactCard>
        </div>
        <div
          className={toggleState === 10 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"J"}></ContactCard>
        </div>
        <div
          className={toggleState === 11 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"K"}></ContactCard>
        </div>
        <div
          className={toggleState === 12 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"L"}></ContactCard>
        </div>
        <div
          className={toggleState === 13 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"M"}></ContactCard>
        </div>
        <div
          className={toggleState === 14 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"N"}></ContactCard>
        </div>
        <div
          className={toggleState === 15 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"O"}></ContactCard>
        </div>
        <div
          className={toggleState === 16 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"P"}></ContactCard>
        </div>
        <div
          className={toggleState === 17 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"Q"}></ContactCard>
        </div>
        <div
          className={toggleState === 18 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"R"}></ContactCard>
        </div>
        <div
          className={toggleState === 19 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"S"}></ContactCard>
        </div>
        <div
          className={toggleState === 20 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"T"}></ContactCard>
        </div>
        <div
          className={toggleState === 21 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"U"}></ContactCard>
        </div>
        <div
          className={toggleState === 22 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"V"}></ContactCard>
        </div>
        <div
          className={toggleState === 23 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"W"}></ContactCard>
        </div>
        <div
          className={toggleState === 24 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"X"}></ContactCard>
        </div>
        <div
          className={toggleState === 25 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"Y"}></ContactCard>
        </div>
        <div
          className={toggleState === 26 ? "content  active-content" : "content"}
        >
          <ContactCard letter={"Z"}></ContactCard>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
