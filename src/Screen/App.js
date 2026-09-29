import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  MerriweatherSans_400Regular,
  MerriweatherSans_400Regular_Italic,
  MerriweatherSans_500Medium,
  MerriweatherSans_600SemiBold,
  MerriweatherSans_700Bold,
  MerriweatherSans_800ExtraBold,
  useFonts
} from '@expo-google-fonts/merriweather-sans';


import AppLayout from './src/layout/AppLayout';
import TopBar from './src/layout/TopBar';
import SplashScreen from './src/screens/SplashScreen';
import CameraScreen from './src/screens/CameraScreen';
import DictionaryScreen from './src/screens/DictionaryScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import BookmarksScreen from './src/screens/BookmarksScreen';
import { sampleWords, WORD_KEYS } from './src/data/sampleWords';
import { COLORS } from './src/constants/theme';


const SCREENS = {
  SPLASH: 'splash',
  CAMERA: 'camera',
  DICTIONARY: 'dictionary',
  HISTORY: 'history',
  BOOKMARKS: 'bookmarks'
};


const DICTIONARY_STATUS = {
  WORD: 'word',
  SEARCHING: 'searching',
  NOT_FOUND: 'not-found'
};


export default function App() {
  const [fontsLoaded] = useFonts({
    MerriweatherSans_400Regular,
    MerriweatherSans_400Regular_Italic,
    MerriweatherSans_500Medium,
    MerriweatherSans_600SemiBold,
    MerriweatherSans_700Bold,
    MerriweatherSans_800ExtraBold
  });


  const [currentScreen, setCurrentScreen] = useState(SCREENS.SPLASH);
  const [selectedWord, setSelectedWord] = useState('ako');
  const [dictionaryStatus, setDictionaryStatus] = useState(DICTIONARY_STATUS.WORD);
  const [historyWords, setHistoryWords] = useState([]);
  const [bookmarkedWords, setBookmarkedWords] = useState([]);


  useEffect(() => {
    if (!fontsLoaded) return undefined;


    const splashTimer = setTimeout(() => {
      setCurrentScreen(SCREENS.CAMERA);
    }, 1500);


    return () => clearTimeout(splashTimer);
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return null;
  }


  function showCameraScreen() {
    setCurrentScreen(SCREENS.CAMERA);
  }


  function showHistoryScreen() {
    setCurrentScreen(SCREENS.HISTORY);
  }


  function showBookmarksScreen() {
    setCurrentScreen(SCREENS.BOOKMARKS);
  }


  function addToHistory(word) {
    setHistoryWords((previousHistory) => [
      word,
      ...previousHistory.filter((historyWord) => historyWord !== word)
    ]);
  }


  function showDictionaryWord(word) {
    const normalizedWord = String(word).trim().toLowerCase();


    if (!sampleWords[normalizedWord]) {
      setDictionaryStatus(DICTIONARY_STATUS.NOT_FOUND);
      setCurrentScreen(SCREENS.DICTIONARY);
      return;
    }


    setSelectedWord(normalizedWord);
    setDictionaryStatus(DICTIONARY_STATUS.WORD);
    addToHistory(normalizedWord);
    setCurrentScreen(SCREENS.DICTIONARY);
  }


  function toggleBookmark(word) {
    setBookmarkedWords((previousBookmarks) => {
      if (previousBookmarks.includes(word)) {
        return previousBookmarks.filter((bookmarkedWord) => bookmarkedWord !== word);
      }


      return [word, ...previousBookmarks];
    });
  }


  function showRandomWord() {
    const availableWords = WORD_KEYS.filter((word) => word !== selectedWord);
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    showDictionaryWord(availableWords[randomIndex]);
  }


  function showNextWord() {
    const currentIndex = WORD_KEYS.indexOf(selectedWord);
    const nextIndex = (currentIndex + 1) % WORD_KEYS.length;
    showDictionaryWord(WORD_KEYS[nextIndex]);
  }


  function renderCurrentScreen() {
    switch (currentScreen) {
      case SCREENS.DICTIONARY:
        return (
          <DictionaryScreen
            wordData={sampleWords[selectedWord]}
            status={dictionaryStatus}
            isBookmarked={bookmarkedWords.includes(selectedWord)}
            onToggleBookmark={() => toggleBookmark(selectedWord)}
            onBack={showCameraScreen}
            onRandom={showRandomWord}
            onNext={showNextWord}
            onWordSelect={showDictionaryWord}
          />
        );


      case SCREENS.HISTORY:
        return (
          <HistoryScreen
            words={historyWords}
            onBack={showCameraScreen}
            onWordSelect={showDictionaryWord}
          />
        );


      case SCREENS.BOOKMARKS:
        return (
          <BookmarksScreen
            words={bookmarkedWords}
            onBack={showCameraScreen}
            onWordSelect={showDictionaryWord}
          />
        );


      case SCREENS.CAMERA:
      default:
        return <CameraScreen />;
    }
  }


  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.blue}
        translucent={false}
      />


      <AppLayout>
        {currentScreen === SCREENS.SPLASH ? (
          <SplashScreen />
        ) : (
          <>
            <TopBar
              onHistory={showHistoryScreen}
              onBookmarks={showBookmarksScreen}
              onSearch={showDictionaryWord}
            />
            {renderCurrentScreen()}
          </>
        )}
      </AppLayout>
    </SafeAreaProvider>
  );
}
