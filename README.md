# React 정리
### 1. props
- 변하지 않는 데이터,컴포넌트끼리 값을 전달하는 수단

### 2. state 란? 
- React component에 대한 데이터
- this.state={} 으로 설정
- 유동적인 데이터 
- 초기값 설정 필수
- state 는 사용자가 정의함
- state 는 쉽게말해 JavaScript 객체이다
- 값 변경을 하려면  클래스형은 this.setState()를 사용, 함수형은 useState()사용



### 3. Component 종류 
-  Funcion Component , Class Component

### 4. Component-styled 방법
- scss, components-styled  
- components-styled 사용방법
1. 패키지 설치 npm i styled-components

### 5. Component 에 props 를 넣어 Elements 를 반환
![캡처](https://user-images.githubusercontent.com/80336750/136164907-f5b1e44c-6234-4afe-8c45-ae9618656b6c.PNG) 
### 6. ComponentLifecycle
![컴포넌트 라이프 사이클](https://user-images.githubusercontent.com/80336750/136165181-14349057-212e-47f9-a15f-46ac0d3522e7.PNG)

### 7.가상돔의 동작 방식
- 기존의 DOM과 어떤행동 후 새로 그린 DOM을 비교해서 정말 바뀐 부분만 갈아 끼워줌.

### 8. 리액트에서 돔요소를 가져오는방법
- React.createRef() 사용
1. ref선언 : this.text = React.createRef(); 
2. element 에서 ref = {this.text} 로연결 

### 9. 이벤트 리스너 사용방법
1. ref 잡아주기 (돔에 접근해야해서)
2. 이벤트가 발생했을때 어떤효과를 줄껀지 함수 만들기.
3. componentDidMount에서 등록
4. componentWillUnMount에서 해제

