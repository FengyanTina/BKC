import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function ServiceMenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>

      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sx={{ color: 'black', '&:focus': { outline: 'none' } }}
        >
          Services
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 10], // Vertical offset to move the menu below the button
              },
            },
            {
              name: 'preventOverflow',
              options: {
                altBoundary: true,
                tether: false,
              },
            },
            {
              name: 'flip',
              options: {
                fallbackPlacements: [], // Prevent flipping to maintain positioning
              },
            },
          ]}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper
                sx={{
                    position: 'absolute', // Position the Paper absolutely relative to the Popper
                    width: anchorRef.current ? anchorRef.current.clientWidth : 'auto', 

                    boxShadow: 'none', // Optional: Remove shadow if desired
                    backgroundColor: 'white', // Optional: Set a background color
                    transform: 'translateX(-50%)', // Center the Paper horizontally
                    left: '50%', // Center the Paper horizontally relative to the Popper
                    zIndex: 1300, // Ensure the Paper is on top of other elements
                  }}
             >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column', // Stack menu items vertically
                        alignItems: 'center', // Center items within the Paper
                       // Add padding for aesthetics
                      }}
                  >
                    <MenuItem onClick={handleClose}>SudayServices</MenuItem>
                    <MenuItem onClick={handleClose}>SundaySchool</MenuItem>
                    <MenuItem onClick={handleClose}>Prayers</MenuItem>
                    <MenuItem onClick={handleClose}>Baptisms</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
