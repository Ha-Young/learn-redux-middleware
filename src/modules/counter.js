import { delay, put } from "redux-saga/effects"; // redux-saga의 effects에는 다양한 유틸함수들이 들어있다.
// 여기서 put이 제일 중요한데, 새로운 액션을 디스패치 할 수 있다.

// 액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

// 액션 생성 함수 (thunk를 일반 액션생성함수로)
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// increaseSaga와 decreaseSaga를 다음과 같이 생성.
// redux-saga에서는 제너레이터 함수를 "사가" 라고 부른다.
function* increaseSaga() {
  yield delay(1000); // 1초 대기
  yield put(increase()); // put은 특정 액션을 디스패치 해준다.
}

function* decreaseSaga() {
  yield delay(1000); // 1초 대기
  yield put(decrease()); // put은 특정 액션을 디스패치 해준다.
}

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없음)
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
