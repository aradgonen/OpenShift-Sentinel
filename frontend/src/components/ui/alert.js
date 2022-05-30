import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';

const AlertPopup = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export default function Alert() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleClick(TransitionRight)}>Test Alert</Button> */}
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}>
                  <AlertPopup severity="error">Security Threat Detected - Handling Autonomously</AlertPopup>
</Snackbar>
    </div>
  );
}
