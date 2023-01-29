import { StyleSheet } from 'react-native';
import CatalogComponent from '../components/catalog_component'

const Catalog = ({ navigation }) => {
  return (
    <div>
      <CatalogComponent navigation={navigation} />
    </div>
  );
}

const styles = StyleSheet.create({
});

export { Catalog };