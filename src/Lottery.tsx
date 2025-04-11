import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

type LotteryProps = {
  members: string[];
  options: string[];
};

type Result = {
  name: string;
  result: string;
};

export default function Lottery(props: LotteryProps) {
  const { members, options } = props;
  const [result, setResult] = useState<Result[]>([]);
  const lottery = () => {
    setResult(
      members.map((name) => {
        return {
          name,
          result: options[Math.floor(Math.random() * options.length)],
        };
      })
    );
  };
  return (
    <section>
      <Button label='抽選' onClick={lottery} />
      <ol>
        {result.map((e, index) => {
          return (
            <li key={`lottery-${e.name}-${index}`}>
              <LotteryResultWrapper>
                <dt>{e.name}</dt>
                <dd>{e.result}</dd>
              </LotteryResultWrapper>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

const LotteryResultWrapper = styled.dl`
  display: flex;
`;