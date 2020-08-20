import styled from "styled-components";
import { buttonBgColour, buttonBgHoverColour } from "./colours";

export const TextBtn = styled.button`
    background: none;
    color: ${buttonBgColour};
    border: none;
    cursor: pointer;
    transition: 0.1s ease-in;
    display: flex;
    align-items: center;
    font-size: 0.85em;

    &:hover:not(:disabled) {
        color: ${buttonBgHoverColour};
    }

    &:focus {
        outline: none;
    }
`;
