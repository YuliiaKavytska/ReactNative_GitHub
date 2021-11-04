import { useEffect, useState } from 'react'
import { Linking } from 'react-native'

export const useOpenUrl = (url) => {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const checkLoading = async () => {
      try {
        const canOpenURL = await Linking.canOpenURL(url)
        active !== canOpenURL && setActive(canOpenURL)
      } catch (err) {
        console.log(err)
        console.error('Error of checking of loading url')
      }
    }

    url && checkLoading()
  }, [url])

  return active
}