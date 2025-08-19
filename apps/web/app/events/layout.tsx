
import './events.css'

export const metadata = {
  title: 'Event Manager - Organize Your Events',
  description: 'A simple and elegant event management application built with Next.js Forge basically nextjs ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}