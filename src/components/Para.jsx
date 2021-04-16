import PropTypes from 'prop-types'

const Para = ({text}) => {
    return <p className="para">
        {text}
    </p>
}

Para.defaultProps = {
    text: "Pellentesque fermentum nunc vel risus laoreet molestie. Donec viverra finibus nisl vel ornare. Nunc risus neque, tempus id finibus vel, pellentesque tempus massa. Pellentesque id est laoreet, condimentum felis sed, elementum felis. Morbi lobortis ante vitae varius faucibus. Quisque mattis nisi sem, vitae lacinia erat congue ut. In libero ex, feugiat vitae risus sed, imperdiet auctor risus. Mauris sed elit vel ligula semper consectetur. Phasellus maximus dui et ligula hendrerit, id fermentum dui suscipit. Duis vulputate nunc nulla, non ultrices nisl efficitur ac. Nulla ipsum nisi, porta non libero vel, condimentum suscipit neque. Integer hendrerit sollicitudin tellus et efficitur. Sed libero sapien, tempor sit amet faucibus ac, bibendum nec tortor. Maecenas tellus neque, porttitor non eros id, interdum sodales mauris. Ut lobortis est sodales, bibendum libero in, lacinia justo. Proin id urna venenatis, feugiat leo in, pharetra nisi."
}

Para.propTypes = {
    text: PropTypes.string.isRequired
}

export default Para;