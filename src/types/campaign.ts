export type FundRaiser = {
  name: string;
  image: string;
  description: string;
};

export type Campaign = {
  id: number;
  title: string;
  category: string;
  comment: string;
  image: string;
  video: string;
  fundraiser: FundRaiser;
  goal: number;
  raised: number;
  createdDate: string;
};
