// Lightweight client-side error reporting hook.
// Logs runtime errors caught by the app's error boundary to the console
// so they show up in browser devtools / any log collector wired to console.error.

export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[error-boundary]", message, {
    route: window.location.pathname,
    ...(stack !== undefined && { stack }),
    ...context,
  });
}
