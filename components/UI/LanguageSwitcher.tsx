'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Globe } from 'react-feather'
import { Drawer } from 'vaul'
import { cn } from '@/libs/cn'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' }
]

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    // Add new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
  }

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden sm:block relative group">
        <button 
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#202024] hover:bg-[#1A1A19] transition-colors text-sm"
          aria-label="Change language"
        >
          <Globe size={14} />
          <span>{currentLanguage.flag}</span>
        </button>
        
        <div className="absolute right-0 top-full mt-2 bg-[#141417] border border-[#252529] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[180px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={cn(
                "w-full px-4 py-3 text-left hover:bg-[#202024] transition-colors flex items-center gap-3 text-sm first:rounded-t-lg last:rounded-b-lg",
                currentLocale === lang.code && "bg-[#202024]"
              )}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden">
        <Drawer.Root>
          <Drawer.Trigger className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#202024] hover:bg-[#1A1A19] transition-colors text-sm">
            <Globe size={14} />
            <span>{currentLanguage.flag}</span>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="backdrop-blur-md flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline outline-[#202024]">
              <div className="p-4 rounded-t-[10px] flex-1">
                <div
                  aria-hidden
                  className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#202024] mb-8"
                />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="text-lg font-semibold mb-4 text-center">Choose Language</Drawer.Title>
                  <div className="grid grid-cols-1 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className={cn(
                          "border border-[#202024] rounded-lg py-3 px-4 text-left hover:bg-[#202024] transition-colors flex items-center gap-3",
                          currentLocale === lang.code && "bg-[#202024]"
                        )}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </>
  )
}