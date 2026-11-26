import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} · 23IT304 DBMS`
      : "23IT304 Database Management Systems";
  }, [title]);
}
