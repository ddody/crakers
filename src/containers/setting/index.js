import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import iconFaq from './images/ico_faq.png';

const styles = theme => ({
  root: {
    width: '100%',
    paddingBottom: '60px'
  },
  linkBtnWrap: {
    borderBottom: '1px solid #e9e9e9',
    backgroundColor: '#fff'
  },
  linkBtn: {
    width: '33.3%',
    height: '60px',
    borderRight: '1px solid #e9e9e9'
  },
  linkBtnText: {
    fontSize: 12,
    color: '#000003'
  },
  settingNavWrap: {
    padding: '10px 0 0',
    backgroundColor: '#f5f5f5'
  },
  settingMenuWrap: {
    borderBottom: '1px solid #e9e9e9',
    height: '45px',
    backgroundColor: '#fff !important',
    paddingRight: '0',
    justifyContent: 'space-between'
  },
  settingMenu: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
    letterSpacing: '-.075em'
  },
  linkButton: {
    color: '#cccccc'
  },
  settingMenuDisable: {
    color: '#999999',
    fontWeight: '400'
  }
});

class Setting extends Component {
  static defaultProps = {
    heading: '설정'
  };

  state = {};

  render() {
    // const imgUrl = require(`${process.env.PUBLIC_URL}/images/ico_faq.png`);
    console.log(`${process.env.PUBLIC_URL}`);
    // console.log(imgUrl);
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header heading={this.props.heading} />
        <div className={classes.linkBtnWrap}>
          <ButtonBase focusRipple className={classes.linkBtn}>
            <span>
              <Typography component="span" className={classes.linkBtnText}>
                <Link to={`${process.env.PUBLIC_URL}/notice`}>공지사항 </Link>
              </Typography>
            </span>
          </ButtonBase>
          <ButtonBase focusRipple className={classes.linkBtn}>
            <span>
              <Typography component="span" className={classes.linkBtnText}>
                <Link to={`${process.env.PUBLIC_URL}/faq`}>자주 묻는 질문</Link>
              </Typography>
            </span>
          </ButtonBase>
          <ButtonBase
            focusRipple
            className={classes.linkBtn}
            style={{ borderRight: '0' }}>
            <span>
              <Typography component="span" className={classes.linkBtnText}>
                <Link to={`${process.env.PUBLIC_URL}/contact`}>문의하기</Link>
              </Typography>
            </span>
          </ButtonBase>
        </div>
        <List component="nav" className={classes.settingNavWrap}>
          <ListItem button className={classes.settingMenuWrap}>
            <Typography className={classes.settingMenu}>이용안내</Typography>
            <IconButton aria-label="link" className={classes.linkButton}>
              <KeyboardArrowRight />
            </IconButton>
          </ListItem>
          <ListItem button className={classes.settingMenuWrap}>
            <Typography className={classes.settingMenu}>
              서비스 이용약관
            </Typography>
            <IconButton aria-label="link" className={classes.linkButton}>
              <KeyboardArrowRight />
            </IconButton>
          </ListItem>
          <ListItem button className={classes.settingMenuWrap}>
            <Typography className={classes.settingMenu}>
              개인정보 취급방침
            </Typography>
            <IconButton aria-label="link" className={classes.linkButton}>
              <KeyboardArrowRight />
            </IconButton>
          </ListItem>
          <ListItem button className={classes.settingMenuWrap}>
            <Typography className={classes.settingMenu}>
              위치정보 이용약관
            </Typography>
            <IconButton aria-label="link" className={classes.linkButton}>
              <KeyboardArrowRight />
            </IconButton>
          </ListItem>
          <ListItem button className={classes.settingMenuWrap}>
            <Typography className={classes.settingMenu}>
              오픈소스 라이선스
            </Typography>
            <IconButton aria-label="link" className={classes.linkButton}>
              <KeyboardArrowRight />
            </IconButton>
          </ListItem>
        </List>
        <List component="nav" className={classes.settingNavWrap}>
          <ListItem button className={classes.settingMenuWrap}>
            <Typography className={classes.settingMenu}>알림 설정</Typography>
            <IconButton aria-label="link" className={classes.linkButton}>
              <KeyboardArrowRight />
            </IconButton>
          </ListItem>
          <ListItem button className={classes.settingMenuWrap}>
            <Typography className={classes.settingMenu}>로그아웃</Typography>
            <IconButton aria-label="link" className={classes.linkButton}>
              <KeyboardArrowRight />
            </IconButton>
          </ListItem>
        </List>
        <List component="nav" className={classes.settingNavWrap}>
          <ListItem button className={classes.settingMenuWrap}>
            <Typography
              className={[classes.settingMenu, classes.settingMenuDisable].join(
                ' '
              )}>
              회원탈퇴
            </Typography>
            <IconButton aria-label="link" className={classes.linkButton}>
              <KeyboardArrowRight />
            </IconButton>
          </ListItem>
        </List>
      </div>
    );
  }
}

Setting.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Setting);
