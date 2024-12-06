import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  icon: {
    width: 150,
    height: 150,
    margin: 10,
  },
  info: {
    fontSize: 18,
    color: '#333',
    marginVertical: 8,
    textAlign: 'center',
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  suggestionItem: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 2,
    width: '100%',
    alignItems: 'center',
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'left',
    color: '#555',
  },
  
  historyItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },

  suggestionText: {
    fontSize: 16,
    color: '#333',
  },
  detailText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  detailIcon: {
    width: 180,
    height: 180,
    marginBottom: 16,
  },
});

export default styles;

