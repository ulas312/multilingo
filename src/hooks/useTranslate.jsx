import { useEffect, useState } from 'react';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState('');

  useEffect(() => {
    const handleTranslate = async (sourceText) => {
      try {
        const response = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo', // Ensure this is a valid model name
          messages: [
            {
              role: 'user',
              content: `You will be provided with a sentence. This sentence: 
              ${sourceText}. Your tasks are to:
              - Detect what language the sentence is in
              - Translate the sentence into ${selectedLanguage}
              Do not return anything other than the translated sentence.`,
            },
          ],
        });

        const data = response.choices[0].message.content;
        setTargetText(data);
      } catch (error) {
        console.error('Error translating text:', error);
        if (error.name === 'RateLimitError') {
          alert(
            'You have reached the API request limit. Please wait or check your OpenAI plan.'
          );
        } else {
          alert('An error occurred while translating. Please try again later.');
        }
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslate;
