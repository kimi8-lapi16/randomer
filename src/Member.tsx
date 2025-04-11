import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

type InputMemberProps = {
  reflect: (value: string) => void;
  validate: (value: string) => boolean;
};

function InputMember(props: InputMemberProps) {
  const { reflect, validate } = props;
  const [name, setName] = useState('');
  const submit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!validate(name)) {
        return
      }
      reflect(name);
      setName('')
    },
    [name, reflect, setName]
  );

  return (
      <form>
        <Input label="名前" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
        <Button onClick={submit} label='追加'/>
      </form>
  );
}

type MemberProps = {
  members: string[];
  callback: (value: string) => void;
  remove: (index: number) => void;
  validate: (value: string) => boolean;
};

export default function Member(props: MemberProps) {
  const { members, callback, remove, validate } = props;

  return (
    <section>
      <InputMember reflect={callback} validate={validate}/>
      <ol>
        {members.map((e, index) => {
          return (
            <li key={`${e}-${index}`}>
              <LotteryResultWrapper>
                <dt>{e}</dt>
                <dd>
                  <Button label="削除" onClick={() => remove(index)}/>
                </dd>
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