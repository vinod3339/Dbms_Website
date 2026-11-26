import { useEffect, useState } from "react";

export default function SqlFile({ src }) {
  const [state, setState] = useState({ status: "loading", text: "" });

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading", text: "" });

    fetch(src, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.text();
      })
      .then((text) => setState({ status: "ready", text }))
      .catch((error) => {
        if (error.name === "AbortError") return;
        setState({ status: "error", text: "" });
      });

    return () => controller.abort();
  }, [src]);

  if (state.status === "loading") return <p className="muted">Loading script…</p>;
  if (state.status === "error") return <p className="muted">This script could not be loaded.</p>;

  return (
    <pre className="sql">
      <code>{state.text}</code>
    </pre>
  );
}
