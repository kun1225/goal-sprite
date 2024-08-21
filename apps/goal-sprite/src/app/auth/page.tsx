'use client';

import { useState } from 'react';
// Components
import Link from 'next/link';
import LoginForm from './_components/login-form';
import RegisterForm from './_components/register-form';
import { Button } from '@goal-sprite/shadcn-ui';

export default function Page() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="flex flex-col justify-center mx-auto gap-4 min-h-screen max-w-[800px] p-edge">
      <Link href="/" className="text-sm">
        Back to homepage
      </Link>

      {isLoginForm ? <LoginForm /> : <RegisterForm />}

      <Button
        className="self-start"
        variant="link-ghost"
        onClick={() => setIsLoginForm(!isLoginForm)}
      >
        {isLoginForm ? "Don't have an account?" : 'Have a account?'}
      </Button>
    </div>
  );
}
