import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg';

const TransactionSvg = ({color}) => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <Path d="M20.13 17.93V18.93C20.13 19.5866 20.0006 20.2368 19.7493 20.8434C19.4981 21.45 19.1298 22.0012 18.6655 22.4655C18.2012 22.9298 17.65 23.2981 17.0434 23.5494C16.4367 23.8007 15.7866 23.93 15.13 23.93H11.87C11.8545 24.4769 11.6899 25.0091 11.3937 25.4692C11.0976 25.9292 10.6813 26.2995 10.19 26.54C9.78012 26.7448 9.3281 26.8509 8.86995 26.85C8.19222 26.854 7.5331 26.6284 6.99995 26.21L3.28995 23.3C2.92862 23.0196 2.63619 22.6602 2.43502 22.2495C2.23385 21.8387 2.12927 21.3874 2.12927 20.93C2.12927 20.4726 2.23385 20.0213 2.43502 19.6105C2.63619 19.1998 2.92862 18.8404 3.28995 18.56L6.99995 15.65C7.44695 15.2933 7.9866 15.0717 8.55533 15.0115C9.12405 14.9512 9.69814 15.0548 10.21 15.31C10.8915 15.636 11.4163 16.2184 11.67 16.93H19.1C19.2338 16.926 19.367 16.9489 19.4919 16.9973C19.6167 17.0458 19.7305 17.1188 19.8265 17.2121C19.9226 17.3053 19.9989 17.4169 20.0511 17.5403C20.1032 17.6636 20.13 17.7961 20.13 17.93Z" fill={color}/>
        <Path d="M29.87 11.07C29.8701 11.5273 29.7656 11.9786 29.5645 12.3894C29.3635 12.8002 29.0712 13.1595 28.71 13.44L25 16.35C24.4594 16.7701 23.7946 16.9987 23.11 17C22.6519 17.0009 22.1998 16.8948 21.79 16.69C21.1085 16.364 20.5836 15.7817 20.33 15.07H12.87C12.6048 15.07 12.3504 14.9647 12.1629 14.7771C11.9754 14.5896 11.87 14.3352 11.87 14.07V13.07C11.87 11.7439 12.3968 10.4722 13.3345 9.53448C14.2721 8.5968 15.5439 8.07001 16.87 8.07001H20.13C20.1422 7.51096 20.3103 6.96644 20.6156 6.4979C20.9208 6.02935 21.3508 5.65543 21.8573 5.41834C22.3637 5.18124 22.9263 5.0904 23.4816 5.15608C24.0369 5.22175 24.5628 5.44132 25 5.79001L28.71 8.70001C29.0712 8.98051 29.3635 9.33987 29.5645 9.75063C29.7656 10.1614 29.8701 10.6127 29.87 11.07Z" fill={color}/>
        </Svg>
        
    )
}

export default TransactionSvg