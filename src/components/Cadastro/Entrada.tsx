import React from 'react';
import {
  View,
  Text,
  TextInput,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';

interface EntradaProps {
  placeholder: string;
  style: TextStyle;
  value: Readonly<string>;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  onChangeText?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <>
      <TextInput
        placeholder={props.placeholder}
        style={props.style}
        value={props.value}
        keyboardType={props.keyboardType}
        editable={props.editable}
        onChangeText={props.onChangeText}
      />
    </>
  );
}
