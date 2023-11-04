# NoticeBoard
# 게시판 리펙토링 요구사항 명세서

1. 회원정보
    1. 로컬서버에서 로그인/회원가입이 가능해야함
    2. 구글API를 통한 로그인/회원가입또한 가능해야함
    3. 아이디에 특수문자필터링
    4. 비밀번호를 변경할 수 있어야함
2. 마이페이지(유저페이지)
    1. 자신의 정보를 확인할 수 있는 페이지
    2. 자신이 작성한 글 개수, 받은 추천수(좋아요수) 등을 표기
    3. 다른사람의 프로필도 볼수있어야됨.
3. 메인페이지
    1. 알림설정한 게시판들의 상위 10개 글을 볼수 있도록하기
    2. 존재하는 다른 게시판으로 갈 수 있는 버튼
4. 게시판 글
    1. 게시글에는 제목, 본문이 있어야함
    2. 게시판을 선택할 수 있어야함
    3. 게시글에 여러개의 파일을 첨부할 수 있어야함
5. 게시판
    1. 최소 2개 이상의 게시판이 존재(공지, 자유게 등)
    2. 게시판에서 게시글들을 검색할 수 있어야함(제목, 내용, 작성자)
    3. 게시판에서 게시글들의 제목, 작성자, 작성일자, 조회수, 첨부파일 여부 등을 확인할 수 있어야함.
    4. 게시판 알림을 받을지 말지 설정할 수 있음.
6. 댓글
    1. 댓글은 제한된 길이의 텍스트형식
    2. 게시글에 댓글을 작성할 수 있어야됨
    3. 댓글에 추천기능(좋아요 등)이 있어야함
    4. 댓글에 대댓글을 달 수 있어야함(깊이제한 없음)
    5. 댓글도 삭제, 수정이 가능해야함
7. DB
    1. Connection Pool 기능 활용하기
    2. Transaction 기능 활용하기
    3. 테이블 정규화 수준 볼거임(DDL.sql 등 파일로 정리해서 깃에 올려주기)
    4. 비밀번호 해시암호화
    5. 인덱싱? 필요하면 하세요
8. Nodejs 관련사항
    1. 모듈화수준 볼거임
    2. 중요데이터 은닉화 볼거임
9. 기타사항
    1. 보안적인 요소들 빡세게는 아니지만 볼겁니다
    2. 기초적인 SQL인젝션 등은 대비하셔야해요
