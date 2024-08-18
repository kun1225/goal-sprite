export default function LayoutPlatform({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Platform Header</header>
      <main>{children}</main>
      <footer>Platform Footer</footer>
    </>
  );
}
