# 이선희 웹 CV V3.1

블루 계열의 한 페이지형 Professional CV입니다. GitHub Pages에서 별도 설치나 빌드 없이 바로 호스팅할 수 있습니다.

## 버전

- 최신본: V3.1
- 구분: V3.0 정식 CV의 프로필 사진·AI 강사 홍보영상 보강본
- 이전본: V1.0 그린 초안, V2.0 블루 구조 개선본, V3.0 정식 CV

## GitHub Pages에 올리는 방법

1. GitHub에서 새 저장소를 만듭니다.
2. 이 압축파일을 풀고, 폴더 안의 모든 파일을 저장소 최상위에 올립니다.
3. 저장소의 `Settings` → `Pages`로 이동합니다.
4. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, 폴더는 `/(root)`를 선택하고 저장합니다.
6. 잠시 기다린 뒤 표시되는 주소로 접속합니다.

일반적인 주소 형식은 `https://사용자명.github.io/저장소명/`입니다. 저장소 이름을 `사용자명.github.io`로 만들면 `https://사용자명.github.io/`로 열립니다.

## 파일 구성

- `index.html`: CV 내용과 구조
- `styles.css`: 블루 디자인, 모바일 반응형, 인쇄 설정
- `assets/profile.jpg`: 증명사진형 프로필 사진
- `assets/ai-instructor-promo.mp4`: AI 강사 홍보영상
- `assets/ai-instructor-poster.jpg`: 영상 미리보기 이미지
- `.nojekyll`: GitHub Pages 호환 파일
- `VERSION.txt`: 현재 버전 정보
- `버전이력.md`: V1.0부터 V3.1까지의 변경 흐름

연락처와 경력은 `index.html`, 색상과 레이아웃은 `styles.css`에서 수정합니다. 브라우저의 `PDF로 저장 / 인쇄` 버튼으로 PDF 출력도 가능합니다.
