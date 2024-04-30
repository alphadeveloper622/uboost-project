type FundRaiser = {
  name: string;
  image: string;
  designation: string;
};

export type Campaign = {
  id: number;
  title: string;
  category: string;
  paragraph: string;
  image: string;
  video: string;
  fundraiser: FundRaiser;
  goal: number;
  raised: number;
  createdDate: string;
};
