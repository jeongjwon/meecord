# 🖥  meecord

## 실시간 감정분석 화상회의 및 감정상황 회의록 서비스

## 프로젝트 관련 링크
> 사이트 링크 https://meecord-223cc.firebaseapp.com/

> 시연 영상 https://youtu.be/nmxaVjNYNbg

미코드'는 감정분석을 토대로한 비대면 소개팅 서비스다. '미코드'의 특징
은 비대면 1:1로 진행되는 미팅을 통해 화상과 음성으로 각각 표정인식과 음성인식을 통해 감정 분석으로 실시간 TIP을 제공한다.
실시간 TIP에는 1.랜덤 질문과 2.지난 대화록의 주요 감정 및 핵심 키워드, 3.실시간 상대방 의 감정 추이를 제공한다. 미팅 후에는 대화록과 감정 분석과 키워드 요약이 적용된 미팅 기록을 간단히 볼 수 있다.




## MEECORD 소개

<img width="80%" src="https://user-images.githubusercontent.com/76391160/196198647-b3e8b7e8-a211-43f1-91e4-4efbd1c4e9d5.png"/>

MEECORD는 **감정분석**을 토대로한 비대면 소개팅 서비스입니다.

비대면 1:1로 진행되는 미팅을 통해 화상으로 **표정인식**과 **음성인식**을 결합하여 감정분석을 통한 **실시간 TIP**을 제공합니다.

실시간 TIP에는 랜덤질문과 지난 대화록의 주요 감정 및 핵심 키워드, 실시가 상대방의 감정추이르 제공합니다.

사용자는 기능을 활용해 미팅에 참여할 수 있습니다.

미팅이 끝나 후에는 대화록과 감정분석과 키워드 요약이 적용된 기록을 제공합니다.




## 💡 주요기능

<img width="80%" src="https://user-images.githubusercontent.com/76391160/196199321-cfe6dfb1-5a4f-4d24-b63c-d5069a7f2a7a.png">

1. 로그인 후 시작 화면 


소개팅을 시작하거나 지나 대화록 열람을 할 수 있습니다.


<img width="80%"  src="https://user-images.githubusercontent.com/76391160/196201829-4ac0bc0c-04cf-489f-8931-e012d6db270f.png">

2. 실시간 미팅 기본 기능


미팅방을 생성 후 참여코드를 클리보드에 복사하여 공유 가능합니다.

미팅이 시작되면 모든 발언은 텍스화되어 저장됩니다.

상대방화면의 좌측상단에는 실시간으로 감정이 나타나며 그 기능을 이용하여 실시간 TIP을 제공합니다.

<img width="80%" src="https://user-images.githubusercontent.com/76391160/196202520-62597c60-50aa-4ebb-a003-febbefb54fd2.png">
<img width="80%" src="https://user-images.githubusercontent.com/76391160/196202678-69ddf02b-c025-4753-945a-ea20875b6b49.png">

3. 대화 다시 보기 기능


미팅 후에는 대화기록이 시간 순으로 저장되어 다시 보기 열람이 가능합니다.

대화 다시보기에는 대화에서 이루어졌던 감정적 흐름과 상대방의 감정별 주요 키워드를 차트로 한눈에 파악할 수 있습니다.






## ⚙️ 기술스택

Language | Remote Meeting Implementation | Server&DataBase | Face Expression Recognition | Voice Expression Recognitio
---|---|---|---|---|
JavaScript, Python | WebRTC, Chrome STT, ENTRI NER API | Flask + Ngrok(localhost), Firebase | Face-api.js, API | Pytorch(CNN + MFCC)


