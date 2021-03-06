## Git Commit Guide :key:

### 한글기준

#### 규칙

1. 유형은 영어, 제목은 한글로 작성
2. 메시지 본문에 변경사항을 상세히 작성

#### 커밋 메시지 구성

1. 제목
2. 본문 (제목만으로 표현가능시 생략가능)
3. 꼬리말 (관련 이슈 없을시 생략가능)

```sh
유형: 제목

본문
 
꼬리말
```

3영역으로 구성되며 각 영역은 빈줄로 분리됨

#### 유형

1. feat: 기능 추가, 삭제, 변경 - 제품 코드 수정 발생
2. fix: 버그 수정 - 제품 코드 수정 발생
3. docs: 문서 추가, 삭제, 변경 - 제품 코드 수정 없음
4. style: 코드 형식, 정렬, 주석 등의 변경, ex) 세미콜론 추가 - 제품 코드 수정 발생, 하지만 동작에 영향을 주는 변경은 없음
5. refactor: 코드 리팩토링, ex) 변수명 변경 - 제품코드 수정 발생
6. test: 테스트 코드 추가, 삭제, 변경 등 - 제품 코드 수정 없음. 테스트 코드에 관련된 모든 변경에 해당
7. etc: 위에 해당하지 않는 모든 변경, ex) 빌드 스크립트 수정, 패키지 배포 설정 변경 - 코드 수정 없음

#### 제목

1. 제목 줄은 50자 내로 작성
2. 제목은 개조식 구문으로 작성
3. 제목 줄은 “유형: 제목” 의 형식으로 작성
4. 제목 뒤에 특수문자는 삽입하지 않음

#### 본문

1. 본문은 한 줄 당 72자 내로 작성
2. 본문 내용은 양에 구애받지 않고 최대한 상세히 작성
3. 본문 내용은 어떻게 변경했는지 보다 무엇을 변경했는지 또는 왜 변경했는지를 설명

#### 꼬리말

1. 꼬리말은 optional이고 이슈 트래커 ID를 작성
2. 꼬리말은 “유형: #이슈번호” 형식으로 사용
3. 여러개의 이슈번호를 적을때는 쉼표로 구분
4. 이슈 트래커 유형은 다음 중 하나를 사용
- Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
- Resolves: 이슈를 해결했을 때 사용
- Ref: 참고할 이슈가 있을 때 사용
- Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)

예시

```sh
feat: 패킷 송신 이벤트에 관련된 로그 출력 기능 추가

커밋에 대한 자세한 설명..

Resolves: #123
Ref: #456
Related to: #48, #45
```

 - [나만의 커밋 메시지 작성법](https://kooku.netlify.com/etc/%EB%82%98%EB%A7%8C%EC%9D%98-commit-message-%EC%9E%91%EC%84%B1%EB%B2%95/)

### 영문기준
1. 제목과 본문 사이에 한 줄 띄워 분리하기
2. 제목은 영문 기준 50자 이내
3. 제목 첫글자는 대문자 사용
4. 제목 끝에 . 금지
5. 제목은 명령조
6. 제목에 이슈 번호 붙이기
7. 본문은 영문기준 72자마다 줄 바꾸기
8. 본문은 어떻게 보다 무엇을, 왜에 맞춰 작성

- [Git 커밋 메시지 가이드](https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor/)
