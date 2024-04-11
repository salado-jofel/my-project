import Link from "next/link";
import React from "react";

export default function SidebarLinks({
  title,
  icon,
  link,
}: {
  title: string;
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="flex  border-l-5  gap-3 h-14 items-center rounded-[0.4rem] cursor-pointer hover:border-blue-500 hover:text-blue-500 text-gray-400 group  duration-200">
        <div className="pl-8">{icon}</div>
        {title}
      </div>
    </Link>
  );
}
