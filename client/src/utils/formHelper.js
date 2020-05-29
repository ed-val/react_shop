import NumberInput from '../components/itemsForm/NumberInput';
import SelectInput from '../components/itemsForm/SelectInput';

export default (inputType) => {
  let component;
  switch (inputType) {
    case 'number':
      component = NumberInput;
    break;
    case 'select':
      component = SelectInput;
    break;
    default:
      return null;
  }
  return component;
};
