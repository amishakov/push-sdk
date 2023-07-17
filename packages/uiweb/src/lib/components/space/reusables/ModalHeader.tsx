import { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { CloseSvg } from '../../../icons/CloseSvg';
import { ArrowLeft } from '../../../icons/ArrowLeft';

export interface IModalHeaderProps {
  heading: string;
  headingBadgeNumber?: number;
  backCallback?: MouseEventHandler;
  closeCallback?: MouseEventHandler;
}

export const ModalHeader = (props: IModalHeaderProps) => {
  return (
    <div>
      <Header>
        {props.backCallback ? (
          <BackBtn onClick={props.backCallback}>
            <ArrowLeft />
          </BackBtn>
        ) : null}

        <CenterText>
          {props.heading}
          {props.headingBadgeNumber && <NumberBadge>{props.headingBadgeNumber}</NumberBadge>}
        </CenterText>

        {props.closeCallback ? (
          <CloseBtn onClick={props.closeCallback}>
            <CloseSvg />
          </CloseBtn>
        ) : null}
      </Header>
    </div>
  );
};

/* styling */
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-bottom: 24px;
`;

const BackBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1.5rem;

  border: none;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.5rem;

  border: none;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const CenterText = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 1.5rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-weight: 500;
`;

const NumberBadge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background:#8B5CF6;
    color: #fff;
    border-radius: 8px;
    margin-left: 8px;
    padding: 4px 8px;
    font-size: 13px;
    font-weight: 500;
}`;
