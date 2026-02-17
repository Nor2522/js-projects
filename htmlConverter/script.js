// dom
const markdownInput = document.getElementById("markdown-input");
const preview = document.getElementById("preview");
const htmlOutput = document.getElementById("html-output");
markdownInput.addEventListener("input", () => {
  convertMarkdown();
  const result = convertMarkdown();
  preview.innerHTML = result;
  htmlOutput.textContent = result;
});

function convertMarkdown() {
  let html = markdownInput.value;
  html = html.replace(/^###\s+(.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^##\s+(.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^#\s+(.*)$/gm, "<h1>$1</h1>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");

  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/_(.*?)_/g, "<em>$1</em>");

  html = html.replace(/^\s*>\s+(.*)$/gm, "<blockquote>$1</blockquote>");
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  return html;
}
