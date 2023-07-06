---
dirName: "certificate"
contentNo: 1
mainCategory: "자격증"
tag: ["정보처리기사","실기"]
title: "[정보처리기사]관계대수 및 순수 관계 연산자"
updated: "2023-04-22"
image: ""
isFeatured: true
---

>## **관계대수는** <br><br>
>
>   - 관계형 데이터베이스에서 원하는 정보와 그 정보를 얻기 위해 어떻게 해야하는 가를 명세하는 절차적인 언어이다.
>       <br><br>
>   - 관계대수를 통해 릴레이션을 원하는 [**릴레이션**](#릴레이션)으로 연산 도출할 수 있다.
>       <br><br>
>   - 관계대수에는 순수 관계 연산자와 일반 집합 연산자가 있다.
>       <br><br>

<br>

---

<br>

>## **순수 관계 연산자** <br><br>
>    - ### Select
>       - #### Select 연산자는 **σ** (**sigma**)로 표현한다.
>       - 원하는 [**튜플**](#튜플)을 출력한다.
>       - **ex)** σNUMBER = 3(USER)에서 USER는 테이블이 되고 NUMBER은 [**속성**](#속성)(Attribute)이 된다.<br>
            즉, USER테이블의 NUMBER가 3인 튜플들을 출력하게 된다.
><br><br>
>    - ### Project
>       - #### Project 연산자는 **π** (**pi**)로 표현한다.
>       - 원하는 [**속성**](#속성)(Attribute)을 표현한다.
>       - Select 연산으로는 [**릴레이션**](#릴레이션)에 중복 [**튜플**](#튜플)이 존재하지 않으나, Project 연산에서는 중복된 [**튜플**](#튜플)이 나올 수 있으나 자동으로 중복을 제거한 후 결과를 도출한다.
>       - **ex)** πNUMBER(USER)의 경우에는 USER 테이블의 NUMBER 속성을 중복을 제거하고 전부 도출한다.
><br><br>
>    - ### Join
















