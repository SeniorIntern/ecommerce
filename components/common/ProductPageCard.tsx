import ProductPlaceholderImage from '@/public/product/productPlaceholder.jpg';
import { Minus, Plus, Share2 } from 'lucide-react';
import Img from '../reusables/Img';
import { Button } from '../ui/button';

type Props = {
  productId: string;
};

const ProductPageCard = ({ productId }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <div className="h-[500px]">
        <Img imgSrc={ProductPlaceholderImage} className="size-full" />
      </div>

      <div className="space-y-6">
        <p className="text-2xl font-extrabold">Folding Boardroom Table</p>

        <div className="space-y-3 text-mutedtext">
          <div>
            <p>Description:</p>
            <p>
              This Folding Boardroom Table offers convenience and flexibility
              for any boardroom or meeting space. Its folding design allows for
              easy setup and storage, making it perfect for multi-functional
              rooms or areas with limited space. The table features a durable
              surface suitable for meetings, presentations, or collaborative
              work sessions. With its sturdy construction and practical folding
              mechanism, this table provides a versatile solution for various
              corporate environments.
            </p>
          </div>

          <div>
            <p>Condition:</p>
            <p>
              Overall, the table is in good condition with minor signs of wear
              consistent with previous use.
              <br />
              The tabletop may have some light scratches or scuff marks, but
              these do not affect its functionality.
              <br />
              The folding mechanism operates smoothly, allowing for effortless
              setup and storage.
              <br />
              The table legs and support structure are sturdy and stable,
              providing reliable support during meetings or events.
            </p>
          </div>

          <div>
            <p>Dimensions:</p>
            <ul>
              <li>Width: 72 inches</li>
              <li>Depth: 36 inches</li>
              <li>Height: 29 inches</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-3xl font-extrabold text-accent">$789.00</p>
          <div>
            <p className="font-bold text-mutedtext">4 available</p>
            <div className="flex gap-6">
              <div className="flex h-10 items-center">
                <Button
                  variant="outline"
                  className="h-full rounded-r-none border-r-0 border-gray-200 text-mutedtext hover:bg-gray-100"
                  size="icon"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="flex h-full items-center border border-gray-200 px-3 text-sm">
                  {0}
                </span>
                <Button
                  variant="outline"
                  className="h-full rounded-l-none border-l-0 border-gray-200 text-mutedtext hover:bg-gray-100"
                  size="icon"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button>Add to Cart</Button>
              <Button variant="secondary">Book Now</Button>
              <Button
                variant="ghost"
                className="text-accent hover:bg-accent/20"
              >
                Share
                <Share2 size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;
