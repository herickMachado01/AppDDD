import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CardCidade = ({ nome, uf, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.content}>
        <MaterialIcons name="location-city" size={24} color="#4caf50" />
        <Text style={styles.cidade}>{nome}</Text>
      </View>
      <Text style={styles.uf}>{uf}</Text>
    </TouchableOpacity>
  );
};

export default CardCidade;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cidade: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    marginLeft: 10,
  },
  uf: {
    fontSize: 16,
    color: '#4caf50',
    fontWeight: 'bold',
  },
});
