import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

export default function TeamPicker({ team, setTeam }: { team: string, setTeam: Dispatch<SetStateAction<string>> }) {
  if (team === "") {
    return (
      <>
        <Button style={{ marginRight: '1rem' }} onClick={() => { setTeam("one") }}>Team 1</Button>
        <Button onClick={() => { setTeam("two") }}>Team 2</Button>
      </>
    );
  } else if (team === "one") {
    return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Team One selected.</h4>
  } else {
    return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Team Two selected.</h4>
  }
}
