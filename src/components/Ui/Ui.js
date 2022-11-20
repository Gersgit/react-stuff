import styled from "styled-components";

export const Button = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;

export const Card = styled.div`
  background: white;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  border-radius: 10px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  input:focus {
    outline: none;
    border-color: #4f005f;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

export const Model = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  }

  .modal {
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
    background: white;
    border-radius: 10px;
  }

  .header {
    background: #4f005f;
    padding: 1rem;
  }

  .header h2 {
    margin: 0;
    color: white;
  }

  .content {
    padding: 1rem;
  }

  .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;
