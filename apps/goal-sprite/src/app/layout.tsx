import './global.css';

export const metadata = {
  title: 'Goal Sprite',
  description: 'Goal Sprite',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
