import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({src, height=45, text}) => {
    return (
        <span>
            <img
                src={src}
                alt="User's profile avatar"
                className={styles.Avatar}
                height={height}
                width={height}
                />
            {/* show text next to the image if provided */}
            {text}
        </span>
    );
}

export default Avatar;