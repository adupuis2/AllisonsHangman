import * as React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import imgHangman from 'images/hangman.jpg';
import HangmanCoverup from './HangmanCoverup';

export interface LetterStatus {
  wasGuessed: boolean;
  isWrong: boolean;
}

export interface HangmanState {
  letters: LetterStatus[];
  buttons: JSX.Element[];
  score: number;
  wordMap: any;
  word: string;
}

class Hangman extends React.Component<{}, HangmanState> {
  constructor(props: any) {
    super(props);
    const gw = getWord();
    this.state = {
      word: gw[0],
      wordMap: gw[1],
      score: 0,
      buttons: [],
      letters: [
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
        { wasGuessed: false, isWrong: false },
      ],
    };
  }

  componentDidMount = () => {
    this.buildAlphabet();
  };

  checkWinState = (): boolean => {
    const { wordMap } = this.state;
    const keys = Object.keys(wordMap);
    for (const key of keys) {
      if (!wordMap[key]) {
        return false;
      }
    }
    return true;
  };

  guess = (charCode: number): void => {
    const { letters, score, wordMap } = this.state;
    letters[charCode].wasGuessed = true;
    const char = String.fromCharCode(charCode + 65);
    const isInWord = checkLetter(char, wordMap);
    if (!isInWord) {
      letters[charCode].isWrong = true;
      this.setState({ letters, score: score + 1 });
    } else {
      toggleLetterValue(char, wordMap);
      this.setState({ letters, wordMap });
    }
    this.buildAlphabet();
  };

  buildWord = (): JSX.Element[] => {
    const { letters, word } = this.state;
    const typographyArray: JSX.Element[] = [];
    for (const letter of word) {
      const charCode = letter.charCodeAt(0) - 65;
      typographyArray.push(
        <Typography
          style={{
            borderBottom: '1px solid black',
            color: letters[charCode].wasGuessed ? 'black' : 'white',
          }}
        >
          {letters[charCode].wasGuessed ? letter : '~'}
        </Typography>,
      );
    }
    return typographyArray;
  };

  buildAlphabet = (): void => {
    const { letters } = this.state;
    const buttons = letters.map((value: LetterStatus, index: number) => {
      return (
        <Button
          key={index}
          style={{
            backgroundColor: value.wasGuessed ? (value.isWrong ? 'red' : 'green') : 'white',
            padding: 0,
            width: `${300 / 5}px`,
          }}
          disabled={value.wasGuessed}
          onClick={() => this.guess(index)}
        >
          {String.fromCharCode(index + 65)}
        </Button>
      );
    });
    this.setState({ buttons });
  };

  render() {
    const { buttons, score } = this.state;
    return (
      <>
        <Grid
          style={{
            width: '300px',
            height: '300px',
            backgroundImage: `url(${imgHangman})`,
          }}
        >
          {/*head*/}
          <HangmanCoverup height={40} width={50} xPos={205} yPos={85} shown={score <= 0} />
          {/*left arm*/}
          <HangmanCoverup height={40} width={20} xPos={180} yPos={108} shown={score <= 1} />
          <HangmanCoverup height={17} width={20} xPos={185} yPos={120} shown={score <= 1} />
          {/*right arm*/}
          <HangmanCoverup height={35} width={20} xPos={209} yPos={112} shown={score <= 2} />
          {/*torso*/}
          <HangmanCoverup height={35} width={20} xPos={200} yPos={112} shown={score <= 3} />
          {/*left leg*/}
          <HangmanCoverup height={40} width={20} xPos={185} yPos={138} shown={score <= 4} />
          {/*right leg*/}
          <HangmanCoverup height={40} width={20} xPos={205} yPos={138} shown={score <= 5} />
        </Grid>
        <Grid
          style={{
            width: '300px',
            height: '30px',
            paddingBottom: '8px',
          }}
          container
          justify={'space-around'}
        >
          {this.buildWord()}
        </Grid>
        <Grid
          style={{
            width: '300px',
            height: '300px',
          }}
          container
          justify={'space-around'}
        >
          {score < 9 && !this.checkWinState() && buttons}
        </Grid>
      </>
    );
  }
}

function getWord() {
  const placeholderDictionary = ['x', 'orange', 'dogs', 'cats', 'bananas'];
  const randomNumberZeroToOne = Math.random();
  const randomScaledNumber = randomNumberZeroToOne * placeholderDictionary.length;
  const randomInteger = Math.floor(randomScaledNumber);
  const word = placeholderDictionary[randomInteger].toUpperCase();
  const wordMap: any = {};

  for (const letter of word) {
    wordMap[letter] = false;
  }

  return [word, wordMap];
}

// checks if a letter is in the word
function checkLetter(letter: string, wordMap: any) {
  // getting all the unique letters in the word
  const keys = Object.keys(wordMap);

  for (const key of keys) {
    if (letter === key) {
      return true;
    }
  }

  return false;
}

function toggleLetterValue(letter: string, wordMap: any) {
  wordMap[letter] = true;
}

function wordIsFullyGuessed(wordMap: any) {
  const keys = Object.keys(wordMap);

  for (const key of keys) {
    if (wordMap[key] === false) {
      return false;
    }
  }

  return true;
}

function playerGuessedWrongLetter(body: number, letter: string, pile: string) {
  return [body + 1, pile + letter];
}

function isBodyFull(pile: string) {
  if (pile.length >= 9) return true;
  return false;
}
export default Hangman;
