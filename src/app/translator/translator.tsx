import React from 'react';
import { useState } from 'react';
import TextArea from '../../components/Inputs/TextArea';
import LanguageSelector from '../../components/Inputs/LanguageSelector';
import useTranslate from '../../hooks/useTranslate';

const Translator = () => {
  const [sourceText, setSourceText] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Latvian');
  const [languages] = useState<string[]>([
    'English',
    'Turkish',
    'Latvian',
    'French',
    'Spanish',
    'German',
    'Russian',
    'Chinese',
    'Japanese',
  ]);

  const targetText = useTranslate(sourceText, selectedLanguage);

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center'>
      <h1 className='text-4xl font-bold text-blue-600 mb-6'>
        MultiLingo Translator
      </h1>
      <p className='text-lg text-gray-700 mb-6'>
        Enter text to translate into your desired language.
      </p>

      <div className='w-full max-w-md p-6 bg-white shadow-md rounded-lg'>
        <TextArea
          id='source-text'
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder='Enter text to translate'
        />

        <LanguageSelector
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          languages={languages}
        />

        <TextArea
          id='target-text'
          value={targetText}
          placeholder='Translation will appear here'
          readOnly
        />
      </div>
    </div>
  );
};

export default Translator;
