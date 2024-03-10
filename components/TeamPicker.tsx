import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

export default function TeamPicker({ team, setTeam }: { team: number, setTeam: Dispatch<SetStateAction<number>> }) {
  if (team === -1) {
    return (
      <>
        <Button style={{ marginRight: '1rem' }} onClick={() => { setTeam(0) }}>Team 1</Button>
        <Button onClick={() => { setTeam(1) }}>Team 2</Button>
      </>
    );
  } else if (team === 0) {
    return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Team One selected.</h4>
  } else {
    return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Team Two selected.</h4>
  }
}
