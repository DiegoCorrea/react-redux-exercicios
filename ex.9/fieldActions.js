export default function changeValue(e) {
  console.log("Chamando no componenete")
  return {
    type: 'VALUE_CHANGED',
    payload: e.target.value
  }
}
