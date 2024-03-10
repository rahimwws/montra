import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/tabs/Home';
import HomeSvg from '../../assets/icons/HomeSvg';
import TransactionSvg from '../../assets/icons/TransactionSvg';
import PiaChartSvg from '../../assets/icons/PiaChartSvg';
import UserSvg from '../../assets/icons/UserSvg';
import Colors from '../../utils/styles/Colors';
import Plus from '../../assets/icons/Plus';
import CustomTabButton from '../../components/ui/Buttons/CustomTabButton';

const Tab = createBottomTabNavigator();

function Service() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.violet,
      tabBarInactiveTintColor: "#C6C6C6",
      tabBarStyle: {
        backgroundColor: "#FCFCFC",
        height: 90,
        shadowOffset: {
          width: 0,
          height: 0
        },
        elevation: 0,
        borderRadius: 20,
        position: "absolute",
        borderTopWidth: 0,
      },
      tabBarLabelStyle:{
        fontFamily:"inter-m"
      }
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color }) => {
          return <HomeSvg color={color} />
        }
      }} />
      <Tab.Screen name="Transaction" component={Home} options={{
        tabBarIcon: ({ color }) => {
          return <TransactionSvg color={color} />
        }
      }} />
      <Tab.Screen name="Add" component={Home} options={{
        title: "",
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          height: 0
        },
        tabBarIcon: ({ color }) => {
          return <Plus color={color} />
        },
        tabBarButton(props) {
          return <CustomTabButton {...props} />
        },
      }} />
      <Tab.Screen name="Budget" component={Home} options={{
        tabBarIcon: ({ color }) => {
          return <PiaChartSvg color={color} />
        }
      }} />
      <Tab.Screen name="Profile" component={Home} options={{
        tabBarIcon: ({ color }) => {
          return <UserSvg color={color} />
        }
      }} />
    </Tab.Navigator>
  );
}

export default Service