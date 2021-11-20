import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Image from "../../../components/Image/Image";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  img {
    transition: transform 0.3s;
  }
  :hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const StyledImage = styled.img`
  margin-right: 8px;
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://pancakeswap.finance/swap?outputCurrency=0xd91a6660e938f2a4ca9117d104f31a30be7f251b"
      target="_blank"
    >
      {/* <PancakeRoundIcon width="24px" mr="8px" /> */}
      <StyledImage src="/logo.png" width={24} height={26} />
      {/* <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text> */}
      <Skeleton width={80} height={24} />
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
