type FundRaiser = {
  name: string;
  image: string;
  designation: string;
};

export type Campaign = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  video: string;
  fundraiser: FundRaiser;
  tags: string[];
  goal: number;
  raised: number;
  createdDate: string;
};
