export interface Session {
  id: number;
  profileId: number;
  spotId: number;
  date: string;
  surfTimeMinutes: number;
  rideCount: number;
  challengeNote: string | null;
  thumbnailImageUrl: string | null;
  ratings: string[];
  createdAt: string;
  spot?: {
    name: string;
  };
}
