export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-center">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Jessica Wong. Built with React &
        Tailwind CSS.
      </p>
    </footer>
  );
}
