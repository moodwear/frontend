import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

type PropsType = {
    type: 'news' | 'study' | 'project';
    text: String;
}

const calcColor = (type: 'news' | 'study' | 'project') => {
    if (type === 'news') {
        return colors.pink
    } else if (type === 'study') {
        return colors.orange
    } else {
        return colors.green
    }
}

const color = {
    ['news']: colors.pink,
    ['study']: colors.orange,
    ['project']: colors.green
}

let useStyles = makeStyles(() => ({
    text: {
      fontWeight: 600,
      lineHeight: '140%',
      fontSize: fonts.h7,
      textAlign: 'center',
      position: 'relative',
      '&:before': {
        content: '',
        padding: '2px 8px',
        position: 'absolute',
        width: '100px',
        height: '20px',
        top: 0,
        left: 0,
      }
    }
}));

const Tag = ({ type, text }: PropsType) => {
    let classes = useStyles();

    useEffect(() => {
        useStyles = makeStyles(() => ({
            text: {
              fontWeight: 600,
              lineHeight: '140%',
              fontSize: fonts.h7,
              color: color[type],
              textAlign: 'center',
              position: 'relative',
              '&:before': {
                content: '',
                backgroundColor: color[type],
                padding: '2px 8px',
                position: 'absolute',
                width: '100px',
                height: '20px',
                top: 0,
                left: 0,
              }
            }
        }));
    }, []);

    return (
        <span className={classes.text}>{text}</span>
    );
}

export default Tag;