import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownFile({ src }) {
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

  if (state.status === "loading") return <p className="muted">Loading…</p>;
  if (state.status === "error") {
    return <p className="muted">This file could not be loaded. Open the download link instead.</p>;
  }

  return (
    <div className="prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{state.text}</ReactMarkdown>
    </div>
  );
}
