export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Jerry Andrew F. Famanila. Built with React.</p>
        <p className="footer-note">BSIT student · Always learning and improving.</p>
      </div>
    </footer>
  );
}
