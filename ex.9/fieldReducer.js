const INITIAL_VALUE = { value: 'Opa'}

export default function ( state = INITIAL_VALUE, action){
  switch (action.type) {
    case 'VALUE_CHANGED':
      return{ value: action.payload }
      break;
    default:
      return state
  }
}
