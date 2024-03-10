import { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";

interface User {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  dob: {
    age: number;
  };
  picture: {
    large: string;
  };
}

export default function RandomUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data.results[0]);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  } else if (user) {
    return (
      <HoverCard>
        <HoverCardTrigger>
          <Card>
            <CardHeader>
              <CardTitle>{user.name.first} {user.name.last}</CardTitle>
              <CardDescription>{user.gender}, {user.dob.age}</CardDescription>
            </CardHeader>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent>
          <img src={user.picture.large} alt="Picture of random user" />
        </HoverCardContent>
      </HoverCard>

    );
  }
}
