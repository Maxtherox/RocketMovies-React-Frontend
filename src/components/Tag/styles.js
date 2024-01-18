
import styled from 'styled-components'

export const Container = styled.span`
    font-size: 13px;
    font-weight: 400;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: ${({theme}) => theme.COLORS.GRAY_900};

`