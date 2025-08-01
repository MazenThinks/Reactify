export default function Tabs({ button, children, ...props }) {
  return (
    <>
      <menu>{button}</menu>
      {children}
    </>
  );
}
