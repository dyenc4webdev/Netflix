import styled from "styled-components";

export const FooterContain = styled.main`
  margin: 20px auto 0;
  position: relative;
  background-color: inherit;
  @media screen and (max-width: 850px) {
    padding: 70px 2rem 20px 2rem;
  }
`;

export const FooterSection = styled.section`
  margin-top: 120px;
  min-width: 190px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
  max-width: 980px;
`;

export const TopFooter = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
`;

export const CenterFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0px;
  margin-top: 16px;
  grid-auto-rows: 30px;
  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BottomFooter = styled.div``;
