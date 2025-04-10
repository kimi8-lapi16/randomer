import React, { useState } from "react";
import Lottery from "./Lottery";
import Member from "./Member";

const options = ['片手剣', '双剣', '太刀', '大剣']
export default function RandomSelector() {
  const [members, setMembers] = useState<string[]>([]);
  const callback = (value: string) => {
    setMembers((prev) => [...prev, value])
  }

  return (
    <section>
      <Member members={members} callback={callback} />
      <Lottery members={members} options={options} />
    </section>
  );
}


