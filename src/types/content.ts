export type Language = 'es' | 'en'
export type LocalizedText = Record<Language, string>

export interface LinkData { href?: string; url?: string; icon: string; store?: string; label?: LocalizedText }
export interface Game { title: string; imgSrc: string; altText: string; modalId: string; description: LocalizedText; link: LinkData[]; playOn: LocalizedText }
export interface Role { icon: string; name: LocalizedText }
export interface TeamMember { name: string; img: string; roles: Role[]; description: LocalizedText; favorites: LocalizedText; links: LinkData[] }
export interface Social { name: string; url: string; aria: string; icon: string }
