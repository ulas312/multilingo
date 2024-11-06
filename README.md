# MultiLingo - AI-Powered Language Translation Application

## Introduction

Welcome to **MultiLingo**, an AI-powered language translation application developed as a full-stack project using Next.js and Tailwind CSS. The inspiration for this project came from a recent trip to Latvia, where I struggled to communicate with my parents-in-law due to language barriers. This experience motivated me to brush up on my skills and create an AI-powered solution to overcome such communication gaps.

The application leverages advanced AI models to translate text from a source language into a target language, supporting multiple languages including Spanish, French, German, and Chinese. It also offers additional functionalities like audio playback, text copying, and saving translations as favorites. This project showcases my ability to build responsive, AI-driven applications that can be used across various devices, including desktops, tablets, and mobile phones.

## Features

- **Real-time Translation:** Input text in any supported language and get instant translations.
- **Multi-Language Support:** Choose from various languages including Spanish, French, German, and more.
- **Audio Playback:** Listen to the translated text with just one click.
- **File Upload:** Upload documents to be translated into any supported language.
- **Responsive Design:** Fully functional across desktop, tablet, and mobile views.
- **Favorite Translations:** Save your preferred translations for quick access.
- **Copy to Clipboard:** Easily copy translated text to your clipboard for use elsewhere.

## Demo

### Text Translation

1. Enter text in the source language field.
2. Select the target language from the dropdown menu.
3. View the translated text in real-time in the target language field.
4. Use the audio playback feature to hear the translated text.

### Uploading a File

1. Click on the file upload icon to select a document.
2. The application will extract and translate the text from the document.
3. The translated text will be displayed in the target language field.

### Playing Audio

1. After translation, click on the speaker icon to hear the translated text.
2. The audio will play in the target language.

### Saving a Favorite

1. Translate a text.
2. Click on the star icon to save the translation to your favorites.

### Copying Translations

1. Click the copy icon to copy the translated text.
2. Paste it anywhere as needed.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- Yarn or npm

### Installation

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/ulas312/multilingo

   ```

2. Navigate to the project directory:

   ```bash
   cd multilingo

   ```

3. Install dependencies (either yarn or npm):

   ```bash
   npm install

   ```

4. Create a .env file in the root directory and add your OpenAI API key (https://openai.com/index/openai-api/):
   ```bash
   NEXT_PUBLIC_OPENAI_API_KEY=your-api-key-here
   ```

### Running the Application

1. Start the development server (either yarn or npm):

   ```bash
   npm run dev

   ```

2. Open your browser and go to http://localhost:3000 to view the application.

## Future Enhancements

- User Authentication: Implement user profiles and authentication to manage saved translations.
- Extended Language Support: Add support for more languages and dialects.
- SaaS Integration: Introduce paid plans for higher character limits and additional features.
