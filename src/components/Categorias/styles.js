import styled from 'styled-components';

export const Imgadp = styled.img`
    height: 100%; 
    width: 100%; 
    object-fit: contain;
    margin: auto 0.5%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    flex: 20%;
    padding: 1vh;
`;

export const CategoriasBase = styled.div`
    text-align: center;
    background-color: #6495ED;
    border: none;
    border-bottom: 0.7vh #4169E1 solid;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 20%;
    display: flex;
`;