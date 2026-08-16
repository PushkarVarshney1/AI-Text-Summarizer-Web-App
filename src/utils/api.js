export async function summarizeText(text) {
  const response = await fetch("/api/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || `Request failed (${response.status})`);
  }

  const data = await response.json();
  if (!data.summary && (!data.bullets || data.bullets.length === 0)) {
    throw new Error("The model returned an empty result. Try again.");
  }
  return data;
}
