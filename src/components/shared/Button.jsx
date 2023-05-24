import PropTypes from 'prop-types'

function Button({children , version, type, isDisabled}) {

    return (<button>

                type = {type}
                disabled = {isDisabled}
                className = {'btn btn -${version}'}
    
            </button>)

}

Button.defaultProps = {

    version: 'primary',
    type: 'button',
    isDisabled: false

}

Button.PropTypes = {

    // children
    children: PropTypes.node.isRequired,
    // version
    version: PropTypes.node.isRequired,
    // type
    type: PropTypes.node.isRequired,
    // isDisabled
    isDisabled: PropTypes.node.isRequired,

}

export default button