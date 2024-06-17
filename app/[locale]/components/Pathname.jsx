"use client"
import { usePathname } from 'next/navigation';

export default function Pathname(props) {
  const {className} = props;
  const pathname = usePathname();
  return (
    <div className={className}>{pathname}</div>
  );
}