import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    minHeight: 'calc(100% - 56px)'
  }
});

class ContactReply extends React.Component {
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
        <ListItem button className={classes.nested}>
          <Chip label="답변" className={classes.chip} color="primary" />
          <ListItemText inset secondary={created} />
        </ListItem>
        <Typography className={classes.detail}>{contents}</Typography>
      </div>
    );
  }
}

ContactReply.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactReply);
