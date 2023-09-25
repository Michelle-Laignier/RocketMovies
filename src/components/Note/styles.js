import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.BG_SECTION};
    border: none;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 32px;
    width: 100%;

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE_200};
        font-size: 24px;
        font-weight: 700;
        text-align: left;
    }

    .stars {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    p {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-size: 16px;
        height: 42px;
        overflow: hidden;
        text-align: justify;
    }

    > footer {
        display: flex;
        gap: 8px;
    }
`