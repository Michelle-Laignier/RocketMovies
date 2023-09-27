import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > div {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 50px 0 40px;

        .addBtn {
            color: ${({ theme }) => theme.COLORS.BG};
            padding: 16px 32px;
        }
    }
    
    > section {
        height: 60vh;
        margin: 0 auto;
        padding-bottom: 58px;

        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 8px;
        }
    }
`