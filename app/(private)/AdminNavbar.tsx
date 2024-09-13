import Logout from '@/components/common/Logout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { adminNavOptions } from '@/staticData';
import Link from 'next/link';

export const AdminNavbar = () => {
  return (
    <nav className="flex justify-end border border-b-gray-200">
      <div className="flex items-center">
        <Separator orientation="vertical" className="h-8 w-[2px]" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="m-3 size-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Links</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {adminNavOptions.map((item, idx) => (
              <DropdownMenuItem key={idx} className="focus:bg-secondary">
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="focus:bg-secondary">
              <Logout />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
