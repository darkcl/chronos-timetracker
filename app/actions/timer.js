// @flow
import * as types from './actionTypes';
import type {
  Tick, TickAction,
  StartTimer, StartTimerAction,
  StopTimer, StopTimerAction,
  StopTimerRequest, StopTimerRequestAction,
  SetIdleState, SetIdleStateAction,
  SetLastScreenshotTime, SetLastScreenshotTimeAction,
  ResetTimer, ResetTimerAction,
  AddScreenshot, AddScreenshotAction,
  Screenshot,
} from '../types';

export const tick: Tick = (): TickAction => ({ type: types.TICK });
export const startTimer: StartTimer = (): StartTimerAction => ({ type: types.START_TIMER });
export const stopTimer: StopTimer = (): StopTimerAction => ({ type: types.STOP_TIMER });
export const stopTimerRequest: StopTimerRequest = (): StopTimerRequestAction => ({
  type: types.STOP_TIMER_REQUEST,
});

export const setIdleState: SetIdleState = (
  payload: boolean,
): SetIdleStateAction => ({
  type: types.SET_IDLE_STATE,
  payload,
});

export const setLastScreenshotTime: SetLastScreenshotTime = (
  payload: number,
): SetLastScreenshotTimeAction => ({
  type: types.SET_LAST_SCREENSHOT_TIME,
  payload,
});

export const resetTimer: ResetTimer = (): ResetTimerAction => ({ type: types.RESET_TIMER });

export const addScreenshot: AddScreenshot = (
  screenshot: Screenshot,
  screenshotTime: number,
): AddScreenshotAction => ({
  type: types.ADD_SCREENSHOT,
  payload: screenshot,
  meta: screenshotTime,
});