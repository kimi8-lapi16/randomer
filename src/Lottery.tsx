import React, { useState } from 'react';
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
    <div>
      <Button label='抽選' onClick={lottery} />
      {result.map((e, index) => {
        return (
          <div key={`lottery-${e.name}-${index}`}>
            {e.name}: {e.result}
          </div>
        );
      })}
    </div>
  );
}
