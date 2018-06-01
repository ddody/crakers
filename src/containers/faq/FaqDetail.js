import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  date: {
    fontWeight: theme.typography.fontWeightThin,
    marginTop: '2px',
    flexBasis: '24%',
    flexShrink: 0
  },
  heading: {
    fontWeight: '400',
    color: '#333333',
    letterSpacing: '-0.07em',
    fontFamily: ['Noto Sans KR'],
    wordBreak: 'break-word'
  },
  detail: {
    fontWeight: '400',
    color: '#666666',
    letterSpacing: '-0.07em',
    fontFamily: ['Noto Sans KR']
  },
  detailBg: {
    borderTop: '1px solid #e9e9e9',
    backgroundColor: '#f5f5f5',
    paddingTop: '24px'
  },
  more: {
    color: '#ffc212'
  }
});

class FaqDetail extends Component {
  static defaultProps = {
    info: {
      id: 0,
      title: '크래커 베타 서비스 오픈합니다.',
      date: '2017.11.23',
      detail:
        '크래커 베타 서비스 오픈합니다./n 많은 서비스 이용 바랍니다./n 이용하시다가 불편하신 점은 언제든지 고객센터로 말씀해주세요./n 감사합니다./n'
    }
  };

  state = {
    expanded: false
  };

  constructor() {
    super();
  }

  toggleExpand = (event, expanded) => {
    this.setState({
      expanded: expanded
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const { id, title, contents } = this.props.info;
    //
    return (
      <div>
        <ExpansionPanel
          expanded={this.state.expanded}
          onChange={this.toggleExpand}>
          <ExpansionPanelSummary
            expandIcon={
              <ExpandMoreIcon
                className={this.state.expanded ? classes.more : ''}
              />
            }>
            <Typography className={classes.heading}>{title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.detailBg}>
            <Typography className={classes.detail}>
              {contents.replace(/\n/gi, '\\r\\n')}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
FaqDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FaqDetail);
