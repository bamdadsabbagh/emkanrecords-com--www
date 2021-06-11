import React from 'react'
import styles from './layout-footer.module.scss'

/**
 * @function
 * @name LayoutFooterComponent
 * @description layout: footer component
 * @return {JSX.Element}
 */
export default function LayoutFooterComponent () {

    return (
        <footer className={styles.container}>
            Made by&nbsp;
            <a
                href="https://bamdadsabbagh.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Bamdad Sabbagh
            </a>
        </footer>

    )

}