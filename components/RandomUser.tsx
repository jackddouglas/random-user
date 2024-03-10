import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
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
  email: string;
  phone: string;
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
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <img src={user.picture.large} alt="Picture of random user" className="rounded-lg" />
                </div>
                <div>
                  <CardTitle>{user.name.first} {user.name.last}</CardTitle>
                  <CardDescription>{user.gender}, {user.dob.age}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent>
          <Card>
            <CardContent>
              {user.phone} <br /> {user.email}
            </CardContent>
          </Card>
        </HoverCardContent>
      </HoverCard>

    );
  }
}
