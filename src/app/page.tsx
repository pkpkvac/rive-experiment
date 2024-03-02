"use client";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useState } from "react";

const BUILDING_LOWER = "machine2";
const BUILDING_LOWER_INPUT = "Hover / Select Lower";

export default function HomePage() {
  const [lowerBuildingActive, setLowerBuildingActive] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: "/mixing_animations.riv",
    // stateMachines: ["machine1", BUILDING_LOWER],
    stateMachines: ["machine1", BUILDING_LOWER],
    autoplay: true,
  });

  const machine2 = useStateMachineInput(
    rive,
    BUILDING_LOWER,
    BUILDING_LOWER_INPUT,
  );

  function toggleLowerBuilding() {
    setLowerBuildingActive(() => !lowerBuildingActive);

    if (
      machine2?.value === true ||
      (machine2?.value === false && machine2.name === BUILDING_LOWER_INPUT)
    ) {
      console.log("LOWER BUILDING ACTIVE", lowerBuildingActive);
      machine2.value = !lowerBuildingActive;
    }
  }

  return (
    <div className="mx-auto h-full w-full bg-green-400">
      <RiveComponent
        style={{ margin: "auto", width: "1000px", height: "800px" }}
        // onMouseEnter={() => rive && rive.play()}
        // onMouseLeave={() => rive && rive.pause()}
      />
      <div className="flex justify-center gap-10 self-center">
        <div className="border px-10 py-10"> Building Top</div>
        <div
          className="border px-10 py-10"
          onClick={() => toggleLowerBuilding()}
        >
          {" "}
          Building Bottom
        </div>
      </div>
    </div>
  );
}
