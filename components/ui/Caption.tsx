import { Separator } from "./separator";

const Caption = ({ caption }: { caption: string }) => {
  return (
    <>
      <p className="font-black text-2xl">{caption}</p>
      <Separator className="mt-2 mb-3 bg-cardBackground" />
    </>
  );
};

export default Caption;
