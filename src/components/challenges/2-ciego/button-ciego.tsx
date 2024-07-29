"use client";

import { Button } from "@/components/ui/button";
import { useChallenges } from "@/stores/challenges-store";
import { useRouter } from "next/navigation";

export const ButtonCiego = () => {
  const { completeChallenge } = useChallenges();
  const router = useRouter();

  const handleClick = () => {
    completeChallenge(2);
    router.push("/");
  };

  return (
    <Button variant={"default"} onClick={handleClick}>
      Aquí está
    </Button>
  );
};
