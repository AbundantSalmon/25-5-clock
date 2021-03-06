import React, { useReducer, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Timer from 'easytimer.js';
import { Display } from './Display';
import { Controls } from './Controls';

const BREAKMINIMUM = 1;
const BREAKMAXIMUM = 60;
const SESSIONMINIMUM = 1;
const SESSIONMAXIMUM = 60;

const initialTimerState: TimerState = {
  breakLength: 5,
  sessionLength: 25,
  currentTime: '25:00',
  started: false,
  paused: false,
  label: 'SESSION',
  timer: new Timer(),
};

const App: React.VFC = () => {
  const [timerState, dispatchTimerState] = useReducer(
    reducerTimerState,
    initialTimerState
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div id="timer-main" className="my-3 p-3 bg-white shadow-lg container-sm">
      <Display label={timerState.label} currentTime={timerState.currentTime} />
      <Controls
        timer={timerState.timer}
        started={timerState.started}
        paused={timerState.paused}
        breakLength={timerState.breakLength}
        sessionLength={timerState.sessionLength}
        dispatchTimerState={dispatchTimerState}
        audioRef={audioRef}
      />
      <audio
        id="beep"
        preload="auto"
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
};

function minutesToClock(minutes: number) {
  //used to format the clock displays 00:00
  let date = new Date(0);
  date.setMinutes(minutes);
  return date.toISOString().substr(14, 5);
}

function reducerTimerState(state: TimerState, action: ACTIONTYPE): TimerState {
  switch (action.type) {
    case 'breakDecrement':
      if (state.breakLength > BREAKMINIMUM && !state.started) {
        return { ...state, breakLength: state.breakLength - 1 };
      }
      return state;
    case 'breakIncrement':
      if (state.breakLength < BREAKMAXIMUM && !state.started) {
        return { ...state, breakLength: state.breakLength + 1 };
      }
      return state;
    case 'sessionDecrement':
      if (state.sessionLength > SESSIONMINIMUM && !state.started) {
        return {
          ...state,
          sessionLength: state.sessionLength - 1,
          currentTime: minutesToClock(state.sessionLength - 1),
        };
      }
      return state;
    case 'sessionIncrement':
      if (state.sessionLength < SESSIONMAXIMUM && !state.started) {
        if (state.sessionLength + 1 === 60) {
          // special case for 60 minutes
          return {
            ...state,
            sessionLength: state.sessionLength + 1,
            currentTime: '60:00',
          };
        } else {
          return {
            ...state,
            sessionLength: state.sessionLength + 1,
            currentTime: minutesToClock(state.sessionLength + 1),
          };
        }
      }
      return state;
    case 'setCurrentTime':
      return {
        ...state,
        currentTime: state.timer
          .getTimeValues()
          .toString(['minutes', 'seconds']),
      };
    case 'setStarted':
      return { ...state, started: action.state };
    case 'setPaused':
      return { ...state, paused: action.state };
    case 'setDefault':
      return { ...initialTimerState };
    case 'timerStart':
      state.timer.start({
        countdown: true,
        startValues: {
          minutes:
            state.label === 'SESSION' ? state.sessionLength : state.breakLength,
        },
        callback: () => {
          action.dispatchTimerState({ type: 'setCurrentTime' });
        },
      });
      return state;
    case 'changeLabel':
      if (state.label === 'SESSION') {
        return { ...state, label: 'BREAK' };
      } else if (state.label === 'BREAK') {
        return { ...state, label: 'SESSION' };
      }
      throw new Error();

    default:
      throw new Error();
  }
}

export default App;
