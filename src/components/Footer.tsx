import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import CustomButton from "./custom/home/CustomButton";

const Footer = () => {
  return (
    <footer className="flex flex-col ">
      {/* Table */}
      <Table radius="none" shadow="none" className="border-t">
        <TableHeader>
          <TableColumn
            className="text-xl text-black font-bold bg-white"
            width="20%"
          >
            Funiro.
          </TableColumn>
          <TableColumn className="text-medium bg-white" width="20%">
            Links
          </TableColumn>
          <TableColumn className="text-medium bg-white" width="20%">
            Help
          </TableColumn>
          <TableColumn className="text-medium bg-white" width="20%">
            Newsletter
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </TableCell>
            <TableCell>
              {" "}
              <Link href="#" underline="none" className="text-black text-sm">
                Home
              </Link>
            </TableCell>
            <TableCell>Payment Options</TableCell>
            {/* newsletter */}
            <TableCell>
              <div className="flex gap-3">
                <input
                  className="p-2 border-b border-black"
                  placeholder="Enter Your Email Address"
                />
                <CustomButton
                  text="SUBSCRIBE"
                  className="bg-white text-black border-b border-black"
                />
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>{""}</TableCell>
            <TableCell>
              <Link href="#" underline="none" className="text-black text-sm">
                Shop
              </Link>
            </TableCell>
            <TableCell>Returns</TableCell>
            <TableCell>{""}</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>{""}</TableCell>
            <TableCell>
              <Link href="#" underline="none" className="text-black text-sm">
                About
              </Link>
            </TableCell>
            <TableCell>Privacy Policies</TableCell>
            <TableCell>{""}</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>{""}</TableCell>
            <TableCell>
              <Link href="#" underline="none" className="text-black text-sm">
                Contact
              </Link>
            </TableCell>
            <TableCell>{""}</TableCell>
            <TableCell>{""}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* rights */}
      <div className="border-t m-5">
        <p className="pt-3">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
