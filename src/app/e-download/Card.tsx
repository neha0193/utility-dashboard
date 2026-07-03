import { ReactNode } from "react";

type CardProps = {
  url: string;
  text: string;
  children: ReactNode;
};

export default function Card({ url, text, children }: CardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 text-center">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-2 text-gray-200 hover:text-white transition-colors"
      >
        <div className="text-4xl">{children}</div>
        <h3 className="text-sm md:text-base font-medium">{text}</h3>
      </a>
    </div>
  );
}