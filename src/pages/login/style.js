import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #eee;
`
export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 150px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
`
export const Button = styled.div`
  width: 220px;
  background: #3194d0;
  color: #fff;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`