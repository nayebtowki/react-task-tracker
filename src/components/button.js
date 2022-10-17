import PropTypes from "prop-types"
const button = ({text, onClick}) => {

  return (
    <div>
        <button onClick={onClick} className="btn">
            {text}
        </button>
    </div>
  )
}

button.propTypes={
    text: PropTypes.string,
    onClick: PropTypes.func,
}
export default button