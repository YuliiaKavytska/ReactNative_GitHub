import { useEffect, useState } from 'react'
import { Linking } from 'react-native'

export const useOpenUrl = (url) => {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const checkLoading = async () => {
      const canOpenURL = await Linking.canOpenURL(url)
      active !== canOpenURL && setActive(canOpenURL)
    }

    checkLoading()
  }, [url])

  return active
}