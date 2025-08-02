import logo from "@/assets/images/logo.png";
import Input from "@/components/ui/Input";
import { Languages, Search } from "lucide-react";

const Header = () => {
  console.log("Header component rendered");
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-background bg-black/85 flex items-center mb-6">
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
