import styled from "styled-components";

export const Legend = styled.legend`
    margin: auto;
    padding: 15px;
    font-weight: bold;
    font-size: larger;
    background: rgb(255, 91, 31);
    background: linear-gradient(27deg, rgba(255, 91, 31, 1) 63%, rgba(240, 131, 63, 1) 100%);
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-transform: capitalize;
`;

export const Section = styled.section`
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-content: center;
    border-bottom: 4px solid #2c566d68;
    box-shadow: 0px 38px 18px -43px #5e84b3;
    padding-bottom: 25px;
    margin-bottom: 25px;
    transition: 0.5s;

    @media (max-width: ${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(2, minmax(auto, 100%));
        grid-gap: 10px;
        margin-bottom: 15px;
        padding-bottom: 10px;
        justify-items: center;
    };

    &:hover{
        box-shadow: 0px 38px 23px -40px #5e84b3;
        border-radius: 10px;
        background-color: #153047;
    };
`;

export const Header = styled.header`
    text-align: center;
    text-transform: capitalize;
    padding: 20px;
    background-color:${({ theme }) => theme.colors.naturalGrey};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    text-decoration: underline;
    justify-self: start;
    font-size: large;
    transition: 0.4s;
    width: 100%;

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        justify-self: center;
        border-radius: 20px;
        padding: 10px;
        font-size: smaller;
    };

    &:hover {
        background-color: rgba(139, 136, 134, 0.207);
    };
`;

export const Input = styled.input`
    padding: 15px;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        border-radius: 20px;
        padding: 10px;
    };
`;

export const Container = styled.section`
    display: flex;

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        flex-direction: column;
        align-items: center;
    };
`;

export const Button = styled.button`
    border: 2px solid ${({ theme }) => theme.colors.EastBay};
    border-bottom: 15px solid ${({ theme }) => theme.colors.EastBay};
    margin: 5px;
    padding: 20px;
    border-radius: 20px;
    background-color: rgb(51, 53, 88);
    color: white;
    font-size: x-large;
    font-weight: bolder;
    cursor: pointer;
    flex-grow: 1;
    flex-basis: 49%;
    transition: 0.2s;

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        margin: 3px 0;
        width: 75%;
        padding: 5px;
        font-size: smaller;
        border-bottom: 10px solid #3f4273;

        &&:hover {
            border-bottom: 10px solid #7e4040;
        };

        &&:active {
        border-top: 10px solid #7e4040;
        border-bottom: 2px solid #7e4040;
    };
    };

    &:hover {
        border: 2px solid #7e4040;
        border-bottom: 15px solid #7e4040;
        background-color: #7f3333;
    };

    &:active {
        border-top: 10px solid #7e4040;
        border-bottom: 2px solid #7e4040;
    };
`;

export const SubmitButton = styled(Button)`

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        margin: 3px 0;
        width: 75%;
        padding: 5px;
        font-size: smaller;
        border-bottom: 10px solid #3f4273;

        &&:hover {
            border-bottom: 10px solid rgb(73, 135, 102);
        };

        &&:active {
            border-top: 10px solid rgb(73, 135, 102);
            border-bottom: 2px solid rgb(73, 135, 102);
        }
    };


    &:hover{
        border: 2px solid rgb(73, 135, 102);
        border-bottom: 15px solid rgb(73, 135, 102);
        background-color: rgb(51, 88, 68);
    };

    &:active{
        border-top: 10px solid rgb(73, 135, 102);
        border-bottom: 2px solid rgb(73, 135, 102);
    };
`;

export const Information = styled.p`
   text-align:center;
   font-style:italic;

   @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
    font-size: x-small;
   }
`;

export const ExchangeDate = styled.span`
    text-decoration:underline;
`