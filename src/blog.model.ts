// 블로그 게시물의 타입을 정의
// 게시물의 타입을 인터페이스로 정의
// 타입스크립트에서는 데이터만 가지고 있는 타입을 선언할 때, 클래스가 아닌 인터페이스를 많이 사용
// export를 붙여 다른 곳에서 사용할 수 있게 함
export interface PostDto { 
    id: string;
    title: string;
    content: string;
    name: string;
    createdDt: Date;
    updatedDt?: Date;
    // 수정 일시는 null값이 들어가도 됨으로 뒤에 ?를 붙여줌
    // ?가 있다는 것은 필수값이 아니라는 의미
}