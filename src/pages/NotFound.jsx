import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <div className="page narrow">
      <h1>Page not found</h1>
      <p>That address is not part of the 23IT304 portal.</p>
      <p>
        <Link to="/">Return to the overview</Link>
      </p>
    </div>
  );
}
