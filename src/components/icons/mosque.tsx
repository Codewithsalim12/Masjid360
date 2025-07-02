import React from 'react';

export function Mosque(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18.877 8.527c.42-.183.562-.71.298-1.086l-5.11-7.155a1.002 1.002 0 0 0-1.48-.194l-5.32 2.66c-.53.265-.725.933-.402 1.45l4.332 6.932" />
      <path d="M4 11h16" />
      <path d="M4 18h16" />
      <path d="M5 11v7" />
      <path d="M9 11v7" />
      <path d="M15 11v7" />
      <path d="M19 11v7" />
    </svg>
  );
}
