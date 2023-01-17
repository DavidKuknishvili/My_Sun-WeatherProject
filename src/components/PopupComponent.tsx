import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 5,
  backgroundColor: "#343d4b",
  p: 5,
};

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")`
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${grey[300]};
  background: ${grey[900]};
  border: 1px solid ${grey[700]};
  // box-shadow: 0px 2px 2px ${grey[900]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 3px solid ${blue[500]};
  }
`;

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function PopupComponent(props: {
  open: boolean;
  setcity: (value: React.SetStateAction<string>) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => props.setOpen(false);
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const [cityName, setCityName] = React.useState("");

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <motion.div
            style={{
              position: "absolute" as "absolute",

              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            transition={{ spring }}
            animate={{ scale: 1.2 }}
          >
            <Box sx={[style]}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Enter city name
              </Typography>
              <div
                style={{
                  color: "#ffffff50",
                  fontSize: "18px",
                  marginBottom: 20,
                }}
              >
                <Typography
                  id="transition-modal-description subtitle"
                  style={{ color: "#fffff50" }}
                  sx={{ mt: 0.5 }}
                >
                  You can get the weather forecast for any city
                </Typography>
              </div>
              <div className="popupInpButto">
                <CustomInput placeholder="City name…" onChange={(text)=> setCityName(text.target.value)} />
                <button
                  className="Location_button search"
                  onClick={() => {
                    props.setcity(cityName);
                    handleClose()
                  }}
                >
                  Search
                </button>
              </div>
            </Box>
          </motion.div>
        </Fade>
      </Modal>
    </div>
  );
}
