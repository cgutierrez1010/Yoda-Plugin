document.addEventListener("DOMContentLoaded", function () {
  const translateButton = document.getElementById("translateButton");
  const textToTranslate = document.getElementById("textToTranslate");
  const translatedText = document.getElementById("translatedText");

  translateButton.addEventListener("click", function () {
    const inputText = textToTranslate.value;
    translateToYodaSpeak(inputText)
      .then((result) => {
        translatedText.textContent = result.contents.translated;
      })
      .catch((error) => {
        console.error(error);
      });
  });

  async function translateToYodaSpeak(text) {
    try {
      const response = await fetch(
        `https://api.funtranslations.com/translate/yoda.json?text=${encodeURIComponent(text)}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
});
