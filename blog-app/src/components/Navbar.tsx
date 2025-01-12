import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Navbar = () => {
  return (
    <Card className="bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5 w-screen">
      <ul className="hidden md:flex items-center gap-10 text-card-foreground">
        <li className="text-primary font-medium">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Blogs</a>
        </li>
      </ul>

      <div className="flex items-center">
        <Button variant="secondary" className="hidden md:block px-2">
          Login
        </Button>
        <Button className="hidden md:block ml-2 mr-2">Sign Up</Button>
      </div>
    </Card>
  );
};

export default Navbar;
