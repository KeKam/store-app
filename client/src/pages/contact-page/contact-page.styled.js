import styled from 'styled-components';

export const ContactPage = () => {};

ContactPage.Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 120px auto;
  font-weight: bold;
  color: #e8eaed;
`;

ContactPage.FormContainer = styled.div`
  margin: 0px 20px;
  width: 350px;
`;

ContactPage.Title = styled.h2`
  margin: 10px 0;
`;

ContactPage.Error = styled.p`
  color: red;
  font-style: italic;
`;

ContactPage.MessageContainer = styled.div`
  margin: 280px auto;
  height: 300px;
  width: 350px;
`;

ContactPage.Message = styled.h2`
  display: flex;
  justify-content: center;
  color: #e8eaed;
  font-style: italic;
  margin: 0px 10px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
