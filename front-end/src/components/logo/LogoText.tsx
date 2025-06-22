interface LogoTextProps {
  className?: string;
}

export default function LogoText({ className }: LogoTextProps) {
  return <img src="/logo-text.svg" className={className} />;
}
