"use client"

import { useState } from "react"
import TeamPicker from "@/components/TeamPicker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import RandomUser from "@/components/RandomUser";

export default function Home() {
  const [team, setTeam] = useState("");
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Random User Fight</h1>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Which team will win???</h2>

      <TeamPicker team={team} setTeam={setTeam}></TeamPicker>

      <Tabs defaultValue="team1" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="team1">Team 1</TabsTrigger>
          <TabsTrigger value="team2">Team 2</TabsTrigger>
        </TabsList>
        <TabsContent value="team1">
          <RandomUser />
          <RandomUser />
          <RandomUser />
        </TabsContent>
        <TabsContent value="team2">
          <RandomUser />
          <RandomUser />
          <RandomUser />
        </TabsContent>
      </Tabs>
    </>
  );
}
