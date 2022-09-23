import { Box, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IWrapper } from "./Wrapper";

const Slider = ({children}:IWrapper) => {
  const MotionDiv = chakra(motion.div);
  return (
    <MotionDiv  width="100%">
      <Box
        className="intermediate__wrapper"
        width="100%"
        overflowX="scroll"
      >
        {children}
      </Box>
    </MotionDiv>
  );
};

export default chakra(Slider);