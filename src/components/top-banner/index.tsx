import { Box, Typography } from "@mui/material";
import colorPalette from "../../helpers/color-palette";
import { Link } from "react-router-dom";
import { TopBannerData } from "./meta";
import { motion } from "framer-motion";

const TopBanner = () => {
  const { supportOptions, socialMediaIcons } = TopBannerData;
  return (
    <Box
      className="flex px-[8rem]  justify-between items-center"
      bgcolor={colorPalette.mutedGray}
    >
      <Typography color={colorPalette.codGray} fontSize={14} className="py-2">
        Reliable Taxi Service & Transport Solutions!
      </Typography>
      <Box className="flex gap-6 ">
        <Box className="flex gap-4 border-mistGray border-r border-l items-center px-6 py-2">
          {supportOptions.map((data, index) => (
            <Link
              to={data.path}
              key={index}
              className="!text-sm hover:!underline"
              color={colorPalette.codGray}
            >
              {data.name}
            </Link>
          ))}
        </Box>
        <Box className="flex gap-4 items-center py-2">
          {socialMediaIcons.map((data, index) => (
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.15,
              }}
              transition={{ scale: { type: "spring", stiffness: 500 } }}
            >
              <Link
                to={data.path}
                key={index}
                className="!text-sm"
                color={colorPalette.codGray}
              >
                {data.icons}
              </Link>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default TopBanner;
