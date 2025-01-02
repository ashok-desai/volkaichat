import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Mail = ({color = '#757070', ...props}) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 6L12 13L2 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PasswordIcon = ({color = '#757070', ...props}) => {
  return (
    <Svg width={21} height={24} viewBox="0 0 21 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.017 0a5.785 5.785 0 00-5.785 5.785v3.272A6.013 6.013 0 000 14.8v3.005a6.01 6.01 0 006.01 6.01h8.014a6.01 6.01 0 006.01-6.01V14.8c0-2.7-1.78-4.985-4.232-5.743V5.785A5.785 5.785 0 0010.017 0zm4.232 8.794v-3.01a4.232 4.232 0 10-8.464 0v3.01c.075-.003.15-.004.225-.004h8.014c.075 0 .15.001.225.004zM6.01 10.343h8.014a4.458 4.458 0 014.458 4.457v3.005a4.458 4.458 0 01-4.458 4.458H6.01a4.458 4.458 0 01-4.457-4.458V14.8a4.458 4.458 0 014.457-4.457zm1.553 6.235a.776.776 0 11-1.553 0 .776.776 0 011.553 0zm5.234.777a.776.776 0 100-1.553.776.776 0 000 1.553z"
        fill={color}
      />
    </Svg>
  );
};

const EyeClose = ({color = '#757070', ...props}) => {
  return (
    <Svg width={30} height={13} viewBox="0 0 30 13" fill="none" {...props}>
      <Path
        d="M27.317 1a20.858 20.858 0 01-1.382 1.728M2.902 1c.39.614.808 1.19 1.252 1.728m21.781 0l2.894 2.593m-2.894-2.593c-1.442 1.617-3.021 2.85-4.668 3.72m0 0l1.945 3.41m-1.945-3.41c-2.031 1.073-4.164 1.595-6.265 1.606m0 0v3.965m0-3.965a13.22 13.22 0 01-6.05-1.442m0 0L7.223 9.858m1.729-3.246C7.175 5.714 5.54 4.41 4.154 2.728m0 0L1.39 5.321"
        stroke={color}
        strokeWidth={0.86422}
        strokeLinecap="round"
      />
    </Svg>
  );
};

const User = ({color = '#757070', ...props}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.66 0-8 1.34-8 4v2h16v-2c0-2.66-5.34-4-8-4z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Menu = ({color = '#757070', ...props}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 12h18M3 6h18M3 18h18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Search = ({color = '#757070', ...props}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.35-4.35"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RightArrow = ({color = '#757070', ...props}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9 18l6-6-6-6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Icon = {
  Mail,
  PasswordIcon,
  EyeClose,
  User,
  Menu,
  Search,
  RightArrow,
};

export default Icon;
