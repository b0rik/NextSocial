import '@/app/globals.css'

import { auth, signIn, signOut } from '@/auth'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        {session ? (
          children
        ) : (
          <div>
            Sign in first!
          </div>
        )}
      </body>
    </html>
  )
}

export default RootLayout;