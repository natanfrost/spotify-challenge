import logo from "@/assets/images/logo.png";
import Input from "@/components/ui/Input";
import { Languages, Search } from "lucide-react";

type HeaderProps = {
  onSearchChange: (value: string) => void;
};

const Header = ({ onSearchChange }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-gray-800 flex items-center mb-6">
      <div className="flex items-center h-full px-6">
        <img
          src={logo}
          alt="Spotify Logo"
          className="h-10 w-auto hidden md:block"
        />
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-70">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search />
          </span>
          <Input
            className="pl-11 py-2 rounded-full bg-muted text-foreground placeholder:text-muted-foreground"
            placeholder="Pesquise um artista"
            onChange={(e) => {
              console.log("Search input changed - INPUT", e);
              onSearchChange(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex items-center h-full px-6">
        <Languages color="white" cursor="pointer" />
      </div>
    </header>
  );
};

export default Header;
