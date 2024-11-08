// src/app/translator/page.tsx

'use client';

import React, { useState, ChangeEvent } from 'react';

import Image from 'next/image';
import TextArea from '../../components/Inputs/TextArea';
import SpeechRecognitionComponent from '../../components/SpeechRecognition/SpeechRecognition';
import { rtfToText } from '../../utils/rtfToText';
import FileUpload from '../../components/Inputs/FileUpload';
import LinkPaste from '../../components/Inputs/LinkPaste';
import useTranslate from '../../hooks/useTranslate';
import LanguageSelector from '../../components/Inputs/LanguageSelector';
import SvgDecorations from '../../components/SvgDecorations';
import CategoryLinks from '../../components/CategoryLinks';

import {
  IconCopy,
  IconStar,
  IconThumbDown,
  IconThumbUp,
  IconVolume,
} from '@tabler/icons-react';

export default function Home() {
  const [sourceText, setSourceText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [favourite, setFavourite] = useState<boolean>(false);
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
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Latvian');

  const targetText = useTranslate(sourceText, selectedLanguage);

  const handleAudioPlayback = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = async (e: ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    try {
      const response = await fetch(link);
      const data = await response.text();
      setSourceText(data);
    } catch (error) {
      console.error('Error fetching link content:', error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    // Implement like logic
  };

  const handleDislike = () => {};

  const handleFavourite = () => {
    setFavourite(!favourite);
    if (!favourite) {
      localStorage.setItem('favouriteTranslation', targetText);
    } else {
      localStorage.removeItem('favouriteTranslation');
    }
  };

  return (
    <div>
      <div className='w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <div className='relative overflow-hidden h-screen'>
          <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-6xl font-bold text-neutral-200'>
                Multi<span className='text-[#2562EB]'>Lingo</span>
              </h1>
              <p className='mt-3 text-neutral-400'>
                MultiLingo: Bridging Voices, Uniting Worlds One Conversation at
                a Time.
              </p>
              <div className='relative mt-7 sm:mt-12 mx-auto max-w-3xl'>
                <div className='grid gap-4 md:grid-cols-2 grid-cols-1'>
                  <div className='relative z-10 p-3 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20'>
                    <TextArea
                      id='source-language'
                      value={sourceText}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setSourceText(e.target.value);
                      }}
                      placeholder='Source Language'
                    />
                    <div className='flex flex-row justify-between w-full'>
                      <span className='cursor-pointer flex space-x-2 flex-row'>
                        <SpeechRecognitionComponent
                          setSourceText={setSourceText}
                        />
                        <IconVolume
                          size={22}
                          onClick={() => handleAudioPlayback(sourceText)}
                        />
                        <FileUpload handleFileUpload={handleFileUpload} />
                        <LinkPaste handleLinkPaste={handleLinkPaste} />
                      </span>
                      <span className='text-sm pr-4'>
                        {sourceText.length} /2000
                      </span>
                    </div>
                  </div>
                  <div className='relative z-10 p-3 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20'>
                    <TextArea
                      id={'target-language'}
                      value={targetText}
                      onChange={() => {}}
                      placeholder={'Target Language'}
                    />
                    <div className='flex flex-row justify-between w-full'>
                      <span className='cursor-pointer flex space-x-2 flex-row items-center'>
                        <LanguageSelector
                          selectedLanguage={selectedLanguage}
                          setSelectedLanguage={setSelectedLanguage}
                          languages={languages}
                        />
                        <IconVolume
                          size={22}
                          onClick={() => handleAudioPlayback(targetText)}
                        />
                      </span>
                      <div className='flex flex-row items-center space-x-2 pr-4 cursor-pointer'>
                        <IconCopy size={22} onClick={handleCopyToClipboard} />
                        {copied && (
                          <span className='text-xs text-green-500'>
                            Copied!
                          </span>
                        )}
                        <IconThumbUp size={22} onClick={handleLike} />
                        <IconThumbDown size={22} onClick={handleDislike} />
                        <IconStar
                          size={22}
                          onClick={handleFavourite}
                          className={favourite ? 'text-yellow-500' : ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <SvgDecorations />
              </div>
              <CategoryLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
