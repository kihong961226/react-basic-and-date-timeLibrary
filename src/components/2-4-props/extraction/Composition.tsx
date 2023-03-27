/* 
  { a: number; b: string; c: boolean } === interface A { a:number, b:string, c:boolean }
*/

// interface A {
//   a: number;
//   b: string;
//   c: boolean;
//   d: string[];
// }

// function Test(props: A) {
//   return <div>123</div>;
// }
// function Test2(props: A) {
//   return <div>123</div>;
// }

interface WelcomeProps {
  name: string;
}

function Welcome(props: WelcomeProps) {
  return <h1>Hello, {props.name}</h1>;
}

// interface Props {}

export default function Composition() {
  return (
    <div>
      <Welcome name="Jinmmy" />
    </div>
  );
}
