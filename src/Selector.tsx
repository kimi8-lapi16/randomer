import React, { useState } from 'react';
import Lottery from './Lottery';
import Member from './Member';

const options = [
  '片手剣',
  '双剣',
  '太刀',
  '大剣',
  'ハンマー',
  '狩猟笛',
  'ランス',
  'ガンランス',
  'スラッシュアックス',
  'チャージアックス',
  '操虫棍',
  'ライトボウガン',
  'ヘビィボウガン',
  '弓',
];

export default function RandomSelector() {
  const [members, setMembers] = useState<string[]>([]);
  const callback = (value: string) => {
    setMembers((prev) => [...prev, value]);
  };
  const remove = (index: number) => {
    setMembers((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };
  const validate = (value: string) => {
    const aset = new Set(members);
    if (aset.has(value)) {
      return false;
    }
    return members.length < 4;
  };

  return (
    <>
      <Member members={members} callback={callback} remove={remove} validate={validate} />
      <Lottery members={members} options={options} />
    </>
  );
}
