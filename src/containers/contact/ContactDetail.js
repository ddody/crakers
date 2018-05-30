import React from 'react';
import PropTypes from 'prop-types';
import ContactReply from './ContactReply';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  chip: {
    fontSize: theme.typography.pxToRem(14),
    width: '60px',
    height: '25px',
    backgroundColor: '#fff',
    borderRadius: '12.5px',
    borderWidth: '1.5px',
    borderColor: '#d5d5d5',
    borderStyle: 'solid',
    color: '#999999'
  },
  listItem: {
    paddingTop: '6px',
    paddingBottom: '10px',
    borderBottom: '1px solid #efefef'
  },
  collapse: {
    padding: '15px'
  },
  detail: {
    fontSize: 14,
    marginBottom: '15px'
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    width: '49%',
    minHeight: '32px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #d5d5d5',
    borderRadius: '0',
    fontSize: 14,
    color: '#666'
  }
});

class ContactView extends React.Component {
  static defaultProps = {
    info: {
      id: 0,
      title: '크래커 베타 서비스 오픈합니다.',
      date: '2017.11.23',
      detail:
        '크래커 베타 서비스 오픈합니다./n 많은 서비스 이용 바랍니다./n 이용하시다가 불편하신 점은 언제든지 고객센터로 말씀해주세요./n 감사합니다./n'
    }
  };

  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    const { id, title, created, contents } = this.props.info;

    return (
      <div>
        <List component="nav" disablePadding>
          <ListItem
            button
            onClick={this.handleClick}
            className={classes.listItem}>
            <Chip label="답변대기" className={classes.chip} color="primary" />
            <ListItemText primary={title} secondary={created} />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={this.state.open}
            timeout="auto"
            unmountOnExit
            className={classes.collapse}>
            <List component="div" disablePadding>
              <Typography className={classes.detail}>{contents}</Typography>
              <div className={classes.buttonWrap}>
                <Button variant="outlined" className={classes.button}>
                  수정
                </Button>
                <Button variant="outlined" className={classes.button}>
                  삭제
                </Button>
              </div>
              <ContactReply info={this.props.info} />
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

ContactView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactView);
