import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: 600px;
  color: #1e293b;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`

export const ItemsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 10px;
`

export const ImageContainer = styled.div`
  padding: 10px;
`
export const Image = styled.img`
  height: 400px;
  width: 300px;
`
