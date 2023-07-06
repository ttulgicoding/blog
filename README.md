# 사용 명령어

## 최초 설치

```bash

npx create-next-app@latest          # React-Next 설치
npm install gray-matter             # .md 파일의 frontmatter 가져오기 설치
npm install next-mdx-remote         # mdx파일 컴포넌트 사용
npm install remark-unwrap-images    # mdx 관련
```


## git 데이터 가져오기 pull

```bash

# 최초
git init
git remote -v
git remote add origin https://github.com/ttulgicoding/blog.git
# 그 후
git pull origin main

```


## git 업로드

```bash

git add .
git commit -m "message"
git push origin main

```


## git 업로드 crlf에러 발생 시

```bash

git config --global core.autocrlf true

```

## 배포

```bash

npm run export

```