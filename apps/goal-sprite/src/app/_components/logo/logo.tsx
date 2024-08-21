import Link from 'next/link';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className={`logo ${className}`}
    >
      Goal Sprite
    </Link>
  );
}
