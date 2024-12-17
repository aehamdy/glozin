function FooterCopyright() {
  const d = new Date();
  const year = d.getFullYear();
  return <p>&copy; {year} VogueCart store. All rights reserved.</p>;
}
export default FooterCopyright;
