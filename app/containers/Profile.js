import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  processColor,
  Text,
} from 'react-native';
import { HorizontalBarChart } from 'react-native-charts-wrapper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Badge, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import * as authActions from '../actions/auth-actions';
import {
  getNutrimentsConsumed,
  getNutrimentsPercentage,
} from '../selectors/stats-selector';
import colors from '../constants/colors';

const GREEN = processColor('#2ECC71');
const RED = processColor('#D14B5A');
const ORANGE = processColor('#FF8C00');
const BLUE = processColor('#0000FF');

const nutrimentsList = {
  potassium: 0,
  sodium: 1,
  proteins: 2,
  phosphorus: 3,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 70,
  },
  chartContainer: {
    height: hp('40%'),
    width: wp('80%'),
  },
  chart: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: '#2ECC71',
    fontWeight: 'bold',
  },
  nutrimentBadge: {
    height: hp('5%'),
    marginLeft: hp('2%'),

  },
  inlineWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profil',
    headerRight: (
      <View style={styles.topContainer}>
        <Button
          icon={<Icon name="edit" color="white" size={18} />}
          buttonStyle={{ backgroundColor: colors.theme }}
          onPress={() => navigation.navigate('ModifyProfile')}
          title="Edit"
        />
        <Button
          icon={<Icon name="power-off" color="white" size={18} />}
          buttonStyle={{ backgroundColor: 'red' }}
          onPress={() => {
            const logout = navigation.getParam('logout');
            logout();
          }}
          title="Sign out"
        />
      </View>
    ),
  });

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      legend: {
        enabled: true,
        textSize: 15,
        form: 'SQUARE',
        formSize: 14,
        formToTextSpace: 5,
        maxSizePercent: 0.5,
      },
      xAxis: {
        enabled: false,
        axisMaximum: 2.5,
        axisMinimum: 0,
      },
      yAxis: {
        right: {
          enabled: false,
          axisMaximum: 1,
          axisMinimum: 0,
        },
        left: {
          enabled: false,
          axisMaximum: 1,
          axisMinimum: 0,
        },
      },
    };
  }


  componentDidMount() {
    this.props.navigation.setParams({
      logout: this.props.logout,
    });
  }

  handleSelect(event) {
    const entry = event.nativeEvent;
    if (entry == null || entry.data == null) {
      this.setState({ selectedEntry: null });
    } else {
      const name = Object.keys(nutrimentsList)[entry.data.x];
      const value = entry.data.y;
      this.setState({ selectedEntry: { nutrimentName: name, nutrimentValue: value } });
    }
  }

  displaySelectedEntry() {
    if (this.state.selectedEntry != null) {
      return (
        <View style={styles.inlineWrapper}>
          <Badge containerStyle={{ backgroundColor: '#2ECC71' }}>
            <Text>{this.state.selectedEntry.nutrimentName}</Text>
          </Badge>
          <Text>
            {'    '}
            Vous avez consommé
            {' '}
            {this.props.nutriments[this.state.selectedEntry.nutrimentName]}
            {' grammes'}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    const data = {
      dataSets: [{
        label: Object.keys(nutrimentsList)[0],
        values: [{ x: 0, y: this.props.nutrimentsPercentage.potassium }],
        config: {
          drawValues: true,
          colors: [RED],
          valueTextSize: 20,
          valueFormatter: '#%',
        },
      }, {
        label: Object.keys(nutrimentsList)[1],
        values: [{ x: 1, y: this.props.nutrimentsPercentage.sodium }],
        config: {
          drawValues: true,
          colors: [GREEN],
          valueTextSize: 20,
          valueFormatter: '#%',
        },
      }, {
        label: Object.keys(nutrimentsList)[2],
        values: [{ x: 2, y: this.props.nutrimentsPercentage.proteins }],
        config: {
          drawValues: true,
          colors: [BLUE],
          valueTextSize: 20,
          valueFormatter: '#%',
        },
      }, {
        label: Object.keys(nutrimentsList)[3],
        values: [{ x: 3, y: this.props.nutrimentsPercentage.phosphorus }],
        config: {
          drawValues: true,
          colors: [ORANGE],
          valueTextSize: 20,
          valueFormatter: '#%',
        },
      }],
      config: {
        barWidth: 0.5,
        group: {
          fromX: 0,
          groupSpace: 0.1,
          barSpace: 0.1,
        },
      },
    };
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Statistiques journalières</Text>
        </View>
        <View style={styles.nutrimentBadge}>
          {this.displaySelectedEntry()}
        </View>
        <View style={styles.chartContainer}>
          <HorizontalBarChart
            style={styles.chart}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            data={data}
            legend={this.state.legend}
            chartDescription={{ text: '' }}
            doubleTapToZoomEnabled={false}
            pinchZoom={false}
            scaleEnabled={false}
            animation={{ durationY: 1000 }}
            onSelect={this.handleSelect}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nutriments: getNutrimentsConsumed(state),
  nutrimentsPercentage: getNutrimentsPercentage(state),
});

const mapDispatchToProps = {
  logout: authActions.logout,
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  nutriments: PropTypes.shape({
    potassium: PropTypes.number.isRequired,
    sodium: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    phosphorus: PropTypes.number.isRequired,
  }).isRequired,
  nutrimentsPercentage: PropTypes.shape({
    potassium: PropTypes.number.isRequired,
    sodium: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    phosphorus: PropTypes.number.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
