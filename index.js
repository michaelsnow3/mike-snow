module.exports = props => {
  if(props.name.toLowerCase() === 'mike' || 'michael') {
    return `${props.name} is hot`
  } else {
    return `please follow readme`
  }
}