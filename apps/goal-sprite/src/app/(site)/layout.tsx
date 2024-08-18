import SiteHeader from '../_components/header';

export default function LayoutSite({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
