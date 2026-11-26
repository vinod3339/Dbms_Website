import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { course } from "../data/course";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/schedule", label: "Schedule", match: ["/schedule", "/lectures", "/study"] },
  { to: "/assignments", label: "Assignments", match: ["/assignments", "/laboratory", "/projects"] },
  { to: "/info", label: "Course Info", match: ["/info", "/syllabus", "/announcements"] },
];

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="course-navbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand" end>
          {course.code}: {course.title}
        </NavLink>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Course">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => {
                const matched =
                  isActive || link.match?.some((prefix) => pathname.startsWith(prefix));
                return matched ? "active" : undefined;
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
