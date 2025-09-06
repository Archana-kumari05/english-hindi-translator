async function translateText() {
  let englishText = document.getElementById("englishText").value;

  if (!englishText) {
    alert("Please enter some text!");
    return;
  }

  // LibreTranslate API
  let response = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: englishText,
      source: "en",
      target: "hi",
      format: "text"
    }),
    headers: { "Content-Type": "application/json" }
  });

  let data = await response.json();
  document.getElementById("hindiText").innerText = data.translatedText;
}