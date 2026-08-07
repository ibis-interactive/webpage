import type { IconType } from 'react-icons'
import { FaAppStoreIos, FaBars, FaBriefcase, FaBullhorn, FaClapperboard, FaCode, FaCubes, FaEnvelope, FaFacebook, FaGears, FaGooglePlay, FaInstagram, FaItchIo, FaMusic, FaPalette, FaPanorama, FaSoundcloud, FaSteam, FaTwitch, FaYoutube } from 'react-icons/fa6'
import { MdArchitecture, MdBrush } from 'react-icons/md'

const icons: Record<string, IconType> = {
  'app-store-ios': FaAppStoreIos, 'bars': FaBars, 'briefcase': FaBriefcase,
  'bullhorn': FaBullhorn, 'clapperboard': FaClapperboard, 'code': FaCode,
  'compass-drafting': MdArchitecture, 'cubes': FaCubes, 'envelope': FaEnvelope,
  'facebook': FaFacebook, 'gears': FaGears, 'google-play': FaGooglePlay,
  'instagram': FaInstagram, 'itchio': FaItchIo, 'music': FaMusic,
  'paintbrush': MdBrush, 'palette': FaPalette, 'panorama': FaPanorama,
  'soundcloud': FaSoundcloud, 'steam': FaSteam, 'twitch': FaTwitch,
  'youtube': FaYoutube,
}

export default function AppIcon({ name, className }: { name: string; className?: string }) {
  const key = Object.keys(icons).find((item) => name.includes(item))
  const Icon = key ? icons[key] : FaBriefcase
  return <Icon className={className} aria-hidden="true" />
}
