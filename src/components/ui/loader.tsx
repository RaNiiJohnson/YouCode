import clsx from "clsx";
import { Loader2 } from "lucide-react";

export const Loader = ({
  size,
  classname,
}: {
  size?: number;
  classname?: string;
}) => {
  return <Loader2 className={clsx("animate-spin", classname)} size={size} />;
};
