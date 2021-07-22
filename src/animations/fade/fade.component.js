import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from '@react-spring/web'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @param {object} props react props
 * @param {React.ReactNode} props.children children
 * @returns {React.ReactElement} react component
 */
export function FadeComponent ({ children }) {

    const props = useSpring ({
        'from': {
            'opacity': 0,
        },
        'to': {
            'opacity': 1,
        },
    })

    return (
        <animated.div style={props}>
            {children}
        </animated.div>
    )

}

FadeComponent.propTypes = propTypes