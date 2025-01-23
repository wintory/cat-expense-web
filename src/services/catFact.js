import axios from 'axios'

export const getCatFact = async ({ maxLength = 140 }) => {
  try {
    const result = await axios.get(
      `https://catfact.ninja/fact?max_length=${maxLength}`
    )
    return result
  } catch (err) {
    console.error(err)
    return err
  }
}
