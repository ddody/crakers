import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ContactView from './ContactView';
import Button from '@material-ui/core/Button';
import * as api from '../../modules/api';

const styles = theme => ({
  root: {
    width: '100%',
    letterSpacing: '-0.05em'
  },
  button: {
    borderRadius: 0,
    boxShadow: 'none',
    fontSize: 14,
    height: '100%',
    color: '#ffc212',
    backgroundColor: '#fff',
    border: '1.5px solid #ffc212',
    letterSpacing: '-0.05em',
    '&:focus': {
      boxShadow: 'none',
      backgroundColor: '#ffc212'
    }
  },
  buttonWrap: {
    backgroundColor: '#f5f5f5',
    padding: '10px 15px',
    height: '61.5px'
  }
});

class Contact extends Component {
  static defaultProps = {
    heading: '문의하기'
  };

  state = {
    list: [
      {
        id: 0,
        title: '크래커 베타 서비스 오픈합니다.',
        created: '2017.11.23',
        contents:
          '크래커 베타 서비스 오픈합니다./n 많은 서비스 이용 바랍니다./n 이용하시다가 불편하신 점은 언제든지 고객센터로 말씀해주세요./n 감사합니다./n'
      }
    ]
  };

  getContact = async data => {
    const response = await api.getCRAKERS(data);
    this.setState({
      list: response.data
    });
  };

  componentDidMount() {
    this.getContact('notices');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header heading={this.props.heading} />
        <Link to="/contact/write">
          <div className={classes.buttonWrap}>
            <Button className={classes.button} to="/contact/write" fullWidth>
              1:1 문의하기
            </Button>
          </div>
        </Link>
        <ContactView data={this.state.list} />
      </div>
    );
  }
}
Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
