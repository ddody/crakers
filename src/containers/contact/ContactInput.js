import React from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    minHeight: 'calc(100% - 56px)'
  },
  input: {
    marginTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    borderColor: '#e9e9e9',
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(30),
    fontWeight: '500',
    color: '#333333',
    letterSpacing: '-0.07em',
    fontFamily: ['Noto Sans KR']
  },
  textarea: {
    paddingBottom: '16px'
  },
  button: {
    borderRadius: 0,
    boxShadow: 'none',
    fontSize: theme.typography.pxToRem(20),
    height: '60px',
    color: '#fff',
    backgroundColor: '#ffc212',
    fontFamily: ['Noto Sans KR'],
    letterSpacing: '-0.05em',
    '&:focus': {
      boxShadow: 'none',
      backgroundColor: '#ffc212'
    }
  }
});

class ContactInput extends React.Component {
  static defaultProps = {
    heading: '문의하기'
  };

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch('http://crakers.co.kr:8000/common/notices', {
      method: 'POST',
      body: data
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header heading={this.props.heading} />
        <form
          action="/"
          method="POST"
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}>
          <div>
            <Input
              id="title"
              name="title"
              placeholder="제목"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description'
              }}
              fullWidth
            />
            <Input
              name="textarea"
              placeholder="문의내용"
              className={[classes.input, classes.textarea].join(' ')}
              inputProps={{
                'aria-label': 'Description'
              }}
              fullWidth
              multiline
            />
          </div>
          <Button
            variant="raised"
            className={classes.button}
            type="submit"
            fullWidth>
            등록하기
          </Button>
        </form>
      </div>
    );
  }
}

ContactInput.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactInput);
