const buttons = document.querySelectorAll("button[data-copy]");

for (const button of buttons) {
  const label = button.textContent;

  button.addEventListener("click", async () => {
    const text = button.dataset.copy ?? "";

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }

    button.dataset.copied = "true";
    button.textContent = button.closest("[lang='zh-CN']") ? "已复制" : "Copied";
    window.setTimeout(() => {
      delete button.dataset.copied;
      button.textContent = label;
    }, 1600);
  });
}
