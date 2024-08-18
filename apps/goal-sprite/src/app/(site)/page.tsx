import { Button } from '@goal-sprite/shadcn-ui';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="grid place-content-center min-h-[calc(100svh_-_var(--h-header))]">
      <h1 className="text-5xl">Hello Goal Sprite</h1>
      <Button className="w-fit mx-auto mt-4">
        <Link href="/auth">Try It Free</Link>
      </Button>
    </div>
  );
}
