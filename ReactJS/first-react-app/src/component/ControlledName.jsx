import { useState } from "react";
import ChangeName from "./ChangeName";

const ControlledName = () => {
  const [name, setName] = useState("KIET");
  const [sname, setSName] = useState("MCA");
  return (
    <div>
      <ChangeName name={name} onUpdate={() => setName("KIET MCA")} />
      <ChangeName name={sname} onUpdate={() => setSName("MCA KIeT")} />
    </div>
  );
};

export default ControlledName;
