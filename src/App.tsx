import { MemoryRouter } from "react-router-dom";
import { RootPage } from "./Pages/RootPage";
import { StoreProvider } from "@context/StoreContext";
import { useState } from "react";
import { SmartSwitch } from "@components/SmartSwitch";

import { Icon } from "@components/Icon";
import { IconButton } from "@components/Button";
import "./App.css";

function App() {
  const [isSwitchVisible, setSwitchVisibility] = useState(true);
  const [animationType, setAnimation] = useState("");

  console.log("==changed===");

  const toggleAnimation = () => {
    console.log("==animation toggled===");
    setAnimation((val) =>
      val === "animate_in" ? "animate_out" : "animate_in"
    );
  };

  const onAnimationEnd = (e: { animationName: string }) => {
    if (e.animationName === "slideOut") {
      setSwitchVisibility(true);
    } else if (e.animationName === "slideIn") {
      setSwitchVisibility(false);
    }
  };

  console.log("==state==", { isSwitchVisible, animationType });

  if (isSwitchVisible) {
    return (
      <SmartSwitch
        onClick={() => {
          setSwitchVisibility(false);
          toggleAnimation();
        }}
      />
    );
  }

  return (
    <div className="app">
      <div
        onAnimationEnd={onAnimationEnd}
        className={`mobile_container ${animationType}`}
      >
        <IconButton
          onClick={toggleAnimation}
          className="close"
          variant="primary"
        >
          <Icon name="fa-solid fa-xmark" />
        </IconButton>
        <MemoryRouter>
          <StoreProvider>
            <RootPage />
          </StoreProvider>
        </MemoryRouter>
      </div>
    </div>
  );
}

export default App;
