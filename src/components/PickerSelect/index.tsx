import { Image, View } from 'react-native';
import RNPickerSelect, { Item as SelectItem } from 'react-native-picker-select';
import React, { ReactNode } from 'react';
import { DROPDOWN } from '@assets/index';
import styles from './styles';
import translate from '@localize/index';

export type Item = SelectItem;

interface Props {
  items: Item[];
  value?: any;
  onChange: (value: any) => void;
  placeholder: string;
}

const Icon = (): ReactNode => (
  <View style={styles.iconWrap}>
    <Image source={DROPDOWN} style={styles.icon} />
  </View>
);

class PickerSelect extends React.Component<Props> {
  static defaultProps = {
    placeholder: translate('picker_select.placeholder'),
  };

  render() {
    return (
      <RNPickerSelect
        style={styles}
        onValueChange={this.props.onChange}
        items={this.props.items}
        value={this.props.value}
        placeholder={{
          label: this.props.placeholder,
          value: null,
        }}
        Icon={Icon}
      />
    );
  }
}
export { PickerSelect as default };
