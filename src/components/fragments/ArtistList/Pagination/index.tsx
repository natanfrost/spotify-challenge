import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import { cn } from "@/lib/utils";

type NavigationProps = React.ComponentProps<"nav"> & {
  className?: string;
  onNext?: () => void;
  onPrevious?: () => void;
};

const Navigation = ({ className, onNext, onPrevious }: NavigationProps) => {
  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={onPrevious} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={onNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Navigation;
