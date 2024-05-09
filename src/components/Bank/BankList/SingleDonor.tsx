import { Avatar, ListboxItem } from "@nextui-org/react";

export interface SingleDonorProps {
  donor_id: string;
  avatar: string;
  avatar_size: string;
  donor_name: string;
  bank_name: string;
  donor_amount: number;
  donor_date: Date;
}

export const SingleDonor = ({ donor_id, avatar, avatar_size, donor_name, bank_name, donor_amount, donor_date }: SingleDonorProps) => {
  return (
    <ListboxItem
      key={donor_id}
      startContent={
      <Avatar
        src={avatar} 
        alt="avatar"
        size={avatar_size as "md" | "sm" | "lg"}
      />}
      className="text-left border-2 px-2"
    >
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col w-full px-2">
          <span className="text-small w-1/2">{donor_name}</span>
          <span className="text-tiny w-1/2 text-default-400">{bank_name}</span>
        </div>
        <div className="flex flex-col w-full px-2">
          <span className="text-small w-1/2">&#36;{donor_amount}</span>
          <span className="text-tiny w-1/2 text-default-400">{donor_date.toLocaleDateString()}</span>
        </div>
      </div>
    </ListboxItem>
  );
};
