import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Challenge {
  id: number;
  title: string;
  completed: boolean;
  link: string;
}

type ChallengesStore = {
  challenges: Challenge[];
  nextChallenge: Challenge;
  setNextChallenge: (challengeId: number) => void;
  completeChallenge: (challengeId: number) => void;
  resetChallenges: () => void;
  isChallengeCompleted: (challengeId: number) => boolean;
};

export const useChallenges = create(
  persist<ChallengesStore>(
    (set, get) => ({
      challenges: [
        {
          id: 1,
          title: "Intro",
          completed: false,
          link: "/challenges/intro#1",
        },
        {
          id: 2,
          title: "Challenge 2",
          completed: false,
          link: "/challenges/2-ciego#1",
        },
        {
          id: 3,
          title: "Challenge 3",
          completed: false,
          link: "/challenges/3-quiz#1",
        },
        {
          id: 4,
          title: "Challenge 4",
          completed: false,
          link: "/challenges/4-shi#1",
        },
      ],
      nextChallenge: {
        id: 1,
        title: "Intro",
        completed: false,
        link: "/challenges/intro#1",
      },

      setNextChallenge: (challengeId) => {
        set((state) => ({
          nextChallenge: state.challenges.find(
            (challenge) => challenge.id === challengeId
          )!,
        }));
      },

      completeChallenge: (challengeId) => {
        set((state) => ({
          challenges: state.challenges.map((challenge) =>
            challenge.id === challengeId
              ? { ...challenge, completed: true }
              : challenge
          ),
          nextChallenge: state.challenges.find(
            (challenge) => challenge.id === challengeId + 1
          ),
        }));
      },

      resetChallenges: () => {
        set((state) => ({
          challenges: state.challenges.map((challenge) => ({
            ...challenge,
            completed: false,
          })),
        }));
      },

      isChallengeCompleted: (challengeId) => {
        const challenge = get().challenges.find((c) => c.id === challengeId);
        return challenge ? challenge.completed : false;
      },
    }),
    {
      name: "challenges",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
