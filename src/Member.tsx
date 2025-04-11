import React, { useCallback, useState } from 'react';
import Button from './Button';

type InputMemberProps = {
  reflect: (value: string) => void;
};

function InputMember(props: InputMemberProps) {
  const { reflect } = props;
  const [name, setName] = useState('');
  const submit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      reflect(name);
    },
    [name, reflect]
  );

  return (
    <div>
      <form>
        <label>
          名前 <input onChange={(e) => setName(e.currentTarget.value)} />
        </label>
        <Button onClick={submit} label='追加'/>
      </form>
    </div>
  );
}

type MemberProps = {
  members: string[];
  callback: (value: string) => void;
};

export default function Member(props: MemberProps) {
  const { members, callback } = props;
  return (
    <div>
      <InputMember reflect={callback} />
      <div>
        {members.map((e, index) => {
          return (
            <div key={`${e}-${index}`}>
              <span>{e}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
