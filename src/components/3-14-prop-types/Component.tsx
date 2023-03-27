import PropTypes from "prop-types";

function PropComponent(props: { name: string; age: number }) {
  return <div>{props.name}</div>;
}
PropComponent.defaultProps = {
  name: "Tim",
  age: 10,
};

PropComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};
export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
