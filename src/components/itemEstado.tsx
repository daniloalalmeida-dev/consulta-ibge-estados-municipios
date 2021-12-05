import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import { Estado } from '../pages/Home';

interface ItemEstadoProps extends TouchableOpacityProps {
  item: Estado;
}

export function ItemEstado({ item, ...rest }: ItemEstadoProps) {
  return (
    <TouchableOpacity style={styles.itemEstado} {...rest}>
      <View style={styles.avatarSigla}>
        <Text style={styles.sigla}>{item.sigla}</Text>
      </View>
      <Text style={styles.itemNome}>{item.nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#caf0f8',
    padding: 20,
    justifyContent: 'center',
  },
  itemEstado: {
    paddingVertical: 10,
    marginTop: 5,
    backgroundColor: '#90e0ef',
    borderRadius: 10,
    flexDirection: 'row',
  },
  avatarSigla: {
    width: 60,
    height: 60,
    backgroundColor: '#00b4d8',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  sigla: {
    fontSize: 20,
    color: 'white',
  },
  itemNome: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    marginLeft: 10,
  },
});
