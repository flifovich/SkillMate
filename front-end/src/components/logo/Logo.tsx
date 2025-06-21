interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return <img src="/logo.svg" className={className} />;
}
