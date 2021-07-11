export const IpData = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return { data: action.payload.data }

    default:
      return state
  }
}
