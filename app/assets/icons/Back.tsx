import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Colors from "../../utils/styles/Colors"
const Back = ({color}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" >
    <Path d="M27 15H6.58998L12 9.63999C12.0937 9.54703 12.1681 9.43643 12.2189 9.31457C12.2696 9.19271 12.2958 9.062 12.2958 8.92999C12.2958 8.79798 12.2696 8.66727 12.2189 8.54542C12.1681 8.42356 12.0937 8.31296 12 8.21999C11.8126 8.03374 11.5592 7.9292 11.295 7.9292C11.0308 7.9292 10.7773 8.03374 10.59 8.21999L4.87998 13.88C4.31818 14.4425 4.00262 15.205 4.00262 16C4.00262 16.795 4.31818 17.5575 4.87998 18.12L10.54 23.78C10.7262 23.9647 10.9776 24.0689 11.24 24.07C11.3716 24.0708 11.5021 24.0455 11.6239 23.9958C11.7457 23.946 11.8565 23.8727 11.95 23.78C12.0437 23.687 12.1181 23.5764 12.1689 23.4546C12.2196 23.3327 12.2458 23.202 12.2458 23.07C12.2458 22.938 12.2196 22.8073 12.1689 22.6854C12.1181 22.5636 12.0437 22.453 11.95 22.36L6.58998 17H27C27.2652 17 27.5196 16.8946 27.7071 16.7071C27.8946 16.5196 28 16.2652 28 16C28 15.7348 27.8946 15.4804 27.7071 15.2929C27.5196 15.1053 27.2652 15 27 15Z" fill={Colors.dark} />
  </Svg>

)
export default Back
