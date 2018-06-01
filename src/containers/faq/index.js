import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FaqList from './FaqList';
import Header from '../components/Header';
import * as api from '../../modules/api';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  // children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    letterSpacing: '-0.05em',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabRoot: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: '500',
    color: '#333333',
    letterSpacing: '-0.07em',
    marginLeft: '5%',
    marginRight: '5%'
  },
  tabsRoot: {
    backgroundColor: '#fff'
  },
  tabsIndicator: {
    backgroundColor: '#333',
    height: '2.5px'
  }
});

class Faq extends React.Component {
  static defaultProps = {
    heading: '자주 묻는 질문'
  };

  state = {
    list: [
      {
        id: 0,
        title: '크래커 베타 서비스 오픈합니다.',
        contents:
          '크래커 베타 서비스 오픈합니다./n 많은 서비스 이용 바랍니다./n 이용하시다가 불편하신 점은 언제든지 고객센터로 말씀해주세요./n 감사합니다./n'
      },
      {
        id: 1,
        title: '크래커 베타 서비스 오픈합니다.',
        contents:
          '크래커 베타 서비스 오픈합니다./n 많은 서비스 이용 바랍니다./n 이용하시다가 불편하신 점은 언제든지 고객센터로 말씀해주세요./n 감사합니다./n'
      },
      {
        id: 2,
        title: '크래커 베타 서비스 오픈합니다.',
        contents:
          '크래커 베타 서비스 오픈합니다./n 많은 서비스 이용 바랍니다./n 이용하시다가 불편하신 점은 언제든지 고객센터로 말씀해주세요./n 감사합니다./n'
      }
    ],
    value: 0
  };

  getFaq = async data => {
    const response = await api.getCRAKERS(data);
    this.setState({
      list: response.data
    });
  };

  componentDidMount() {
    this.getFaq('faq');
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    console.log(this.state.list);

    return (
      <div className={classes.root}>
        <Header heading={this.props.heading} />
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.tabsIndicator
            }}
            centered>
            <Tab label="서비스" className={classes.tabRoot} />
            <Tab label="회원가입/탈퇴" className={classes.tabRoot} />
            <Tab label="결제/환불" className={classes.tabRoot} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <FaqList
              data={this.state.list.filter(function(value) {
                return value.category_code === 'F01';
              })}
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <FaqList
              data={this.state.list.filter(function(value) {
                return value.category_code === 'F02';
              })}
            />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <FaqList
              data={this.state.list.filter(function(value) {
                return value.category_code === 'F03';
              })}
            />
          </TabContainer>
        )}
      </div>
    );
  }
}

Faq.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Faq);
