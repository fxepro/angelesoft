import Link from 'next/link';
import { AngelesoftLogo } from '@/components/angelesoft-logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'AI Tool', href: '/#ai-tool' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" aria-label="Angelesoft Home Page">
          <AngelesoftLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px]">
              <div className="p-4">
                <SheetClose asChild>
                  <Link href="/" className="mb-8 inline-block">
                    <AngelesoftLogo />
                  </Link>
                </SheetClose>
                <nav className="flex flex-col gap-4">
                  {[...navItems, { name: 'Contact', href: '/contact' }].map(
                    (item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="rounded-md px-3 py-2 text-lg font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
