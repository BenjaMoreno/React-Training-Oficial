import axios from 'axios';

const Translate = async (text, targetLanguage) => {
  const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
  const url = 'https://translation.googleapis.com/language/translate/v2';

  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLanguage,
      key: apiKey,
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error al traducir el texto:', error);
    return text; // En caso de error, devolver el texto original
  }
};

export default Translate;
