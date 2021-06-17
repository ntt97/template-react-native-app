import ContentLoader, { Rect } from 'react-content-loader/native';
import React from 'react';
import { colors } from '@constants/vars';
const MyLoader = (props: any) => (
  <ContentLoader backgroundColor="#f2f2f2" foregroundColor={colors.MESSAGE_FORM} {...props}>
    <Rect x="4%" y="5%" height="15%" width="40%" />
    <Rect x="50%" y="10%" height="1%" width="40%" />
    <Rect x="50%" y="15%" height="1%" width="35%" />

    <Rect x="4%" y="15%" height="15%" width="40%" />
    <Rect x="50%" y="20%" height="1%" width="40%" />
    <Rect x="50%" y="25%" height="1%" width="35%" />

    <Rect x="4%" y="35%" height="15%" width="40%" />
    <Rect x="50%" y="40%" height="1%" width="40%" />
    <Rect x="50%" y="45%" height="1%" width="35%" />

    <Rect x="4%" y="55%" height="15%" width="40%" />
    <Rect x="50%" y="60%" height="1%" width="40%" />
    <Rect x="50%" y="60%" height="1%" width="35%" />

    <Rect x="4%" y="75%" height="15%" width="40%" />
    <Rect x="√%" y="√%" height="1%" width="40%" />
    <Rect x="50%" y="85%" height="1%" width="35%" />
  </ContentLoader>
);

export const FooterLoading = (props: any) => (
  <ContentLoader
    height={100}
    speed={1}
    backgroundColor={'#f2f2f2'}
    foregroundColor={colors.MESSAGE_FORM}
    viewBox="0 0 380 70"
  >
    {/* Only SVG shapes */}
    <Rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <Rect x="50%" y="17" rx="4" ry="4" width="300" height="13" />
    <Rect x="50%" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);
export default MyLoader;
