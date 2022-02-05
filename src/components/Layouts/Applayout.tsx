import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  height: 100%;
`;

const AppLayout: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};

export default AppLayout;