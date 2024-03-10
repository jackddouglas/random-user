"use client"

import { useState } from "react"
import TeamPicker from "@/components/TeamPicker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import RandomUser from "@/components/RandomUser";

const team1 = {
  1: RandomUser,
  2: RandomUser,
  3: RandomUser
}

const team2 = {
  1: RandomUser,
  2: RandomUser,
  3: RandomUser
}

export default function Home() {
  const [team, setTeam] = useState(-1);
  const win: number = Math.floor(Math.random() * 2)

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Random User Fight</h1>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Which team will win???</h2>

      <TeamPicker team={team} setTeam={setTeam}></TeamPicker>

      <Tabs defaultValue="team1" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="team1">Team 1</TabsTrigger>
          <TabsTrigger value="team2">Team 2</TabsTrigger>
        </TabsList>
        <TabsContent value="team1">
          {team1[1]()}
          {team1[2]()}
          {team1[3]()}
        </TabsContent>
        <TabsContent value="team2">
          {team2[1]()}
          {team2[2]()}
          {team2[3]()}
        </TabsContent>
      </Tabs>
      {team !== -1 && (team === win ?
        (<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">You&apos;re right! Team {team + 1} won!</h2>) :
        (<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Bad</h2>))}
    </>
  );
}
