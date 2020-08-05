import React, {FunctionComponent} from "react";

interface Props {
  count: number;
}

const Mistakes: FunctionComponent<Props> = (props: Props) => {
  const {count} = props;

  const mistakes = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((it, i) => <div key={`mistake-${i}`} className="wrong" />)}
    </div>
  );
};

export default Mistakes;
