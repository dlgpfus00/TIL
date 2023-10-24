import styled from "styled-components";

//컴포넌트 함수는 앞글자가 반드시 대문자
const MainPage = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <div>SIGN-IN</div>
          <div>SIGN-UP</div>
        </Header>
      </Container>
    </Wrapper>
  );
};
export default MainPage;

//스타일 컴포넌트도 앞글자가 대문자
const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.h1`
  width: 360px;
`;

const Header = styled.header`
  background-color: "#00C7AE";
`;
