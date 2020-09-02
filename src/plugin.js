import Thumbor from 'thumbor-ts'

export default ({ $config }, inject) => {
  const thumbor = Thumbor($config.thumbor)

  inject('thumbor', thumbor)
}
