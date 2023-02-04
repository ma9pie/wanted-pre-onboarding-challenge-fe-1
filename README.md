# TODO LIST

간단한 TODO LIST 서비스를 구현해봤습니다.

### 📆 프로젝트 기간

<ul>
    <li>개발 기간 : 2023.01.09 ~ 2023.01.23</li>
</ul>
  
### 📖 컨텐츠

<div style="margin-bottom:40px;">
    <h5>Home</h5>
    <div style="display:grid; gap:16px;">
        <img src="/screenshot/lightMode/home.png">
        <img src="/screenshot/darkMode/home.png">
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>메인 홈</li>
        </ul>
    </div>
</div>

<div style="margin-bottom:40px;">
    <h5>Login</h5>
    <div style="display:grid; gap:16px;">
        <img src="/screenshot/lightMode/login.png">
        <img src="/screenshot/darkMode/login.png">
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>로그인 페이지</li>
        </ul>
    </div>
</div>

<div style="margin-bottom:40px;">
    <h5>Signup</h5>
    <div style="display:grid; gap:16px;">
        <img src="/screenshot/lightMode/signup.png">
        <img src="/screenshot/darkMode/signup.png">
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>회원가입 페이지</li>
        </ul>
    </div>
</div>

<div style="margin-bottom:40px;">
    <h5>Todo list</h5>
    <div style="display:grid; gap:16px;">
        <img src="/screenshot/lightMode/todo_list1.png">
        <img src="/screenshot/lightMode/todo_list2.png">
        <img src="/screenshot/lightMode/todo_list3.png">
    </div>
    <div style="display:grid; gap:16px;">
        <img src="/screenshot/darkMode/todo_list1.png">
        <img src="/screenshot/darkMode/todo_list2.png">
        <img src="/screenshot/darkMode/todo_list3.png">
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>할일 목록 생성</li>
        </ul>
    </div>
</div>

### 구현

##### Login / SignUp

- 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성
- 이메일과 비밀번호의 유효성을 확인
- 이메일 조건 : 최소 `@`, `.` 포함
- 비밀번호 조건 : 8자 이상 입력
- 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동
- 응답으로 받은 토큰은 로컬 스토리지에 저장
- 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트
- 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트

##### Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현
- 목록 / 상세 영역으로 나누어 구현
- Todo 목록 조회
- Todo 추가 버튼을 클릭하여 할 일 추가
- Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소 가능
- Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제
- 한 화면 내에서 Todo List와 개별 Todo의 상세 확인 가능
- 새로고침을 했을 때 현재 상태가 유지
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현
- 수정되는 Todo의 내용이 목록에서도 실시간으로 반영

### 📚 기술 스택

[![My Skills](https://skillicons.dev/icons?i=html,css,js,react,nextjs,emotion,sass&perline=5)](https://skillicons.dev)
